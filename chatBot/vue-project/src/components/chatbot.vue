<script setup>
import chatItem from './chat.vue'
</script>

<template>

    <Layout>
    <div id="mainChatBot">
       
    <Header class="headerClass">

        <div>  
            <img  src="/src/components/icons/jade.jpg"/>
            <span>Jade-Hochschule <Icon type="ios-arrow-down" /></span>
        </div>

    </Header>

    <Content >
   
    <div id="context">
     <chatItem class="fixDialog" botMessage='hello, I am an intelligent chatbot yui,what can i do for u ?'  userMessage=""></chatItem> 
     <chatItem :Links="answerChat"  @change="addNewMessages" class="marginMore" v-for="item in items" :botMessage="item.botSay" :userMessage="item.userSay"></chatItem>
    </div> 
    
    </Content>

    <Footer id="footer">
     
        <Row id="sendArea" >

            <Col>
                <input id="text" v-model="message" type="text" @keydown="send" placeholder="Your message" />
            </Col>

            <Col>
                <Icon id="icon" type="md-send" @click="checkKeyWord"  @mouseenter="enter" @mouseleave="leave" />
            </Col>

        </Row>
 
    </Footer>

 </div>
</layout>
</template>

<script >
import diy_index from "../js/chatbot";
export default {
  data:diy_index.data,
  created:diy_index.created,
  methods:diy_index.methods,
}
</script>

<style src="/src/assets/chatbot.css" scoped>
</style>
