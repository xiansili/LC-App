import Vue from "vue";
import Router from "vue-router";
import Music from "./views/Music.vue";
import Movie from "./views/Movie.vue";
import Book from "./views/Book.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "music",
      component: Music
    },
    {
      path: "/Movie",
      name: "movie",
      component: Movie 
    },
    {
      path: "/Book",
      name: "book",
      component: Book
    }
  ]
});
