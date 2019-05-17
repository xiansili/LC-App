<template>
  <div>
    <div>
      <mt-tabbar v-model="message" @click.native='change(message)'>
        <mt-tab-item id="music">
          <img slot="icon" src>
          音乐
        </mt-tab-item>
        <mt-tab-item id="movie">
          <img slot="icon" src>
          电影
        </mt-tab-item>
        <mt-tab-item id="book">
          <img slot="icon" src>
          书籍
        </mt-tab-item>
        <mt-tab-item id="me">
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
// import Music from "@/views/Music";
// import Movie from "@/views/Movie";
// import Book from "@/views/Book";
// import Me from "@/views/Me";
export default {
  data() {
    return {
      message: "music"
    };
  },
  //创建阶段
  created() {
      //利用H5的缓存机制缓存路由
   this.message = localStorage.getItem('message');
  },
  //方法
  methods: {
      //利用H5的缓存机制缓存路由
      change(message){
          localStorage.setItem('message', message)
      }
  },

  //   components: { Music, Movie, Book, Me },

  computed: {
     
  },
  watch: {
    //它可以用来监测Vue实例上的数据变动
    message(val) {
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