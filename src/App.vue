<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <div class="se-pre-con"></div> -->
    <router-view/>
  </div>
</template>

<script>
// require('./assets/js/jquery-3.3.1')
// export default {
//   name: 'App'
// }
// $(function(){
//   $(".se-pre-con").fadeOut("slow");
// })
</script>

<style>
/* .se-pre-con {
          position: fixed;
          left: 0px;
          top: 0px;
          width: 100%;
          height: 100%;
          z-index: 9999;
          background: url("./assets/grand-spin-1x.gif") center no-repeat #fff;
        } */
#app {
background: #000000
}
body{overflow-x:hidden}
#app{
    background: #000000 url("assets/images/backgrounds/1x/benches.png") fixed center no-repeat;
    background-size:cover;
  }
@media screen and (max-width:768px){
  #app{
    background: #000000 url("assets/images/backgrounds/1x/benches.png") fixed center no-repeat repeat;
    background-size:100%
  }
}
</style>
