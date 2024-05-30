function home(){
    window.location.href = "#home"
}

const nav = document.querySelector(".nav");

AOS.init();

window.addEventListener("scroll", () => nav.classList.toggle("active", scrollY > 0));

var img = document.getElementById("img");

img.src = './assets/maps/ascent.png';

var lista_imagens_mapas = [];
var imagens = [
    'ascent.png', 'bind.png', 'brezze.png', 'fracture.png', 
    'haven.png', 'icebox.png', 'lotus.png', 'pearl.png', 
    'split.png', 'sunset.png'
];
for (var index = 0; index < imagens.length; index++) {
    lista_imagens_mapas.push('./assets/maps/' + imagens[index]);
}

var i = 0;

function next(){
    if (i == lista_imagens_mapas.length - 1) {
        i = -1;
    }
    i++;
    img.src = lista_imagens_mapas[i];
}

function back(){
    if (i == 0) {
        i = lista_imagens_mapas.length;
    }
    i--;
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