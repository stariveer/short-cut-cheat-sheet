window.data = window.data || { list: [] };

var block = {
  title: "vim 编辑文本",
  group: "vim",
  items: [
    {
      name: "r",
      desc: "替换当前字符",
      strong: false
    },
    {
      name: "J",
      desc: "将下一行合并到当前行, 并在之间插入一个空格",
      strong: false
    },
    {
      name: "gJ",
      desc: "将下一行合并到当前行, 两部分文本之间不含空格",
      strong: false
    },
    {
      name: "gwip",
      desc: "重新调整段落",
      strong: false
    },
    // {
    //   name: "g~",
    //   desc: "switch case up to motion",
    //   strong: false
    // },
    // {
    //   name: "gu",
    //   desc: "change to lowercase up to motion",
    //   strong: false
    // },
    // {
    //   name: "gU",
    //   desc: "change to uppercase up to motion",
    //   strong: false
    // },
    {
      name: "cc",
      desc: "将光标所在的行删除, 然后进入插入模式",
      strong: false
    },
    {
      name: "C",
      desc: "将光标处到行尾删除, 然后进入插入模式",
      strong: false
    },
    {
      name: "c$",
      desc: "将光标处到行尾删除, 然后进入插入模式",
      strong: false
    },
    {
      name: "ciw",
      desc: "将光标所在的单词删除, 然后进入插入模式",
      strong: false
    },
    {
      name: "cw",
      desc: "从光标位置开始, 修改单词",
      strong: false
    },
    {
      name: "s",
      desc: "删除当前字符, 然后进入插入模式",
      strong: false
    },
    {
      name: "S",
      desc: "清空当前行, 然后进入插入模式 cc",
      strong: false
    },
    {
      name: "xp",
      desc: "当前字符后移",
      strong: false
    },
    {
      name: "u",
      desc: "撤销",
      strong: false
    },
    {
      name: "U",
      desc: "restore (undo) last changed line",
      strong: false
    },
    {
      name: "⌃r",
      desc: "重复",
      strong: false
    },
    {
      name: ".",
      desc: "再次执行上个命令",
      strong: false
    },
    
  ]
};

window.data.list.push(block);
