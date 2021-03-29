<template>
    <div class="container">
        <div id="login" v-if="pagina==1">
            <div class="title">Login</div>
            <p />
            <input class="input" v-model="login" placeholder="Login" />
            <p />
            <input class="input" v-model="senha" placeholder="Senha" />
            <p />
            <button class="button" @click="verifyLogin()">
                Fazer Login
            </button>
            <p />
            <button class="button" @click="createAcc()">
                Criar Conta
            </button>
        </div>
        <!-- Caso não esteje em Home: -->
        <div v-if="pagina!=1">
            <div id="telaAdmin" v-if="pagina==2">
                <div class="title">
                    Tela do Admin
                </div>
                <p />
                <div class="text" v-for="(data, index) in users" :key="index">
                    <div class="text--left">
                        {{data.name}}
                    </div>
                    <div class="text--right">
                        <button class="button--adm" @click="beAdm(index)">Adm</button>
                    </div>
                </div>
                <!-- <button class="button" @click="beAdm()">
                    Adicionar Admin
                </button> -->
            </div>

            <div class="title" id="telaUser" v-if="pagina==3">
                Tela do Usuário
            </div>

            <div class="title" id="telaCreate" v-if="pagina==4">
                Criar Conta
                <p />
                <input class="input" v-model="login1" placeholder="Login" />
                <p />
                <input class="input" v-model="pass1" placeholder="Senha" />
                <p />
                <input class="input" v-model="pass2" placeholder="Repita a senha" />
                <p />
                <button class="button" @click="checkCreate()">Criar</button>
            </div>

            <p />
            <button class="button" @click="home()">Home</button>
        </div>
    </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
        login: "",
        senha: "",
        login1: "",
        pass1: "",
        pass2: "", 
        pagina: 1,
        users: [],
        admin: [{
            name:"admin",
            pass:"admin"
        }]
    };
  },

  methods: {
    verifyLogin() {
        
        for(let i = 0; i < this.users.length; i++){
            if(this.login == this.users[i].name && this.senha == this.users[i].pass){
                this.pagina = 3;
                this.login = "";
                this.senha = "";
                return
            }
        }
        for(let i = 0; i < this.admin.length; i++){
            if(this.login == this.admin[i].name && this.senha == this.admin[i].pass){
                this.pagina = 2;
                this.login = "";
                this.senha = "";
                return
            }
        }
        alert("Crendenciais incorretas!")
        
    },
    home() {
        this.pagina = 1;
    },
    createAcc(){
        this.pagina = 4
    },
    checkCreate(){
        if(this.login1 != "" && this.pass1 != "" && this.pass1 === this.pass2){
            this.users.push({name: this.login1, pass: this.pass1})
            alert("Conta criada com sucesso!")
            console.log(this.users)
        }else{
            alert("Credenciais incorretas")
        }
        this.login1 = "";
        this.pass1 = "";
        this.pass2 = "";
    },
    beAdm(index){
        this.admin.push(this.users[index])
        this.users.splice(index,1)
    }
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@200;300;700&display=swap");

body {
  background-color: #373435;
}

#telaAdmin {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.container {
    text-align: center;
    align-content: center;
}

.title {
    font-size: 1.5em;
    color: white;
    font-family: "Roboto Mono", monospace;
    font-weight: 600;
}

.text {
    color: white;
    font-family: "Roboto Mono", monospace;
    font-weight: 600;
    flex-direction: row;
    display: flex;
    width: 40%;
}

.text--left {
    display: flex;
    justify-content: flex-start;
    width: 50%;
}

.text--right {
    display: flex;
    justify-content: flex-end;
    width: 50%;
}

.input {
    padding: 6px;
    border-radius: 10px;
    align-content: center;
}

.button {
    font-family: "Roboto Bold", monospace;
    font-weight: 800;
    color: black;
    background-color: white;
    padding: 6px;
    border-radius: 10px;
}

.button--adm {
    font-family: "Roboto Bold", monospace;
    font-weight: 800;
    color: black;
    background-color: white;
    padding: 3px;
    border-radius: 10px;
}
</style>
