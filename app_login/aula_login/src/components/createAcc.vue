<template>
  <div class="container">
      <h1 class='title'>Criar Conta</h1>
      <input class='button' v-model="login" placeholder="Login">
      <p />
      <input class='button' v-model="senha1" placeholder="Senha">
      <p />
      <input class='button' v-model="senha2" placeholder="Repita a senha">
      <p />
      <button @click="checkConta">Finalizar</button>
  </div>
</template>

<script>

export default {
    components: {},
        data() {
            return {
                usuarios : []
            }
        },
        methods: {
            checkConta(){

                if(this.senha1==this.senha2 && this.login!= "" && this.senha1 != "" && this.senha2 != ""){
                    this.usuarios.push({name: this.login,senha: this.senha1})
                    console.log(this.usuarios)
                    this.$emit("newUsers",this.usuarios)
                }

            }
        },
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@200;300;700&display=swap');

#title{
    color: aliceblue;
    font-family: 'Roboto Mono', monospace;
}

.button {
    padding: 6px;
    border-radius: 10px;
}

</style>