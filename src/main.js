import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";



import U2A1 from "./components/Uebungen/U2/U2A1.vue";
import U2A2 from "./components/Uebungen/U2/U2A2.vue";
import U2A3 from "./components/Uebungen/U2/U2A3.vue";
import U2A4 from "./components/Uebungen/U2/U2A4.vue";


import U3A1 from "./components/Uebungen/U3/U3A1.vue";
import U3A2 from "./components/Uebungen/U3/U3A2.vue";
import U3A3 from "./components/Uebungen/U3/U3A3.vue";
import U3A4 from "./components/Uebungen/U3/U3A4.vue";


import U4A1 from "./components/Uebungen/U4/U4A1.vue";
import U4A2 from "./components/Uebungen/U4/U4A2.vue";


import U5A1 from "./components/Uebungen/U5/U5A1.vue";
import U5A2 from "./components/Uebungen/U5/U5A2.vue";
import U5A3 from "./components/Uebungen/U5/U5A3.vue";


import U6A1 from "./components/Uebungen/U6/U6A1.vue";
import U6A2 from "./components/Uebungen/U6/U6A2.vue";
import U6A3 from "./components/Uebungen/U6/U6A3.vue";


import U7A1 from "./components/Uebungen/U7/U7A1.vue";
import U7A2 from "./components/Uebungen/U7/U7A2.vue";
import U7A3 from "./components/Uebungen/U7/U7A3.vue";


import U8A1 from "./components/Uebungen/U8/U8A1.vue";
import U8A2 from "./components/Uebungen/U8/U8A2.vue";
import U8A3 from "./components/Uebungen/U8/U8A3.vue";



Vue.use(VueRouter);

const routes = [
  

  { path: "/U2A1", component: U2A1 },
  { path: "/U2A2", component: U2A2 },
  { path: "/U2A3", component: U2A3 },
  { path: "/U2A4", component: U2A4 },


  { path: "/U3A1", component: U3A1 },
  { path: "/U3A2", component: U3A2 },
  { path: "/U3A3", component: U3A3 },
  { path: "/U3A4", component: U3A4 },
 

  { path: "/U4A1", component: U4A1 },
  { path: "/U4A2", component: U4A2 },
 

  { path: "/U5A1", component: U5A1 },
  { path: "/U5A2", component: U5A2 },
  { path: "/U5A3", component: U5A3 },
 

  { path: "/U6A1", component: U6A1 },
  { path: "/U6A2", component: U6A2 },
  { path: "/U6A3", component: U6A3 },
 

  { path: "/U7A1", component: U7A1 },
  { path: "/U7A2", component: U7A2 },
  { path: "/U7A3", component: U7A3 },
 

  { path: "/U8A1", component: U8A1 },
  { path: "/U8A2", component: U8A2 },
  { path: "/U8A3", component: U8A3 },
 

  
];

const router = new VueRouter({
  routes: routes,
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
