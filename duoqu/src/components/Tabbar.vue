<template>
  <div>
    <div>
      <mt-tabbar v-model="message">
        <mt-tab-item id="music" to="/">
          <img slot="icon" src>
          音乐
        </mt-tab-item>
        <mt-tab-item id="movie" to="/movie">
          <img slot="icon" src>
          电影
        </mt-tab-item>
        <mt-tab-item id="book" to="/book">
          <img slot="icon" src>
          书籍
        </mt-tab-item>
        <mt-tab-item id="me" to="/me">
          <img slot="icon" src>
          我的
        </mt-tab-item>
      </mt-tabbar>
    </div>

    <!-- <div>
      <mt-tab-container v-model="active">
        <mt-tab-container-item id="music">
           <Music></Music>
        </mt-tab-container-item>
        <mt-tab-container-item id="movie">
           <Movie></Movie>
        </mt-tab-container-item>
        <mt-tab-container-item id="book">
          <Book></Book>
        </mt-tab-container-item>
        <mt-tab-container-item id="me">
         <Me></Me>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>-->
  </div>
</template>

<script>
import Music from "@/views/Music";
import Movie from "@/views/Movie";
import Book from "@/views/Book";
import Me from "@/views/Me";
export default {
  data() {
    return {
      message: this.selected
    };
  },
  components: { Music, Movie, Book, Me },
  watch: {
    message(val, oldVal) {
      // 这里就可以通过 val 的值变更来确定去向
      switch (val) {
        case "music":
          this.$router.push("/music");
          break;
        case "movie":
          this.$router.push("/movie");
          break;
        case "book":
          this.$router.push("/book");
          break;
        case "me":
          this.$router.push("/me");
          break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>