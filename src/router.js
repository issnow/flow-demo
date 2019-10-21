import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "/form"
      // component: Home
    },
    {
      path: "/form",
      name: "form",
      component: () => import("./views/form.vue")
    },
    {
      path: "/render",
      name: "render",
      component: () => import("./views/render.vue")
    },
    {
      path: "/approval",
      name: "approval",
      component: () => import("./views/approval.vue")
    }
    // {
    //   path: "/about",
    //   name: "about",
    //   component: () =>import("./views/About.vue")
    // }
  ]
});
