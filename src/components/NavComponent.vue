<template>
<div>
<!-- Navigation Section -->
<div class="row nav-head nav-bg">
    <div class="col-md-12">
        <img src="../assets/logo.png" alt="home-icon">
        <span id="nav-head-text">Lodge Estate</span>
        <div class="nav-menu responsive" @click="menuShow = !menuShow">
            <div class="nav-line nav-i"></div>
            <div class="nav-line nav-ii"></div>
            <div class="nav-line nav-iii"></div>
        </div>
    </div>
</div>
<!-- End of Navigation Section -->
<transition name="slide-fade">
<div id="menuTab" v-if="menuShow">
    <div class="">Register</div>
</div>
</transition>
</div>
</template>
<script>
export default{
    name: 'NavComponent',
    data (){
        return{
            menuShow:false
        }
    }
}
</script>
<style scoped>
.slide-fade-enter-active{transition:all .3s ease}
.slide-fade-leave-active{transition:all .5s cubic-bezier(1.0,0.5,0.8,1.0)}
.slide-fade-enter, .slide-fade-leave-to{transform:translateX(-20px);opacity:0}
.sticky{position:fixed;top:0;width:100%}
@media screen and (max-width: 768px){
.nav-head{
    height:100px;

}
.nav-head.nav-bg{
background:url('../assets/images/backgrounds/1x/buildings.png') fixed center;
}
.nav-head.nav-bg .col-md-12{
    padding-top:20px;padding-left:0px
}
.nav-head img{
    width:70px;height:30px;margin-left:10%;margin-top:-10px
}
.nav-head #nav-head-text{
    font-size:2em;color:rgb(200,200,200);font-family:cursive;margin-right:-10px
}
.nav-menu{
    margin-left:5%;margin-top:10px
}
.nav-menu.responsive .nav-line{
width:30px;height:3px;margin:3.5px 2px;background:rgb(200,200,200);
}
#menuTab{
    position:fixed;width:50%;background:rgba(0,0,0,0.9);height:100%;z-index:999
}
}
</style>
