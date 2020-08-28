window.data = window.data || { list: [] };

var block = {
  title: "vim 标签",
  group: "vim",
  items: [
    {
      name: ":tabnew [page.words.file]",
      desc: "在新标签中打开文件",
      strong: false
    },
    {
      name: "⌃wT",
      desc: "将窗口变成标签",
      strong: false
    },
    {
      name: "gt or :tabn[ext]",
      desc: "切换到下一个标签",
      strong: false
    },
    {
      name: "gT or :tabp[revious]",
      desc: "切换到上一个标签",
      strong: false
    },
    {
      name: "#gt",
      desc: "切换到第 # 个标签",
      strong: false
    },
    {
      name: ":tabm[ove] #",
      desc: "移动标签到第 # 位(下标从 0 开始)",
      strong: false
    },
    {
      name: ":tabc[lose]",
      desc: "关闭当前标签",
      strong: false
    },
    {
      name: ":tabo[nly]",
      desc: "关闭其他标签",
      strong: false
    },
    {
      name: ":tabdo command",
      desc: "在所有标签中执行命令 (例如 :tabdo q 关闭所有标签)",
      strong: false
    }
  ]
};

window.data.list.push(block);
