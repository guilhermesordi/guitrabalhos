<template>
 <div class='container'>
   <div id="login" v-if="logged == 0">
    <div class='title'>Login</div>
    <p></p>
    <input class='button' v-model="login" placeholder='Login'>
    <p></p>
    <input class='button' v-model="senha" placeholder='Senha'>
    <p></p>
    <button v-on:click="logged=checkLogin(login, senha)">Fazer Login</button>
  </div> 
  <ai v-if="logged==2"></ai>
  <ui v-if="logged==1"></ui>
 </div>
</template>

<script>
  import ui from './components/ui.vue'
  import checkLogin from './components/telalogin'
  import ai from './components/ai.vue'

  export default {
  components: { ai, ui },
    data() {
        return {
          login : "",
          senha : "",
          logged : ""
        }
    },
    methods: {
      checkLogin
    },
}

</script>

<style>

  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@200;300;700&display=swap');

  body{
      background-color: #373435;
    }

  .container {
    text-align: center;
    align-content: center;
  }

  .title {
    font-size:  1.5em;
    color:white;
    font-family: 'Roboto Mono', monospace;
    font-weight: 600;
  }
  
  .button {
    padding: 6px;
    border-radius: 10px;
  }

</style>
