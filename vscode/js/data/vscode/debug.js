window.data = window.data || { list: [] };

var block = {
  title: "调试",
  group: "vscode",
  items: [
    {
      name: "F9",
      desc: "切换断点",
      strong: false
    },
    {
      name: "F5",
      desc: "开始/继续",
      strong: true
    },
    {
      name: "F11 / ⇧F11",
      desc: "单步进入/跳出",
      strong: false
    },
    {
      name: "F10",
      desc: "单步跳过",
      strong: true
    },
    {
      name: "⇧F5",
      desc: "停止",
      strong: false
    },
    {
      name: "⌘K ⌘I",
      desc: "显示悬停",
      strong: false
    },
    
  ]
};

window.data.list.push(block);
