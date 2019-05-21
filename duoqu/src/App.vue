<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <Tabbar></Tabbar>
  </div>
</template>
<script>
import Tabbar from "@/components/Tabbar";
export default {
  data() {
    return {};
  },
  components: { Tabbar }
};
</script>

<style lang="scss">
</style>
