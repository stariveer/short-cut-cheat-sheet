window.data = window.data || { list: [] };

var block = {
  title: "vscode 标签管理",
  group: "vscode",
  items: [
    // {
    //   name: "⌘W",
    //   desc: "关闭标签",
    //   strong: false
    // },
    {
      name: "⌘K F",
      desc: "关闭文件夹",
      strong: false
    },
    {
      name: "⌘\\ ",
      desc: "拆分标签",
      strong: false
    },
    {
      name: "⌘1 / ⌘2 / ⌘3",
      desc: "聚焦到第1, 第2或第3标签组",
      strong: false
    },
    {
      name: "⌘K ⌘ ← / ⌘K ⌘ →",
      desc: "聚焦到上一个/下一个标签组",
      strong: false
    },
    {
      name: "⌘K ⌘⇧ ← / ⌘K ⌘⇧ →",
      desc: "向左/向右移动标签组",
      strong: false
    },
    {
      name: "⌘K ← / ⌘K →",
      desc: "移动活动标签组",
      strong: false
    },
    {
      name: "⌘⌥ ← / ⌘⌥ →",
      desc: "切换到上/下一个标签",
      strong: false
    },
    {
      name: "⌘⌃ ← / ⌘⌃ →",
      desc: "将标签移动到上 / 下一组",
      strong: false
    }
  ]
};

window.data.list.push(block);
