window.data = window.data || { list: [] };

var block = {
  title: "全局",
  group: "overall",
  items: [
    {
      name: "⇧⌃A / ⇧⌃D",
      desc: "将当前窗口移动到上/下一个显示器",
      strong: false
    },
    {
      name: "⌥Space",
      desc: "打开网易云词典",
      strong: false
    },
    {
      name: "⌘⇧3",
      desc: "全屏截图到桌面",
      strong: false
    }
  ]
};

window.data.list.push(block);
