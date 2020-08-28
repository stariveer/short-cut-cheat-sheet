window.data = window.data || { list: [] };

var block = {
  title: "vim 选择文本、操作（可视化模式）",
  group: "vim",
  items: [
    {
      name: "v",
      desc: "进入可视化模式, 移动光标高亮选择",
      strong: false
    },
    {
      name: "V",
      desc: "进入可视化模式(行粒度选择)",
      strong: false
    },
    {
      name: "o",
      desc: "切换光标到选择区开头/结尾",
      strong: false
    },
    {
      name: "⌃v",
      desc: "进入可视化模式(矩阵选择)",
      strong: false
    },
    {
      name: "O",
      desc: "切换光标到选择区的角",
      strong: false
    },
    {
      name: "aw",
      desc: "选择当前单词",
      strong: false
    },
    {
      name: "ab",
      desc: "选择被 () 包裹的区域(含括号)",
      strong: false
    },
    {
      name: "aB",
      desc: "选择被 {} 包裹的区域(含花括号)",
      strong: false
    },
    {
      name: "at",
      desc: "选择被  \<\> 包裹的区域(含括号)",
      strong: false
    },
    {
      name: "ib",
      desc: "选择被 () 包裹的区域(不含括号)",
      strong: false
    },
    {
      name: "iB",
      desc: "选择被 {} 包裹的区域(不含花括号)",
      strong: false
    },
    {
      name: "it",
      desc: "选择被  \<\> 包裹的区域(不含括号)",
      strong: false
    },
    {
      name: "Esc",
      desc: "退出可视化模式",
      strong: false
    },
    {
      name: "\>",
      desc: "向右缩进",
      strong: false
    },
    {
      name: "\<",
      desc: "向左缩进",
      strong: false
    },
    {
      name: "y",
      desc: "复制",
      strong: false
    },
    {
      name: "d",
      desc: "剪切",
      strong: false
    },
    {
      name: "~",
      desc: "大小写切换",
      strong: false
    },
    {
      name: "u",
      desc: "切换为小写",
      strong: false
    },
    {
      name: "U",
      desc: "切换为大写",
      strong: false
    },
  ]
};

window.data.list.push(block);
