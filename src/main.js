import Vue from "vue";
import App from "./App.vue";
import NavigationComponent from "./components/Navigation";

Vue.config.productionTip = false;

new Vue({
  components: {
    'nav-component': NavigationComponent
    
new Vue({
  render: h => h(App)
}).$mount("#app");
