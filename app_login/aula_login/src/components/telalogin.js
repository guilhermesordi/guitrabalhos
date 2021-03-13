var aiLogin = "admin";
var aiSenha = "admin123";
var uiLogin = "123";
var uiSenha = "123";


function checkLogin(login, senha){
    if(login == aiLogin && senha == aiSenha){
        return 2;
    }
    if(login == uiLogin && senha == uiSenha){
        return 1;
    }
    else if((login != uiLogin && senha != uiSenha) && (login != aiLogin && senha != aiSenha)){
        alert("Credencias incorretas")
        return 0;
    }
}

export default checkLogin