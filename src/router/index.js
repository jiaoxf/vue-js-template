import Vue from "vue";
import VueRouter from "vue-router";
import RouterConfig from "./routerConfig";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: RouterConfig
});

//beforeEach是router的钩子函数，在进入路由前执行
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    //判断是否有标题
    document.title = to.meta.title;
  }
  next();
});

export default router;
