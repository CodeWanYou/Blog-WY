import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "如何使用",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "文章",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
    "intro",
    "slides",
  ],
  /* 
    手动生成侧边栏
    "" 代表 README文件
    'bar' 获取 该文件的title标题
  */
  "/echarts": [
    "",
    'common',
    'bar',
    'line',
  ],
  "/javaScript": 'structure'
  /* "/javaScript": [
    {
      text: "javaScript",
      icon: "chart-simple",
      // prefix: "demo/",
      link: "javaScript/",
      activeMatch: "^/javaScript/$",
      // children: "structure",
    },
  ], */
});
