import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "kyulog",
  description: "A github pages blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/public/icons/icon-72x72.png",
    nav: [
      { text: "Home", link: "/" },
      { text: "Computer Science", link: "/cs" },
      { text: "Interests", link: "/interests" },
    ],

    sidebar: [
      {
        text: "Computer Science",
        items: [
          { text: "Operating System", link: "/cs/os" },
          { text: "Network", link: "/cs/network" },
        ],
      },
      {
        text: "Interests",
        items: [
          { text: "item1", link: "/interests/item1" },
          { text: "item2", link: "/interests/item2" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
