window.data = window.data || { list: [] };

var block = {
  title: "vscode 文件管理",
  group: "vscode",
  items: [
    {
      name: "⌘N",
      desc: "新建文件",
      strong: false
    },
    {
      name: "⌘O",
      desc: "打开文件",
      strong: false
    },
    {
      name: "⌘S",
      desc: "保存",
      strong: false
    },
    {
      name: "⌘⇧S",
      desc: "另存为",
      strong: false
    },
    {
      name: "⌘⌥S",
      desc: "保存全部",
      strong: false
    },
    {
      name: "⌘W",
      desc: "关闭",
      strong: false
    },
    {
      name: "⌘K ⌘W",
      desc: "关闭所有",
      strong: false
    },
    {
      name: "⌘⇧T",
      desc: "重新打开已关闭的标签",
      strong: false
    },
    {
      name: "⌘K",
      desc: "输入保持打开",
      strong: false
    },
    {
      name: "⌃Tab / ⇧⌃Tab",
      desc: "打开下一个/上一个",
      strong: false
    },
    {
      name: "⌘K P",
      desc: "复制活动文件的路径",
      strong: false
    },
    {
      name: "⌘K R",
      desc: "在资源管理器中显示活动文件",
      strong: false
    },
    {
      name: "⌘K O",
      desc: "在新窗口/实例中显示活动文件",
      strong: false
    }
  ]
};

window.data.list.push(block);
