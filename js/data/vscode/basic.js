window.data = window.data || { list: [] };

var block = {
  title: "vscode 基础编辑",
  group: "vscode",
  items: [
    {
      name: "⌘X",
      desc: "剪切行 (空选定)",
      strong: false
    },
    {
      name: "⌘C",
      desc: "复制行 (空选定)",
      strong: false
    },
    {
      name: "⌥↓ / ⌥↑",
      desc: "向上/向下移动行",
      strong: false
    },
    {
      name: "⇧⌥↓ / ⇧⌥↑",
      desc: "向上/向下复制行",
      strong: false
    },
    {
      name: "⌃Z / ⌘⇧K",
      desc: "删除行",
      strong: false
    },
    {
      name: "⌘Enter / ⌘⇧Enter",
      desc: "在下面/上面插入行",
      strong: true
    },
    {
      name: "⌘⇧",
      desc: "跳到匹配的括号",
      strong: true
    },
    {
      name: "⌘] / ⌘",
      desc: "行增加/减少缩进",
      strong: false
    },
    {
      name: "Home / End",
      desc: "转到行首/行尾",
      strong: false
    },
    {
      name: "⌘↑ / ⌘↓",
      desc: "转到文件开头/末尾",
      strong: false
    },
    {
      name: "⌃PgUp / ⌃PgDown",
      desc: "向上/下滚动(行)",
      strong: false
    },
    {
      name: "⌘PgUp /⌘PgDown",
      desc: "向上/向下滚动(页)",
      strong: false
    },
    {
      name: "⌘⌥[ / ⌘⌥",
      desc: "折叠/展开区域",
      strong: true
    },
    {
      name: "⌘K ⌘[ / ⌘K ⌘",
      desc: "折叠/展开所有子区域",
      strong: true
    },
    {
      name: "⌘K ⌘0 / ⌘K ⌘J",
      desc: "折叠/展开所有区域",
      strong: false
    },
    {
      name: "⌘K ⌘C",
      desc: "添加行注释",
      strong: false
    },
    // {
    //   name: "⌘K ⌘U",
    //   desc: "删除行注释",
    //   strong: false
    // },
    // {
    //   name: "⌘",
    //   desc: "切换行注释",
    //   strong: false
    // },
    {
      name: "⇧⌥A",
      desc: "切换块注释",
      strong: false
    },
    {
      name: "⌥Z",
      desc: "切换自动换行",
      strong: false
    },
    
  ]
};

window.data.list.push(block);

