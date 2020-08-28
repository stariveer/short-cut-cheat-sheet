window.data = window.data || { list: [] };

var block = {
  title: "vscode 集成终端",
  group: "vscode",
  items: [
    {
      name: "⌃`",
      desc: "显示集成终端",
      strong: false
    },
    {
      name: "⇧⌃`",
      desc: "新建集成终端",
      strong: false
    },
    // {
    //   name: "unassigned",
    //   desc: "复制所选内容",
    //   strong: false
    // },
    // {
    //   name: "unassigned",
    //   desc: "粘帖到活动终端中",
    //   strong: false
    // },
    {
      name: "⌘↑",
      desc: "向上滚动(行)",
      strong: false
    },
    {
      name: "⌘↓",
      desc: "向下滚动(行)",
      strong: false
    },
    {
      name: "PgUp",
      desc: "向上滚动(页)",
      strong: false
    },
    {
      name: "PgDown",
      desc: "向下滚动(页)",
      strong: false
    },
    {
      name: "⌘Home",
      desc: "滚动到顶部",
      strong: false
    },
    {
      name: "⌘End",
      desc: "滚动到底部",
      strong: false
    }
  ]
};

window.data.list.push(block);
