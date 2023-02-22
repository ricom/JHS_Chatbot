<script setup>
import chatbot from './chatbot.vue'
</script>

<template>  
        <chatbot class="bo"></chatbot>    
</template>

<script>
    export default {
        data () {
            return {
                value: 0
            }
        }
    }
</script>
<style>
.bo{
    position: relative;
    top: 40px;
    left: 140px;
}
</style>
