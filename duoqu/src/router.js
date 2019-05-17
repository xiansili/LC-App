import Vue from "vue";
import Router from "vue-router";
import Music from "./views/Music.vue";
import Movie from "./views/Movie.vue";
import Book from "./views/Book.vue";
import Me from "./views/Me.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/music",
      name: "Music",
      component: Music
    },
    {
      path: "/movie",
      name: "Movie",
      component: Movie 
    },
    {
      path: "/book",
      name: "Book",
      component: Book
    },
    {
      path: "/me",
      name: "Me",
      component: Me
    }
  ]
});
