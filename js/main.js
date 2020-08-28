window.data = window.data || { list: [] };

//根据id编译模板在进行渲染
var html = template("template", window.data);

//填充渲染结果到content
document.getElementById("content").innerHTML = html;
