window.data = window.data || { list: [] };

var block = {
  title: "vscode 显示",
  group: "vscode",
  items: [
    {
      name: "⌘⌃F",
      desc: "切换全屏",
      strong: false
    },
    {
      name: "⌘⌥1",
      desc: "切换标签布局",
      strong: false
    },
    {
      name: "⌘= / ⌘-",
      desc: "放大/缩小",
      strong: false
    },
    {
      name: "⌘B",
      desc: "切换侧栏可见性",
      strong: false
    },
    {
      name: "⌘⇧E",
      desc: "显示资源管理器/切换焦点",
      strong: false
    },
    {
      name: "⌘⇧F",
      desc: "显示搜索",
      strong: false
    },
    {
      name: "⇧⌃G",
      desc: "显示Git",
      strong: false
    },
    {
      name: "⌘⇧D",
      desc: "显示调试",
      strong: false
    },
    {
      name: "⌘⇧X",
      desc: "显示扩展",
      strong: false
    },
    {
      name: "⌘⇧H",
      desc: "在文件中替换",
      strong: false
    },
    {
      name: "⌘⇧J",
      desc: "切换搜索详细信息",
      strong: false
    },
    {
      name: "⌘⇧C",
      desc: "打开新命令提示符/终端",
      strong: false
    },
    {
      name: "⌘⇧U",
      desc: "显示输出面板",
      strong: false
    },
    {
      name: "⌘⇧V",
      desc: "切换Markdown预览",
      strong: false
    },
    {
      name: "⌘K V",
      desc: "从侧边打开Markdown预览",
      strong: false
    }
  ]
};

window.data.list.push(block);
