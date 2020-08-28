window.data = window.data || { list: [] };

var block = {
  title: "vscode 富语言编辑",
  group: "vscode",
  items: [
    {
      name: "⌃Space",
      desc: "触发建议",
      strong: false
    },
    {
      name: "⌘⇧Space",
      desc: "触发参数提示",
      strong: false
    },
    {
      name: "Tab",
      desc: "Emmet 展开缩写",
      strong: false
    },
    {
      name: "⇧⌥F",
      desc: "格式化文件",
      strong: false
    },
    {
      name: "⌘K ⌘F",
      desc: "格式化选定代码",
      strong: true
    },
    // {
    //   name: "F12",
    //   desc: "转到定义",
    //   strong: false
    // },
    // {
    //   name: "⌥F12",
    //   desc: "Peek 定义",
    //   strong: false
    // },
    // {
    //   name: "⌘K F12",
    //   desc: "打开定义到侧边",
    //   strong: true
    // },
    {
      name: "⌘.",
      desc: "快速解决",
      strong: false
    },
    // {
    //   name: "⇧F12",
    //   desc: "显示引用",
    //   strong: true
    // },
    // {
    //   name: "F2",
    //   desc: "重命名符号",
    //   strong: false
    // },
    {
      name: "⌘⇧. / ⌘⇧,",
      desc: "替换为下一个/上一个值",
      strong: false
    },
    {
      name: "⌘K ⌘X",
      desc: "裁剪尾随空格",
      strong: false
    },
    {
      name: "⌘K M",
      desc: "更改文件语言",
      strong: false
    }
  ]
};

window.data.list.push(block);
