import mockData from '../Json/ChatList.json';

export default{
  
    data(){
        return {
        message:'',
        botKeyWords:mockData.list,
           
        items:[]
    }
    },

    methods:{
           enter(e){
            e.currentTarget.classList.add("changeBackground5")
           } ,

           leave(e){
            e.currentTarget.classList.remove("changeBackground5")
           },

          checkKeyWord(){
            /*
             1. this.$data.items shows all the conversations in the chatbot dialog.
             2. this.$data.messege is What the user enters in the input dialog.
             3. newItem here add the user's new input content and chatbot's 
             reply to the overall items.
             4. !!!important : The dialogue between the bot and the user is paired every time,
                            but if the user enters the user is empty, the user's div will be hidden
            */
             var containKeyWords=false;
             var keyWordCount=0
             var newItem={}
             var dialogUserAndBot=this.$data.items
             var length=dialogUserAndBot.length
             var inputMessage=this.$data.message

             this.$data.botKeyWords.forEach(item=>{
                //Regular Expression,with i is ignore capitalization
                var containKey = new RegExp(item.key,'i');

                if(containKey.test(inputMessage)&&keyWordCount<1){

                    keyWordCount++;
                    containKeyWords=true
                    newItem.botSay=item.value+''

                }

                else if(containKey.test(inputMessage)&&keyWordCount>=1){

                  keyWordCount++;
                  newItem.botSay="I'm sorry, please don't ask too much at once, Yui's cpu is about to explode"
                
                }
              
             })

             if(containKeyWords==false){
                newItem.botSay='sry, idu wut do u say'
             }

             newItem.userSay=inputMessage
             dialogUserAndBot[length]=newItem
             this.$data.message=''  //clean message
             keyWordCount=0 //clean count
            
        },

        send(e){
           //enter without send taste
           if(e.keyCode==13){
            this.checkKeyWord()
           }
        },

        addNewMessages(e){
          e=this.$data.answerChat
        }
    }
}