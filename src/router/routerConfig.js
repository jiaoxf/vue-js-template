const routesConfig = [
  {
    path: "/",
    name: "home",
    meta: {
      title: "主页"
    },
    component: resolve => require(["../views/Home.vue"], resolve)
  },
  {
    path: "/list",
    name: "list",
    meta: {
      title: "列表页"
    },
    component: resolve => require(["../views/List/index.vue"], resolve)
  }
];

export default routesConfig;
