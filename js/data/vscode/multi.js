window.data = window.data || { list: [] };

var block = {
  title: "vscode 多光标和选择",
  group: "vscode",
  items: [
    {
      name: "⌥+Click",
      desc: "插入光标",
      strong: false
    },
    {
      name: "⌘⌥↑ / ⌘⌥↓",
      desc: "在上面/下面插入光标",
      strong: true
    },
    {
      name: "⌘U",
      desc: "撤消上一个光标操作",
      strong: false
    },
    {
      name: "⇧⌥I",
      desc: "在选定的每一行末尾插入光标",
      strong: true
    },
    {
      name: "⌘I",
      desc: "选择当前行",
      strong: false
    },
    {
      name: "⌘⇧L",
      desc: "选择所有找到的查找匹配项",
      strong: false
    },
    // {
    //   name: "⌘F2",
    //   desc: "选择所有当前找到的单词",
    //   strong: false
    // },
    {
      name: "⌘⇧⌃ →",
      desc: "扩大选择",
      strong: true
    },
    {
      name: "⌘⇧⌃ ←",
      desc: "缩小选择",
      strong: true
    },
    {
      name: "⇧⌥ 拖动鼠标",
      desc: "列 (框) 选择",
      strong: false
    },
    {
      name: "⌘⇧⌥↑ / ⌘⇧⌥↓",
      desc: "列 (框) 向上/下选择(行)",
      strong: true
    },
    // {
    //   name: "⌘⇧⌥ ← / ⌘⇧⌥ →",
    //   desc: "列 (框) 向左/右选择",
    //   strong: false
    // },
    {
      name: "⌘⇧⌥PgUp / ⌘⇧⌥PgDown",
      desc: "列 (框) 选择向上/下选择(页)",
      strong: false
    }
  ]
};

window.data.list.push(block);
