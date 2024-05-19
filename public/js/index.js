function home(){
    window.location.href = "#home"
}

const nav = document.querySelector(".nav");

AOS.init();

window.addEventListener("scroll", () => nav.classList.toggle("active", scrollY > 0));

var img = document.getElementById("img");

img.src = '../public/assets/img/ascent.png';

var lista_imagens_mapas = ['../public/assets/img/ascent.png', '../public/assets/img/bind.png', '../public/assets/img/brezze.png', '../public/assets/img/fracture.png', '../public/assets/img/haven.png', '../public/assets/img/icebox.png', '../public/assets/img/lotus.png', '../public/assets/img/pearl.png', '../public/assets/img/split.png', '../public/assets/img/sunset.png'];

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
            button_down.innerHTML = '<img id="button_mudar" src="../public/assets/img/seta_cima.png"><span>Retrair</span><img id="button_mudar" src="../public/assets/img/seta_cima.png">';
            
        }else if(controle == 1){
            conteudo2.style.display = 'none'
            controle--
            button_down.innerHTML = '<img id="button_mudar" src="../public/assets/img/seta_baixo.png"><span>Expandir</span><img id="button_mudar" src="../public/assets/img/seta_baixo.png">';
        }
    }