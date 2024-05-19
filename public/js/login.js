AOS.init();

function home(){
    window.location.href = "index.html"
}

function ocultar() {
    if(input_senha.type == "password") {
        input_senha.type = "text";
        button_ocultar.innerHTML = '<img id="img_ocultar" src="../public/assets/img/olho-fechado.png">';
    } else {
        input_senha.type = "password";
        button_ocultar.innerHTML = '<img id="img_ocultar" src="../public/assets/img/olho-aberto.png">';
    }
}