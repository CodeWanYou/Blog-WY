import { defineUserConfig } from "vuepress";
// 引入搜索插件
import { searchProPlugin } from "vuepress-plugin-search-pro";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/wy/",

  lang: "zh-CN",
  title: "万有的博客",
  description: "这里记录了一些故事、一些情绪……",

  theme,
  plugins: [
    
  ],
  // Enable it with pwa
  // shouldPrefetch: false,
});
