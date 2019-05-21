<template>
  <div>
    <Carousel autoplay v-model="value2" loop>
      <CarouselItem v-for="(item, index) in caCarouselList" :key="index">
        <div class="demo-carousel">
          <img :src="item.book_cover" alt>
        </div>
      </CarouselItem>
    </Carousel>
    <div>
      <ul class="ul">
        <li class="card" v-for="(item, index) in caCarouselList" :key="index">
          <div class="card-left">
            <img :src="item.book_cover" alt>
          </div>
          <div class="card-right">
            <p>书名：{{item.bookname}}</p>
            <p>书名：{{item.author_name}}</p>
            <p>类型：{{item.class_name}}</p>
            <p>介绍：{{item.book_info}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      value2: 0,
      caCarouselList: []
    };
  },
  created() {
    axios({
      url: "https://www.apiopen.top/novelApi",
      method: "get"
    }).then(res => {
      for (let value of res.data.data) {
        this.caCarouselList.push(value);
      }
      console.log(this.caCarouselList);
    });
  }
};
</script>

<style lang="scss" scoped>
.demo-carousel {
  height: 1.5rem;
  padding: 0.1rem;
  width: 100%;
  margin: 0 auto;
}
.card {
  padding: 0.1rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 0.5rem;
  &-left {
    flex: 1;
    background: #eee;
  }
  &-right {
    flex: 2;
    font-size: 0.12rem;
  }
}
</style>