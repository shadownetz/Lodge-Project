<template>
<div>
<!-- Navigation Section -->
<div class="row nav-head nav-bg">
    <div class="col-md-12">
        <img src="../assets/logo.png" alt="home-icon">
        <span id="nav-head-text">Lodge Estate</span>
        <div  class="nav-menu nav">
            <div class="block">
                <a href="#"><span id="txt">Self Contains</span></a>
            </div>
            <div class="block list">
                <a href="#"><span id="txt">Single Rooms</span></a>
            </div>
            <div class="block list">
                <a href="#"><span id="txt">Boy's Quaters</span></a>
            </div>
            <div class="block list">
                <a href="#"><span id="txt">Flats</span></a>
            </div>
            <div class="block list">
                <a href="#"><span id="txt">Place Order</span></a>
            </div>
            <div class="block list">
                <a href="#"><i class="fa fa-building-o"></i></a>
            </div>
            
        </div>
        <!-- Responsive Icon -->
        <div class="nav-menu responsive" @click="menuShow = !menuShow">
            <i class="fa fa-home"></i>
        </div>
        <!-- End of responsive icon -->
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
.nav-head{
    height:100px;z-index: 25;position: fixed;width:1400px;overflow:hidden
}
.nav-head.nav-bg{
background:url('../assets/images/backgrounds/2x/buildings.png') fixed center;background-size: cover;background-repeat: no-repeat
}
.nav-head.nav-bg .col-md-12{
    padding-top:20px;padding-left:0px
}
.nav-head img{
    width:150px;height:50px;margin-left:1%;margin-top:-20px
}
.nav-head #nav-head-text{
    font-size:3em;color:rgb(200,200,200);font-family:cursive;display: inline-block;margin-top:-20px
}
.nav-menu.nav{
    margin-left:5%;color:#fff;padding-top:2px;
}
.nav-menu .block{
    background:rgba(0,0,0,0.7);width:14%;height:27px;
    padding:5px;text-align: center;position: relative;display:inline-block;
}
.nav-menu .block > a{
    color:rgb(200,200,200);
    text-decoration: none;transition: all .2s linear
}
.nav-menu .block > a:hover{
font-size:1.1em
}
.nav-menu .block.list{margin-left:50px}
.nav-menu .block.list:last-child{
    background:transparent;margin-left:-25px;padding:0
    }
.nav-menu .block #txt::after{
    content:"";
    position: absolute;
    border:1px solid #D4A52A;
    left:100%;
    top:50%;
    width:50px;
    height:5px;
    border-radius:2px
}
.nav-menu i{font-size:1.5em}
.nav-menu.responsive{display:none}
@media screen and (max-width: 768px){
.nav-menu.nav{
    display: none;
}
.nav-head{
    height:80px;
}
.nav-head.nav-bg{
background-image:url('../assets/images/backgrounds/1x/buildings.png');
}
.nav-head img{
    width:70px;height:30px;margin-top:-10px
}
.nav-head #nav-head-text{
    font-size:2em;margin-right:-10px;margin-top:-40px
}
.nav-menu.responsive{
    margin-left:2%;color:#fff;padding-top:2px;display:block;
}
.nav-menu i{font-size:1.5em}
#menuTab{
    position:fixed;width:50%;background:rgba(0,0,0,0.9);height:100%;z-index:20;top:0;padding-top:30%
}
}
</style>
