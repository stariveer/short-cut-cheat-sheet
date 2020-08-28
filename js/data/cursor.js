window.data = window.data || { list: [] };

var block = {
  title: "光标",
  group: "overall",
  items: [
    {
      name: "⌃B",
      desc: "光标向左移动",
      strong: false
    },
    {
      name: "⌃F",
      desc: "光标向右移动",
      strong: false
    },
    {
      name: "⌃H / Backspace",
      desc: "删除",
      strong: false
    },
    {
      name: "⌃D / Insert",
      desc: "向后删除",
      strong: false
    },
    {
      name: "⌃A",
      desc: "光标移动到行首",
      strong: false
    },
    {
      name: "⌃E",
      desc: "光标移动到行尾",
      strong: false
    },
    {
      name: "⌃P",
      desc: "光标移动到上1行",
      strong: false
    },
    {
      name: "⌃N",
      desc: "光标移动到下1行",
      strong: false
    },
    {
      name: "⌃U",
      desc: "剪切从光标到行首",
      strong: false
    },
    {
      name: "⌃K",
      desc: "剪切从光标到行尾",
      strong: false
    }
  ]
};

window.data.list.push(block);
