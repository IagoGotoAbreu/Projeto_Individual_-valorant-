function home(){
    window.location.href = "#home"
}

const nav = document.querySelector(".nav");

AOS.init();

window.addEventListener("scroll", () => nav.classList.toggle("active", scrollY > 0));

var img = document.getElementById("img");

img.src = './assets/maps/ascent.png';

var lista_imagens_mapas = ['./assets/maps/ascent.png', './assets/maps/bind.png', './assets/maps/brezze.png', './assets/maps/fracture.png', './assets/maps/haven.png', './assets/maps/icebox.png', './assets/maps/lotus.png', './assets/maps/pearl.png', './assets/maps/split.png', './assets/maps/sunset.png'];

var i = 0;

function next(){
    if(i == 9){
        i = -1;
    }
    i++
    img.src = lista_imagens_mapas[i];
}

function back(){
    if(i == 0){
        i = 10;
    }
    i--
    img.src = lista_imagens_mapas[i];
}

var controle = 0;

    function mostrarMais() {
        if (controle == 0) {
            conteudo2.style.display = 'block'
            controle++
            button_down.innerHTML = '<img id="button_mudar" src="./assets/img/seta_cima.png"><span>Retrair</span><img id="button_mudar" src="./assets/img/seta_cima.png">';
            
        }else if(controle == 1){
            conteudo2.style.display = 'none'
            controle--
            button_down.innerHTML = '<img id="button_mudar" src="./assets/img/seta_baixo.png"><span>Expandir</span><img id="button_mudar" src="./assets/img/seta_baixo.png">';
        }
    }