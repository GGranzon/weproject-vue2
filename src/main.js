// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueAxios from 'vue-axios';
import axios from 'axios';
import store from './store/store'


Vue.prototype.$axios = axios;
Vue.use(VueAxios,axios)
Vue.use(ElementUI);

axios.interceptors.request.use(
  config => {
    //判断是否存在token，如果存在，则每个http header 都加上token
    let token = sessionStorage.getItem('Authorization')
    if(!config.headers.hasOwnProperty('Authorization')&&token){
      config.headers.Token = token
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)





Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store:store,
  components: { App },
  template: '<App/>',
})
