// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// Bootstrap Stylesheet
import "./assets/bootstrap/css/bootstrap.min.css"
// =================== //
//Owl Stylesheet
import "./assets/owl-carousel/css/owl.carousel.min.css"
import "./assets/owl-carousel/css/owl.theme.default.min.css"
//====================//
// Font-Awesome
import "./assets/css/font-awesome.css"
// =====================//
// 
//Animate Stylesheet
import "./assets/css/animate.css"
// ======================//
require('./assets/jquery-3.3.1')  //Jquery
require('./assets/owl-carousel/js/owl.carousel.min.js')  //Owl script
// ==============//
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})

$(function () {
  var owl = $('.owl-carousel');
        owl.owlCarousel({
        items:4,
        loop:true,
        margin:3,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause: true,
        
});
})