<template >

   <div style="float: right; clear: both;" >
      <Row >

        <Col> 
          <div id="dialogAsk" :style="{display:this.$props.userMessage==''?'none':'block'}">
            {{userMessage}}</div>
       </Col>

    </Row>
</div>

<div style="float: left; clear: both;">
    <Row id="chatItems" :gutter="21" Row >

       <Col> 
        <img class="botImage"  :style="{display:this.$props.botMessage==''?'none':'block'}" src="./icons/roboter.jpg" />
       </Col>

       <Col> 
         <img id="dialogAskGif" :class="botGif"  class="botImage"    src="./icons/61d26e92c06d70756ed0997965681d0b.gif"/>
          <div id="dialogAnswer"  :class="botMsg"   >
            <div v-html="botMessage"></div>
          </div>
       </Col>

    </Row>
 </div>

</template>
<style>
#chatItems{
    margin-top: 20px;
    padding-left: 20px;
}
#dialogAnswer,#dialogAsk{
    background-color: white;
    width: auto;
    max-width: 260px;
    min-width: 160px;
    height: auto;
    border-radius: 10px 10px 10px 0px;
    padding: 10px;
    clear: both;  
}
#dialogAsk{
    background-color:#DC0612;
    margin-top: 40px;
    margin-bottom: -24px;
    color: white;
    border-radius: 10px 10px 0px 10px;
    position: relative;
    right: 50px;
    bottom: 25px;
    padding: 10px;
    max-width: 230px;
    min-width: 0px;
}

.botImage{
   width:45px;
   height: 45px;
   border-radius: 100px;
}
#dialogAskGif{
    width: 50px;
    height: 30px;
    border: 2px solid #f9f2ec;
    border-radius: 10px 10px 10px 0px;
    margin-top: 10px; 
}
.noneDisplay{
    display: none !important;
}
.blockDisplay{
    display: block !important;
}

</style>
<script>
export default{
    props:{
            botMessage:{
                type: String
            },
            userMessage:{
                type: String 
            }
        },
 
   mounted(){
    this.$data.botMsg='noneDisplay'
    this.$data.botGif='blockDisplay'
    setTimeout(()=>{
          this.$data.botMsg='blockDisplay'
          this.$data.botGif='noneDisplay'

        },700)
        },

    data(){
        return {
        dis:'none',
        botMsg:'',
        botGif:''
    }}, 
}
</script>