import { defineUserConfig } from "vuepress";
// 引入搜索插件
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { searchPlugin } from '@vuepress/plugin-search'
import theme from "./theme.js";

export default defineUserConfig({
  base: "/Blog-WY/",

  lang: "zh-CN",
  title: "万有的博客",
  description: "这里记录了一些故事、一些情绪……",

  theme,
  plugins: [
    /* searchProPlugin({
      // 配置选项
    }), */
    /* searchPlugin({
      locales: {
        
        '/zh/': {
          placeholder: '搜索',
        },
      },
    }), */
  ],
  // Enable it with pwa
  // shouldPrefetch: false,
});
