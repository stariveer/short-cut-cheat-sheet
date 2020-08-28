window.data = window.data || { list: [] };

var block = {
  title: "vim 剪切, 复制, 粘贴",
  group: "vim",
  items: [
    {
      name: "yy",
      desc: "复制当前行",
      strong: false
    },
    {
      name: "2yy",
      desc: "复制 2 行",
      strong: false
    },
    {
      name: "yw",
      desc: "复制当前单词",
      strong: false
    },
    {
      name: "y$",
      desc: "复制, 从光标位置到行末",
      strong: false
    },
    {
      name: "p",
      desc: "在光标后粘贴",
      strong: false
    },
    {
      name: "P",
      desc: "在光标前粘贴",
      strong: false
    },
    {
      name: "dd",
      desc: "剪切当前行",
      strong: false
    },
    {
      name: "2dd",
      desc: "剪切 2 行",
      strong: false
    },
    {
      name: "dw",
      desc: "剪切当前单词",
      strong: false
    },
    {
      name: "D / d$",
      desc: "剪切, 从光标位置到行末",
      strong: false
    },
    {
      name: "x",
      desc: "剪切当前字符",
      strong: false
    }
  ]
};

window.data.list.push(block);
