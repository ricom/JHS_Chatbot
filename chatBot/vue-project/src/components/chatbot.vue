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

<script>
export default{
    data(){
        return {
        message:'',
        botKeyWords:[
            {key:'.*Portale.*',value:'Auf der Seite '+`<a href='https://www.jade-hs.de/studium/waehrend-des-studiums/online-portale/'>online-portale</a>`+' finden Sie Tutorials zum LogIn, Moodle, eCampus, WebMail und Infosys.'},
            {key:'.*eCampus.*',value:'Den '+`<a href='https://ecampus.jade-hs.de/qisserver/pages/cs/sys/portal/hisinoneStartPage.faces'>eCampus</a>`+' finden Sie auf der Startseite der Jade Hochschule.'},
            {key:'.*Begriffsdefinitionen.*',value:'Bitte im '+`<a href='https://ecampus.jade-hs.de/qisserver/pages/cs/sys/portal/hisinoneStartPage.faces'>eCampus</a>`+' einloggen - Reiter Benutzer-Informationen'},
            {key:'.*Adresse.*',value:'Die Adresse muss von jedem Studierenden selbst im '+`<a href='https://ecampus.jade-hs.de/qisserver/pages/cs/sys/portal/hisinoneStartPage.faces'>eCampus</a>`+' geändert werden (bitte im eCampus einloggen). Eine Adressänderung können Sie unter Mein Studium - Studienservice - Kontaktdaten vornehmen.'},
            {key:'.*Immatrikulationsbescheinigung.*',value:'Sie können sich diese Bescheinigung im eCampus selbst ausdrucken (bitte im '+`<a href='https://ecampus.jade-hs.de/qisserver/pages/cs/sys/portal/hisinoneStartPage.faces'>eCampus</a>`+' einloggen).'
            +`</br></br>`+'Eine Immatrikulationsbescheinigung sowie andere Bescheinigungen finden Sie unter Mein Studium - Studienservice - Bescheinigungen.'},
            {key:'.*studieng.*',value:[{"href":"http1","name":"Studiengang"},{"href":"http2","name":"Bewerbung"},{"href":"http3","name":"Stipendium"}]},
            {key:'.*Stundenplan.*',value:"Der „Stundenplan“ wird von den Studierenden anhand der angebotenen Vorlesungen selbst zusammengestellt. Aktuelle Informationen zu den Vorlesungen und anderen organisatorischen Dingen finden Sie im "+`<a href='https://idp.hs-woe.de/idp/profile/SAML2/Redirect/SSO?execution=e1s1'>Infosys</a>.`+" Bei weiteren Fragen wenden Sie sich bitte direkt an die"+` <a href='https://www.jade-hs.de/unsere-hochschule/fachbereiche/'>Dekanate</a>`+ "der einzelnen Fachbereiche."},
            {key:'.*Semesterwochenstunden.*',value:"SWS ist die Anzahl der Stunden, die die Vorlesungen/Labore etc. pro Woche haben."},
            {key:'.*SWS.*',value:"SWS ist die Anzahl der Stunden, die die Vorlesungen/Labore etc. pro Woche haben."},
            {key:'.*stunden in der woche.*',value:"SWS ist die Anzahl der Stunden, die die Vorlesungen/Labore etc. pro Woche haben."},
            {key:'.*Semester wiederholen.*',value:"Nein, da die Semester fortlaufend gezählt werden."},
            {key:'.*Semesterferien.*',value:"Nein, es gibt die vorlesungsfreie Zeit, in der aber auch Veranstaltungen stattfinden können (Praktikum, Sommerkurse, Exkursionen etc.)."},
            {key:'.*Studiengang wechseln.*',value:"Ein interner Wechsel ist ausschließlich nach erfolgter Online-Bewerbung möglich."},
            {key:'.*zwei Studiengänge.*',value:"Dies ist grundsätzlich auf Antrag möglich. Bitte reichen Sie dazu einen formlosen Antrag an Ihr zuständiges"+` <a href='https://www.jade-hs.de/studium/vor-dem-studium/immatrikulationsamt/'>Immatrikulations- und Prüfungsamt</a>`+" ein. Die Mitarbeiter_innen werden Sie umgehend über das Ergebnis informieren."},
            {key:'.*Prüfungsordnung.*',value:"Die Rahmenbedingungen für ein Studium sind in Prüfungsordnungen rechtsverbindlich geregelt. Die Prüfungsordnung eines Studiengangs setzt sich zusammen aus dem Allgemeinen Teil (Teil A) und dem besonderen Teil (Teil B). "+`</br></br>`+"Teil A regelt die Inhalte, die an der Jade Hochschule über alle Fachbereiche für alle Studiengänge gleichermaßen gelten. Teil B regelt die jeweiligen studiengangsspezifischen Vorgaben."+`</br></br>`+"Eine Übersicht aller an der Jade Hochschule angebotenen"+ ` <a href='https://www.jade-hs.de/studium/waehrend-des-studiums/formulare-und-ordnungen/pruefungsordnungen/'>prüfungsordnungen</a>`+" erhalten Sie auf dieser Seite."},
            {key:'.*Formular.*',value:'Hier finden Sie allgemeine Formulare und Anträge:'+`</br></br>*&nbsp&nbsp<a href=''>Formulare und Anträge des Immatrikulationsamtes</a>`
             +`</br></br>` +`*&nbsp&nbsp<a href=''>Formulare und Anträge des Prüfungsamtes</a>`},
            {key:'.*Antr.*',value:"Hier finden Sie allgemeine Formulare und Anträge: Formulare und Anträge des Immatrikulationsamtes"
              +"Formulare und Anträge des Prüfungsamtes"},
            {key:'.*Unterlagen abholen.*',value:"Eine Abholung ist ausschließlich nach Vorlage einer Vollmacht möglich, da wir aus datenschutzrechtlichen Gründen keinerlei personenbezogene Daten an Dritte aushändigen dürfen. Auskunft darf grundsätzlich nur der betroffenen Person gegeben werden, bzw. im Fall von minderjährigen Studieninteressierten oder Studierenden auch den Erziehungsberechtigten."},
            {key:'.*Gebäude.*',value:`<a href='https://www.jade-hs.de/unsere-hochschule/wir-stellen-uns-vor/studienorte/'> Gebäudepläne </a>`+'für alle drei Studienorte'},
        ],
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
             var newItem={}
             var dialogUserAndBot=this.$data.items
             var length=dialogUserAndBot.length
             var inputMessage=this.$data.message

             this.$data.botKeyWords.forEach(item=>{
                //Regular Expression,with i is ignore capitalization
                var containKey = new RegExp(item.key,'i');

                if(containKey.test(inputMessage)){

                    containKeyWords=true
                    newItem.botSay=item.value+''

                }
             })

             if(containKeyWords==false){
                newItem.botSay='sry, idu wut do u say'
             }

             newItem.userSay=inputMessage
             dialogUserAndBot[length]=newItem
             this.$data.message=''  //clean message
            
        },

        send(e){
           console.log(e.keyCode)
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
</script>
<style>
#mainChatBot{
    width: 400px;
    height: 600px;
    border-radius: 10px;
    margin-left: 400px;
    margin-bottom: 100px;
}
.headerClass{

    background-color:#DC0612!important;
    border-radius: 10px 10px 0px 0px !important;
}
#context{
    width: 400px;
    height: 470px;
    overflow-x: hidden;  
    background-color:#f9f2ec;
    
}
.headerClass img{
   
    width:45px;
    height: 45px;
    border-radius: 100px;
    position: relative;
    top: 10px;
    right: 20px;
}
.headerClass span{
    color: white;
    font-weight: 600;
    position: relative;
    bottom: 5px;
}


#text{
    width: 350px;
    height: 35px;
    position: absolute;
    left: -26px;
    bottom: 5px;
    padding-left: 10px;
    border-radius: 20px;
    background-color: white;
    border: 0px solid ;
    padding-right: 40px;
}
#icon{
    position: relative;
    left: 290px;
    bottom: 11px;
    font-size: 20px;
    
}
.changeBackground5{
    color: #DC0612 !important;
}
.marginMore{
    margin-bottom: 19px !important;
}
#sendArea{
    position: relative;
    top: 15px;
}
.ivu-layout-footer{
background-color: #f9f2ec !important;
border-radius:0px 0px 10px 10px !important;
}
.ivu-layout{
    background-color: white !important;
    width: 0px !important;
}
#footer{
    height: 80px;
}
</style>
