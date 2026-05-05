---
title: 用 Codex 修一个真实 bug
description: 用一个分页函数的 off-by-one bug 为例，完整演示如何用 Codex CLI 定位问题、确认修复方案、验证结果——这套流程可以直接套用到你自己的项目里。
order: 3
difficulty: 入门
updated: 2026-05-05
---

## 为什么读这篇

前两篇文章带你装好了 Codex CLI、跑通了第一次对话。但日常工作里，你遇到最多的场景不是"帮我创建文件"，而是"这里有个 bug，帮我找到它"。

这篇文章用一个真实的分页函数 bug，完整走一遍"发现 bug → 复现 bug → 交给 Codex → 确认修复 → 验证结果"的完整流程。走完这一遍，你就有了一套能直接套用到自己项目的方法。

## 一句话结论

把 bug 的复现步骤和预期行为一起描述给 Codex，它能定位原因并给出修复方案，你只需要确认和验证。

## 案例：分页函数的 off-by-one bug

### 问题背景

这是一个常见的分页工具函数，用来从列表里取出某一页的数据：

```javascript
// paginate.js
function paginate(items, page, pageSize) {
  const start = page * pageSize;
  const end = start + pageSize;
  return items.slice(start, end);
}

module.exports = { paginate };
```

调用方期望 `page` 从 `1` 开始（第 1 页、第 2 页……），但代码里 `start = page * pageSize` 把 `page` 当成了 0 索引来用。这是一个经典的 off-by-one 错误，在代码看起来"没问题"的时候最难发现。

用下面这个脚本复现 bug：

```javascript
// check.js
const { paginate } = require('./paginate');

const products = [
  'Apple', 'Banana', 'Cherry', 'Date', 'Elderberry',
  'Fig', 'Grape', 'Honeydew', 'Kiwi', 'Lemon',
];

console.log('第 1 页（预期前 3 个）:', paginate(products, 1, 3));
console.log('第 2 页（预期第 4-6 个）:', paginate(products, 2, 3));
```

运行结果：

```
第 1 页（预期前 3 个）: [ 'Date', 'Elderberry', 'Fig' ]
第 2 页（预期第 4-6 个）: [ 'Grape', 'Honeydew', 'Kiwi' ]
```

第 1 页本该是 `['Apple', 'Banana', 'Cherry']`，却跑到第 4-6 个去了——bug 稳定复现。

### 第一步：启动 Codex，描述 bug

进入项目目录，启动 Codex：

```bash
codex
```

给 Codex 描述 bug 时，把三件事说清楚：**什么函数、出了什么问题、预期是什么**。不用自己分析原因，那是 Codex 的活：

```
paginate.js 里的 paginate 函数有 bug。调用 paginate(products, 1, 3) 时，
预期返回前 3 个元素，实际返回的是第 4-6 个。page 参数应该从 1 开始计数。
请帮我找到原因并修复。
```

### 第二步：看 Codex 的分析过程

Codex 会先读 `paginate.js` 的内容，然后给出分析。输出大致是这样的：

```
Reading file: paginate.js

Found the bug:
  const start = page * pageSize;

When page=1 and pageSize=3:
  start = 1 * 3 = 3  (skips the first 3 items)

Expected behavior (1-indexed pages):
  start = (page - 1) * pageSize = (1-1) * 3 = 0

Proposed fix:
  const start = (page - 1) * pageSize;
```

Codex 直接定位到了 `start = page * pageSize` 这一行，并给出了修复方案。

### 第三步：确认修复

Codex 在 `on-request` 模式下会先问你是否允许修改文件：

```
Codex wants to edit file: paginate.js
- const start = page * pageSize;
+ const start = (page - 1) * pageSize;

Allow? [y/n/e]
```

看一下 diff，符合预期，输入 `y` 确认。

### 第四步：验证修复结果

```bash
node check.js
```

输出：

```
第 1 页（预期前 3 个）: [ 'Apple', 'Banana', 'Cherry' ]
第 2 页（预期第 4-6 个）: [ 'Date', 'Elderberry', 'Fig' ]
```

结果符合预期，bug 修复完成。

## 完整可复现例子

把上面的案例从头跑一遍的完整步骤：

```bash
# 1. 准备案例代码
mkdir codex-bug-fix
cd codex-bug-fix

# 创建有 bug 的分页函数
cat > paginate.js << 'EOF'
function paginate(items, page, pageSize) {
  const start = page * pageSize;
  const end = start + pageSize;
  return items.slice(start, end);
}

module.exports = { paginate };
EOF

# 创建复现脚本
cat > check.js << 'EOF'
const { paginate } = require('./paginate');

const products = [
  'Apple', 'Banana', 'Cherry', 'Date', 'Elderberry',
  'Fig', 'Grape', 'Honeydew', 'Kiwi', 'Lemon',
];

console.log('第 1 页（预期前 3 个）:', paginate(products, 1, 3));
console.log('第 2 页（预期第 4-6 个）:', paginate(products, 2, 3));
EOF

# 2. 确认 bug 存在
node check.js
# 输出：第 1 页（预期前 3 个）: [ 'Date', 'Elderberry', 'Fig' ]  ← 错误

# 3. 启动 Codex
codex

# 4. 在提示符里输入（一段话描述清楚）：
# paginate.js 里的 paginate 函数有 bug。调用 paginate(products, 1, 3) 时，
# 预期返回前 3 个元素（Apple, Banana, Cherry），实际返回的是第 4-6 个。
# page 参数应该从 1 开始计数。请帮我找到原因并修复。

# 5. 确认 Codex 提出的修改（y 确认）

# 6. 退出 Codex（Ctrl+C 或输入 /exit），验证修复
node check.js
# 输出：第 1 页（预期前 3 个）: [ 'Apple', 'Banana', 'Cherry' ]  ← 正确
```

## 常见坑

**坑 1：只说"有 bug"，没说预期行为**

"这段代码有问题，帮我修"——Codex 不知道"正确"应该是什么，只能靠猜，结果可能修偏。加上"预期是……，实际是……"两句话，让它有明确的参考目标，分析准确率会高很多。

**坑 2：bug 涉及多个文件，只给了其中一个**

Codex 会读取你当前目录的文件，但如果 bug 的上下文跨了多个文件（比如调用方在 `controller.js`，实现在 `service.js`），最好在描述里提一句"问题可能在 `controller.js` 调用 `paginate` 的地方，也可能在 `paginate.js` 内部"。主动给更多线索，分析更精准。

**坑 3：接受修复后没有验证，过了几天发现改出了新 bug**

Codex 的修复方案一般是对的，但偶尔会有边缘情况没覆盖到。修完之后跑一下相关测试，或者把几个典型输入手动跑一遍。这篇案例里用 `node check.js` 验证就是这个目的——养成这个习惯，能提前发现问题。

**坑 4：Codex 给的修复方案和你想的不一样，但也能工作**

有时候 Codex 会选一个你没想到的修法（比如把 page 在函数内部减 1，而不是在 start 计算时处理）。这不一定是错的，但如果你有偏好，就在提示符里直接说："这种方法可以，但我更希望……"，Codex 会调整方案。

## 下一步

修完第一个 bug 之后，你已经掌握了 Codex CLI 的核心工作流。接下来可以：

- [命令速查表](../reference/commands.md)——Codex CLI 所有常用命令和参数一览
- [第一次跑通 Codex](./first-run.md)——回顾一下基本操作和审批模式
- [Codex 是什么](../getting-started/codex-overview.md)——了解 Codex 各入口的区别和适用场景
