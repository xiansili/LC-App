<template>
  <div>
    <Tabs class="tab" fix>
      <Spin fix v-show="isloading">
        <Icon type="ios-loading" size="30" class="demo-spin-icon-load"></Icon>
        <div>Loading</div>
      </Spin>
      <TabPane label="小视频" icon="logo-apple">
        <Card style="width:100%; text-align:center " class="card">
          <div style="text-align:center" v-for="(item,index) in videoList" :key="index">
            <img :src="item.profile_image" class="card-userimg">
            <p class="card-name">{{item.name}}</p>
            <p class="card-time">{{item.created_at}}</p>
            <h4 class="card-text">{{item.text}}</h4>
            <img src alt class="card-cardimg clearfix">
            <video :src="item.videouri" class="card-video" controls="controls"></video>
            <Divider></Divider>
          </div>
        </Card>
      </TabPane>
      <TabPane label="段子" icon="logo-windows">标签二的内容</TabPane>
      <TabPane label="图片" icon="logo-tux">标签三的内容</TabPane>
      <TabPane label="text" icon="logo-tux">标签4的内容</TabPane>
    </Tabs>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      videoList: [],
      isloading:true
      // page:2,
    };
  },
  created() {
    axios({
      url: "https://www.apiopen.top/satinApi?type=4&page=2",
      method: "get"
    }).then(res => {
      for (var j = 0, len = res.data.data.length; j < len; j++) {
        this.videoList.push(res.data.data[j]);
      }
      console.log(this.videoList);
      if (this.videoList!=[]) {
        this.isloading=false;
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.demo-spin-icon-load{
        animation: ani-demo-spin 1s linear infinite;
    }
    @keyframes ani-demo-spin {
        from { transform: rotate(0deg);}
        50%  { transform: rotate(180deg);}
        to   { transform: rotate(360deg);}
    }
.card {
  background: #f8f8f9;
  margin-top: 0.5rem;
  &-userimg {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    float: left;
  }
  &-video {
    width: 3rem;
    height: 2rem;
    background: #000;
  }
  &-name {
    margin-right: 1.5rem;
    margin-top: 0.1rem;
    float: right;
    color: #33a3dc;
  }
  &-time {
    position: relative;
    margin-right: 0.5rem;
    clear: both;
    top: -0.2rem;
    color: #b7b7b7;
  }
  &-text {
    clear: both;
    color: #17233d;
    display: block;
    transform: translate(0, -0.2rem);
    -ms-transform: translate(0, -0.2rem); /* IE 9 */
    -webkit-transform: translate(0, -0.2rem); /* Safari and Chrome */
  }
}
</style>