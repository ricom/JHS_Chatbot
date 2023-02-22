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

<script>
import diy_indexChat from "../js/chat";
export default {
  data:diy_indexChat.data,
  props:diy_indexChat.props,
  mounted:diy_indexChat.mounted,
  created:diy_indexChat.created,
  methods:diy_indexChat.methods,
}
</script>

<style src="/src/assets/chat.css" scoped>
</style>