<template>
<div>
<div class="row">
    <div class="owl-carousel owl-theme owl-loaded owl-drag" @mouseover="isactive = !isactive" @mouseout="isactive = !isactive">
        <div :class="{'hide':isactive,'house-overlay':true}">
            <div class="col-md-6 col-sm-12 overlay-btn"><button class="btn btn-success">APPLY</button></div>
            <hr style="border-color:rgba(255,255,255,0.2)"/>
            <div class="col-md-6 col-sm-12 overlay-btn"><button class="btn btn-warning">CONTACT AGENT</button></div>
        </div>
        <div class="owl-stage-outer">
            <div class="owl-stage">
                <div v-for="item in items" class="owl-item" style="height:100%width:120px;margin-right:3px">
                    <div :class="item.class"> image {{item.class}}</div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-12 col-sm-12 col-xs-12 house-body">
        <h4>Are you looking for an affordable lodge ???</h4>
        <p>click the button below to select <br/>any lodge of your choice...</p>
        <i class="fa fa-long-arrow-right"></i><a href="#">Click Me</a><i class="fa fa-long-arrow-left"></i>
    </div>
    <div class="col-md-12 col-sm-12 col-xs-12">
        <div style="border-bottom:2px solid #D4A52A;width:40%;padding:10px;color:#000;font-size:1.2em">Trending Lodges</div>
        
    </div>
</div>
</div>
</template>
<script>

export default{
name:'bodyComponent',
data () {
    return {
        items:[
            {class:'item first'},{class:'item second'},{class:'item third'},
        ],isactive:false
    }
},
}

</script>
<style scoped>
@keyframes activate-right {
    20% {left: 30%;}
    40% {left:31%}
    60% {left:32%}
    80% {left:33%}
    80% {left:34%}
    90%{left: 35%}
    100%{left:35.5%}
    }
    @keyframes activate-left {
    20% {left: 72%;}
    40% {left:70%}
    60% {left:69%}
    80% {left:68%}
    80% {left:67%}
    90%{left: 66%}
    100%{left:65%}
    }
@media screen and (max-width:768px){
.owl-carousel .house-overlay .overlay-btn{
   margin-top:30px
}
.owl-carousel{border-bottom:2px solid #D4A52A}
.owl-carousel .house-overlay{
    position:absolute;height:100%;background:rgba(0,0,0,0.7);width:100%;z-index:1;
}
.owl-carousel .house-overlay .overlay-btn .btn{border-radius:0}
.owl-carousel .house-overlay .overlay-btn .btn-success{margin-left:40%}
.owl-carousel .house-overlay .overlay-btn .btn-warning{
    margin-left:30%;border-color:#D4A52A;color:rgb(50,50,50);
    background:#D4A52A
}
.house-body{background:rgb(200,200,200);height:200px;padding:20px}
.house-body h4,p{text-align: center;color:#000;font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif}
.house-body i{position:absolute;}
.house-body i:not(:last-child){left:28%;animation: activate-right 1s linear infinite}
.house-body i:last-child{left:68%;animation: activate-left 1s linear infinite}
.house-body a{border:1px solid rgb(13, 76, 134);padding:10px;margin-left:40%;}
}
.hide{display:none}
.owl-carousel .item{
    background:brown;height:200px;width:100%
}
</style>
