import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  // 功能演示
  // "/demo/",
  "/echarts/",
  {
    text: "JavaScript",
    icon: "pen-to-square",
    prefix: "/javaScript/",
    children: [
      {
        text: "基础",
        icon: "pen-to-square",
        prefix: "basic/",
        children: [
          { text: "基础1", icon: "pen-to-square", link: "1" },
          { text: "基础2", icon: "pen-to-square", link: "2" },
          /* "3",
          "4", */
        ],
      },
      /* {
        text: "进阶",
      } */
    ]
  },
  {
    text: "轮子",
    icon: "icon-ajax",
    prefix: "/wheel/",
    children: [
      {
        text: "moment.js",
        icon: "pen-to-square",
        prefix: "moment/",
        children: [
          { text: "moment1", icon: "pen-to-square", link: "1" },
          { text: "moment2", icon: "pen-to-square", link: "2" },
          /* "3",
          "4", */
        ],
      },
      /* {
        text: "进阶",
      } */
    ]
  },
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "苹果",
        icon: "pen-to-square",
        prefix: "apple/",
        children: [
          { text: "苹果1", icon: "pen-to-square", link: "1" },
          { text: "苹果2", icon: "pen-to-square", link: "2" },
          "3",
          "4",
        ],
      },
      {
        text: "香蕉",
        icon: "pen-to-square",
        prefix: "banana/",
        children: [
          {
            text: "香蕉 1",
            icon: "pen-to-square",
            link: "1",
          },
          {
            text: "香蕉 2",
            icon: "pen-to-square",
            link: "2",
          },
          "3",
          "4",
        ],
      },
      { text: "樱桃", icon: "pen-to-square", link: "cherry" },
      { text: "火龙果", icon: "pen-to-square", link: "dragonfruit" },
      "tomato",
      "strawberry",
    ],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
