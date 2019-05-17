import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'mint-ui/lib/style.css'
import '@/assets/js/rem.js'
import '@/assets/css/common.css'

Vue.config.productionTip = false

//引入Mint组件库，按序要引入
import { Tabbar, TabItem,TabContainer, TabContainerItem,Cell,Checklist} from 'mint-ui';

//使用组件库

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Cell.name,Cell);
Vue.component(Checklist.name,Checklist);



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
