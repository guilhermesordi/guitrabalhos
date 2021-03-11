<template>
 <div class='container'>
   <div class='title'>Login</div>
   <p></p>
   <input class='button' v-model="login" placeholder='Login'>
   <p></p>
   <input class='button' v-model="senha" placeholder='Senha'>
   <p></p>
   <button v-on:click="checkLogin(login,senha)">Fazer Login</button>

 </div>
</template>

<script>
  import abritela from './components/ui'
  import checkLogin from './components/telalogin'

  export default {
    data() {
        return {
          login : "",
          senha : ""
        }
    },
    methods: {
      abritela,
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
