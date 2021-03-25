let usuarios = []
let admin = [{name: admin,senha: admin}]


export function eventListener(usuariosgay) {

    usuarios=usuariosgay

}

export function checkLogin(login, senha){
    for(var i = 0; i < usuarios.length; i++){
        console.log(usuarios[i])
        if(login == admin[i].name && senha == admin[i].senha){
            return 2;
        }
        if(login == usuarios[i].name && senha == usuarios[i].senha){
            return 1;
        }
        else if((login != usuarios[i].name && senha != usuarios[i].senha) && (login != usuarios[i].name && senha != usuarios[i].senha)){
            alert("Credencias incorretas")
            return 0;
        }
    }
}