import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Category from "./views/Category.vue";
import Cart from "./views/Cart.vue";
import Me from "./views/Me.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    
    {
      path: "/Category",
      name: "category",
      component: Category 
    },
    {
      path: "/Cart",
      name: "cart",
      component: Cart
    },
    {
      path: "/Me",
      name: "me",
      component: ME
    }
  ]
});
