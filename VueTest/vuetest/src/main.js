// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // render: h=>h(App),
  router,
  components: { App },
  template: '<App/>'
  //   el: '#app-3',
  //   data: {
  //     seen: true
  //   }
},
// {
//   el: '#app-3',
//     data: {
//   seen: true
// }
// }
);
// var app3 = new Vue({
//   el: '#app-3',
//   data: {
//     seen: true
//   }
// })
