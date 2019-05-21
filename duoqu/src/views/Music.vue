<template>
  <div>
    <mt-navbar v-model="selected" class="nav" fixed>
      <mt-tab-item id="1">最新音乐</mt-tab-item>
      <mt-tab-item id="2" @click.native="recom">为您推荐</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected" class="music">
      <mt-tab-container-item id="1">
        <mt-cell v-for="(item, index) in newList" :title="item.songname" :key="index"/>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="(item, index) in recomList" :title="item.songname" :key="index"/>
      </mt-tab-container-item>
    </mt-tab-container>
    <BackTop :height="1000" :bottom="100">
      <div class="top">返回顶端</div>
    </BackTop>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      selected: "1",
      newList: [],
      recomList: []
    };
  },
  created() {
    let url =
      "https://bird.ioliu.cn/v1?url=https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?uin=0&notice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=27";
    axios({
      methods: "get",
      url
    })
      .then(res => {
        for (let i = 0, len = res.data.songlist.length; i < len; i++) {
          this.newList.push(res.data.songlist[i].data);
        }
      })
      .catch(err => {});
  },
  methods: {
    recom() {
      let daili = "https://bird.ioliu.cn/v1?url=";
      let url =
        "https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?notice=0&platform=h5&tpl=3&page=detail&type=top&topid=36";
      axios({
        url: daili + url,
        method: "get"
      })
        .then(res => {
          for (let item of res.data.songlist) {
            this.recomList.push(item.data);
          }
        })
        .catch(err => {});
    }
  }
};
</script>

<style lang="scss" scoped>
.music {
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
}
.top {
  padding: 10px;
  background: rgba(0, 153, 229, 0.7);
  color: #fff;
  text-align: center;
  border-radius: 2px;
}
</style>