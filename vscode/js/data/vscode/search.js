window.data = window.data || { list: [] };

var block = {
  title: "查找和替换",
  group: "vscode",
  items: [
    {
      name: "⌘F",
      desc: "查找",
      strong: false
    },
    {
      name: "⌘⌥F",
      desc: "替换",
      strong: false
    },
    {
      name: "⌘G / ⌘⇧G",
      desc: "查找下一个/上一个",
      strong: false
    },
    {
      name: "⌥Enter",
      desc: "选择所有找到的查找匹配项",
      strong: false
    },
    {
      name: "⌘D",
      desc: "将选择添加到下一个查找匹配项",
      strong: false
    },
    {
      name: "⌘K ⌘D",
      desc: "将上次选择移动到下一个查找匹配项",
      strong: false
    }
  ]
};

window.data.list.push(block);
