window.data = window.data || { list: [] };

var block = {
  title: "vim 插入模式 - 插入/追加文本",
  group: "vim",
  items: [
    {
      name: "i",
      desc: "从光标前开始插入字符",
      strong: false
    },
    {
      name: "I",
      desc: "从行首开始插入字符",
      strong: false
    },
    {
      name: "a",
      desc: "从光标后开始插入字符",
      strong: false
    },
    {
      name: "A",
      desc: "从行尾开始插入字符",
      strong: false
    },
    {
      name: "o",
      desc: "在当前行之下另起一行, 开始插入字符",
      strong: false
    },
    {
      name: "O",
      desc: "在当前行之上另起一行, 开始插入字符",
      strong: false
    },
    {
      name: "ea",
      desc: "从当前单词末尾开始插入",
      strong: false
    },
    {
      name: "⌃h",
      desc: "删除光标前的字符",
      strong: false
    },
    {
      name: "⌃w",
      desc: "删除光标前的单词",
      strong: false
    },
    {
      name: "⌃j",
      desc: "在插入模式下开始新行",
      strong: false
    },
    {
      name: "⌃t",
      desc: "在插入模式下将整行缩进(右移)一次",
      strong: false
    },
    {
      name: "⌃d",
      desc: "在插入模式下将整行反向缩进(左移)一次",
      strong: false
    },
    {
      name: "⌃n",
      desc: "在插入模式下在光标之后插入(自动完成)",
      strong: false
    },
    {
      name: "⌃p",
      desc: "在插入模式下在光标之前插入(自动完成)",
      strong: false
    },
    // {
    //   name: "Esc",
    //   desc: "退出插入模式",
    //   strong: false
    // },
  ]
};

window.data.list.push(block);
