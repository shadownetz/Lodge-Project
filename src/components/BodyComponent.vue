<template>
<div>
<div class="row body-component">
    <div class="owl-carousel owl-theme owl-loaded owl-drag" @mouseover="isactive = !isactive" @mouseout="isactive = !isactive">
        <transition name="fade">
        <div v-if="isactive" :class="{'house-overlay':true}">
            <div class="col-md-6 col-sm-12 overlay-btn"><button class="btn btn-success">APPLY</button></div>
        </div>
        </transition>
        <div class="owl-stage-outer">
            <div class="owl-stage">
                <div class="owl-item" style="height:100%width:120px;margin-right:0px">
                    <div class="item first">
                        <img src="../assets/images/slides/1x/house002.jpg" alt="'lodge-photo'" style="width:100%;height:100%">
                    </div>
                </div>
                <div class="owl-item" style="height:100%width:120px;margin-right:0px">
                    <div class="item second">
                        <img src="../assets/images/slides/1x/house003.jpg" alt="'lodge-photo'" style="width:100%;height:100%">
                    </div>
                </div>
                <div class="owl-item" style="height:100%width:120px;margin-right:0px">
                    <div class="item third">
                        <img src="../assets/images/slides/1x/house001.jpg" alt="'lodge-photo'" style="width:100%;height:100%">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-12 col-sm-12 col-xs-12 house-body">
        <div class="block-1">
        <h4>Are you looking for an affordable lodge ???</h4>
        <p>click the button below to select <br/>any lodge of your choice...</p>
        <i class="fa fa-long-arrow-right"></i><a href="#">Click Me</a><i class="fa fa-long-arrow-left"></i>
        </div>
    </div>
    <div class="col-md-12 col-sm-12 col-xs-12 house-layer1">
       <h4> Trending Lodges</h4>
       <div class="layer-line"></div>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="../assets/images/slides/1x/house001.jpg" alt="lodge">
        <div class="carousel-caption  d-md-block">
            <h5>House One</h5>
            <p>Best Lodge Estate Ever</p>
        </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="../assets/images/slides/1x/house002.jpg" alt="lodge">
        <div class="carousel-caption d-md-block">
            <h5>House Two</h5>
            <p>Best Lodge Estate Ever</p>
        </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="../assets/images/slides/1x/house003.jpg" alt="lodge">
        <div class="carousel-caption d-md-block">
            <h5>House Three</h5>
            <p>Best Lodge Estate Ever</p>
        </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    </div>
    <div class="col-md-12 col-sm-12 col-xs-12 house-layer2">
        <h4> Our Services</h4>
       <div class="layer-line"></div>
       <div class="col-md-12 service-block">
           <div class="item" id="1">
                Comfort
            </div>
            <div class="services">
                Rhoncus adipiscing, magna integer cursus augue eros lacus porttitor magna. Dictumst, odio! 
                Elementum tortor sociis in eu dis dictumst pulvinar lorem nec aliquam a nascetur.
                Rhoncus adipiscing, magna integer cursus augue eros lacus porttitor magna. Dictumst, odio! 
                Elementum tortor sociis in eu dis dictumst pulvinar lorem nec aliquam a nascetur.
            </div>
       </div>
       <div class="layer-mid"></div>
       <div class="col-md-12 service-block">
           <div class="item" id="2">
                Safety
            </div>
            <div class="services">
                Rhoncus adipiscing, magna integer cursus augue eros lacus porttitor magna. Dictumst, odio! 
                Elementum tortor sociis in eu dis dictumst pulvinar lorem nec aliquam a nascetur.
                Rhoncus adipiscing, magna integer cursus augue eros lacus porttitor magna. Dictumst, odio! 
                Elementum tortor sociis in eu dis dictumst pulvinar lorem nec aliquam a nascetur.
            </div>
       </div>
       <div class="layer-mid"></div>
       <div class="col-md-12 service-block">
           <div class="item" id="3">
                Refundable
            </div>
            <div class="services">
                Rhoncus adipiscing, magna integer cursus augue eros lacus porttitor magna. Dictumst, odio! 
                Elementum tortor sociis in eu dis dictumst pulvinar lorem nec aliquam a nascetur.
                Rhoncus adipiscing, magna integer cursus augue eros lacus porttitor magna. Dictumst, odio! 
                Elementum tortor sociis in eu dis dictumst pulvinar lorem nec aliquam a nascetur.
            </div>
       </div>
    </div>
    <div class="col-md-12 col-sm-12 col-xs-12 quote">
        <div class="overlay"></div>
        <div class="col-md-12 col-sm-12">
            <p>
                <i class="fa fa-quote-left"></i>&nbsp;&nbsp;A wise man once said a home is all it takes to unite families
                far and wide together as one, in peace and harmony.&nbsp; &nbsp;<i class="fa fa-quote-right"></i><br>
                <span class="dot"></span>
                <span class="txt"><i>Louis Vitton</i></span>
            </p>
        </div>
    </div>
    <div class="col-md-12 col-sm-12 col-xs-12 house-layer2" >
        <h4>Premium Packages</h4>
       <div class="layer-line"></div>
        <div class="pack pack-bg">Fresher's Pack</div>
        <div id="plan">
            <h4>₦ 69,999 <sub>/ yr.</sub></h4>
            <div>
                <ul>
                   <li><i class="fa fa-check-circle-o"></i> Frequent Power Supply</li> 
                    <li><i class="fa fa-check-circle-o"></i> Clean Water Supply</li>
                    <li><i class="fa fa-check-circle-o"></i> Conductive environment</li>
                    <li><i class="fa fa-check-circle-o"></i> Installment Payment</li>
                </ul>
            </div>
        </div>
        <div class="pack pack-bg">Mid-Level Pack</div>
        <div id="plan">
            <h4>₦ 119,999 <sub>/ yr.</sub></h4>
            <div>
                <ul>
                   <li><i class="fa fa-check-circle-o"></i> Frequent Power Supply</li> 
                    <li><i class="fa fa-check-circle-o"></i> Clean Water Supply</li>
                    <li><i class="fa fa-check-circle-o"></i> Conductive environment</li>
                    <li><i class="fa fa-check-circle-o"></i> Installment Payment</li>
                </ul>
            </div>
        </div>
        <div class="pack pack-bg">Finalist Pack</div>
        <div id="plan">
            <h4>₦ 139,999 <sub>/ yr.</sub></h4>
            <div>
                <ul>
                   <li><i class="fa fa-check-circle-o"></i> Frequent Power Supply</li> 
                    <li><i class="fa fa-check-circle-o"></i> Clean Water Supply</li>
                    <li><i class="fa fa-check-circle-o"></i> Conductive environment</li>
                    <li><i class="fa fa-check-circle-o"></i> Installment Payment</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="col-md-12 col-sm-12 col-xs-12 house-layer3">
         <h4> Contact Us</h4>
       <div class="layer-line"></div>
       <div class="col-md-12 col-sm-12 col-xs-12 contact">
           <form action="" method="post" enctype="multipart/form-data">
           <div class="col-md-12 col-sm-12 box">
               <label>Name:</label>
               <input class="input-control" type="text" placeholder="Your Name">
           </div>
           <div class="col-md-12 col-sm-12 box">
               <label>Email:</label>
               <input class="input-control" type="email" placeholder="email address">
           </div>
           <div class="col-md-12 col-sm-12 box">
               <label>Phone Number:</label>
               <input class="input-control" type="tel" placeholder="phone number">
           </div>
           <div class="col-md-12 col-sm-12 box">
               <label>Message:</label>
               <textarea class="input-control area" placeholder="Your message"></textarea>
           </div>
               <button class="btn ">Submit</button>
           </form>
       </div>
    </div>
    <footer>
        <div class="col-md-12 col-sm-12 col-xs-12 foot foot-bg">
            <!-- <div class="house-overlay"></div> -->
            <div class="col-md-12 col-sm-12 col-xs-12">
                <h5>Locate Us </h5>
                <p>
                    No 5 Herbert Macauley road, Off new-boston avenue
                    shalom, Lagos State. Nigeria.<br><br>
                    <i class="fa fa-inbox"></i> email us @ lodgestateagency@outlook.com
                </p>
            </div>
        </div>
        <div class="col-md-12 col-sm-12 col-xs-12" style="background:#000;height:40px;color:rgb(200,200,200);text-align:center;padding-top:10px">
            <h6>&copy; ShadowNetz.prod()</h6>
        </div>
    </footer>
</div>
</div>
</template>
<script>
export default{
name:'bodyComponent',
data () {
    return {
        isactive:false,
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
.body-component{
        overflow-x: hidden;
        padding-top:7%
}
.house-overlay{
    position:absolute;height:100%;background:rgba(0,0,0,0.7);width:100%;z-index:1;
}
.owl-carousel .house-overlay .overlay-btn{
   margin-top:7%
}
.owl-carousel .house-overlay .overlay-btn .btn{border-radius:0;width:30%}
.owl-carousel .house-overlay .overlay-btn .btn:hover{
    background: rgba(212, 164, 42, 0.61);border-color:transparent
}
.owl-carousel .house-overlay .overlay-btn .btn-success{margin-left:90%;background: transparent;border-color: #D4A52A;}

.house-body{background:rgba(50,50,50,0.3);height:330px;padding:20px}
.house-body h4,p{text-align: center;font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;text-shadow: 1px 1px 0 #000;color:rgb(250,250,250)}
.house-body p{font-size:1.1em}
.house-body i{position:absolute;color:#D4A52A}
.house-body i:not(:last-child){left:28%;animation: activate-right 1s linear infinite}
.house-body i:last-child{left:68%;animation: activate-left 1s linear infinite}
.house-body a{border:1px solid #D4A52A;padding:10px;margin-left:40%;color:#D4A52A}
@media screen and (max-width:768px){
.body-component{padding-top:20%}
.owl-carousel .house-overlay .overlay-btn{
   margin-top:15%
}
.owl-carousel{border-bottom:2px solid #D4A52A}
.owl-carousel .owl-stage-outer{height:120px}
.owl-carousel .house-overlay .overlay-btn .btn-success{margin-left:40%;background: transparent;border-color: #D4A52A;}
.owl-carousel .house-overlay .overlay-btn .btn{width:auto}
.house-body{background:rgba(50,50,50,0.3);height:200px;padding:20px}
.house-body h4,p{text-align: center;font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;text-shadow: 1px 1px 0 #000;color:rgb(250,250,250)}
.house-body p{font-size:1.1em}
.house-body i{position:absolute;color:#D4A52A}
.house-body i:not(:last-child){left:28%;animation: activate-right 1s linear infinite}
.house-body i:last-child{left:68%;animation: activate-left 1s linear infinite}
.house-body a{border:1px solid #D4A52A;padding:10px;margin-left:40%;color:#D4A52A}
.house-layer1,.house-layer2,.house-layer3{text-align: center;padding:8px;color:rgb(250,250,250)}
.house-layer2{
    background:rgba(0,0,0,0.1);padding-bottom:50px
}
.house-layer2 #plan{
    background:rgba(20,20,20,0.5);height:250px;width:90%;margin:10px 5% auto;
    padding-top:10px
}
.house-layer2 #plan > h4{color:#D4A52A;}
.house-layer2 #plan > div {
    text-align:left;border-left:2px solid #D4A52A;
    line-height: 51px;background:rgba(237,237,237,0.1)
}
.house-layer2 #plan > div > ul{
    list-style-type: none;
}
.house-layer2 #plan > div > ul >li > i{
    color:#D4A52A
}
.house-layer3{
    background:rgba(0,0,0,0.2);padding-bottom:50px;
}
.house-layer3 .contact .box{margin-bottom:10px}
form{text-align:left}
form .input-control{
    width:100%;height:40px;background:transparent;color:#fff;
    border:1px solid rgba(212, 164, 42, 0.788);font-size: 1.2em;
    }
form .btn{
border-radius:0;margin-left:40%;background: transparent;
border:1px solid #D4A52A;color:#fff
}
form .input-control.area{
    height:100px
}
.pack{
    width:100px;height:100px;
    margin-left:40%;border-radius: 50px;text-align:center;padding-top:30px;
    text-shadow: 1px 1px 1px #000;margin-top:20px
}
.pack.pack-bg{
    background:rgb(184, 142, 37);;
    box-shadow: 
    -2px -2px 15px 2px rgba(200, 200, 200, 0.877),
    -2px -2px 10px 5px rgba(212, 164, 42, 0.911);
    -webkit-box-shadow:
    -2px -2px 10px 1px rgb(200,200,200),
    -2px -2px 10px 5px rgb(212, 164, 42);
}
.house-layer2 .item{
    width:200px;height:40px;border: 1px solid #D4A52A;padding-top:10px;
    transform: rotateZ(90deg);position:absolute;left:-45px;top:100px;letter-spacing: 5px;
    font-weight:bold;outline: 1px solid #D4A52A;outline-offset: 5px
}
.house-layer2 .service-block:not(:first-child){margin-top:20px}
.house-layer2 .service-block .services{
    padding-left:23%;word-wrap: break-word;word-break: normal;
    text-align:justify;
}
.layer-line,.layer-mid{
    width:15%;height:0;border:1px solid #D4A52A;
    margin-left:43%;margin-bottom:10px;
    }
.layer-mid{width:20%;margin:30px auto;margin-left:47%;border-style: dotted}
.quote{
    background:url("../assets/images/backgrounds/1x/quote.jpeg") no-repeat center center;
    background-size:100%;
    height:200px
}
.quote div > p{
    padding:20px 10px 0px
}
.quote div > p span.txt{
    color:rgb(200,200,200);text-align:center;
    margin-top:20px;display:block
}
.quote .overlay{
    position:absolute; width:100%;height:100%;
    background:rgba(0,0,0,0.7);
}
.quote .dot{
    width:10px;height:10px;margin-left:47%;margin-top:10px;
    background:rgba(212, 164, 42, 0.61);border-radius:5px;display:block
}
footer {width:100%}
footer .foot{
    padding:20px 20px;color:#fff
}
footer .foot > h5{
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
    }
footer .foot-bg{
    background:url("../assets/images/backgrounds/1x/footer-map.png") no-repeat center center;
    background-size: cover;height:200px
}
}
@media screen and (min-width:768px){
    .house-layer2 .item{
        width:150px;top:20px;left:-30px
    }
    .house-layer2 .service-block .services{
        padding-left:15%
    }
}
.hide{display:none}
.owl-carousel .item{
    height:200px;width:100%
}
.lodge .item{
   height:200px;width:100%
}
.fade-enter,.fade-leave-active{transform: translateY(-20px);opacity: 0;}
.fade-enter-active{transition:all .3s ease}
.fade-leave-active{transition:all .5s cubic-bezier(1.0,0.5,0.8,1.0)}
@media screen and (min-width:768px) and (max-width:1024px){
.body-component{padding-top:10%}
.owl-carousel .house-overlay .overlay-btn{margin-top:5%}
.owl-carousel .house-overlay .overlay-btn .btn-success{margin-left:100%}
}
</style>
