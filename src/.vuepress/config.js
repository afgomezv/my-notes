const { description } = require("../../package");

module.exports = {
  dest: "docs",
  base: "/my-notes",
  title: "FunCode",
  description: "Guia de mis Notas",
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  themeConfig: {
    //repo: "",
    editLinks: false,
    //docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    nav: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "React",
        link: "/react/",
      },
      {
        text: "Node.js",
        link: "/node/",
      },
      {
        text: "Docker",
        link: "/docker/",
      },
      {
        text: "Typescript",
        link: "/typescript/",
      },
    ],
    sidebar: ["/", "/guide/", "/react/", "/node/", "/docker/", "/typescript/"],
  },

  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
