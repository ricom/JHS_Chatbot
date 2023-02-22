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