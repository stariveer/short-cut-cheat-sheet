window.data = window.data || { list: [] };

var block = {
  title: "vscode 导航",
  group: "vscode",
  items: [
    {
      name: "⌘T",
      desc: "显示所有符号",
      strong: false
    },
    {
      name: "⌃G",
      desc: "转到行...",
      strong: false
    },
    {
      name: "⌘P",
      desc: "转到文件...",
      strong: false
    },
    {
      name: "⌘⇧O",
      desc: "转到符号...",
      strong: false
    },
    {
      name: "⌘⇧M",
      desc: "显示问题面板",
      strong: false
    },
    // {
    //   name: "F8 / ⇧F8",
    //   desc: "转到下一个/上一个错误或警告",
    //   strong: false
    // },
    {
      name: "⇧⌃Tab",
      desc: "导航标签组历史记录",
      strong: false
    },
    {
      name: "⌃- / ⇧⌃-",
      desc: "后退/前进",
      strong: false
    },
    {
      name: "⇧⌃M",
      desc: "切换 Tab 键是否移动焦点",
      strong: false
    }
  ]
};

window.data.list.push(block);
