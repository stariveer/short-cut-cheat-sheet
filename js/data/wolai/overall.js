window.data = window.data || { list: [] };

var block = {
  title: "wolai 全局",
  group: "wolai",
  items: [
    {
      name: "⌘\\ ",
      desc: "收起或打开侧边栏",
      strong: false
    },
    {
      name: "⌘S",
      desc: "保存更改（不按也会随时保存）",
      strong: false
    },
    {
      name: "⌘[",
      desc: "返回上一页（后退）",
      strong: false
    },
    {
      name: "⌘]",
      desc: "期望下一页（前进）",
      strong: false
    },
    {
      name: "⌘P",
      desc: "显示/关闭搜索 和最近浏览页面列表",
      strong: false
    },
    {
      name: "⌘⇧P",
      desc: "显示/关闭页面关系图",
      strong: false
    },
    {
      name: "⌘⌃SPACE",
      desc: "打开Emoji表情窗口 (Mac)",
      strong: false
    },
    {
      name: "⌘⌥G",
      desc: "打开/关闭Good Night模式 (Mac)",
      strong: false
    },
    {
      name: "⌘⇧U",
      desc: "显示/隐藏块结构虚线框",
      strong: false
    },
    {
      name: "⌘⇧L",
      desc: "启用/关闭悬浮目录",
      strong: false
    }
  ]
};

window.data.list.push(block);
