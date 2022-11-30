// document.getElementById("button-up").addEventListener("click",scrollup);
// var buttonUp = document.getElementById("button-up");
window.onscroll = () => {
    var buttonUp = document.getElementById("button-up");
    // console.log(document.documentElement.scrollTop);
    var currentScroll = document.documentElement.scrollTop;
    if (currentScroll>200) {
        buttonUp.style.cssText = "transform: scale(1);";
        // transform = "scale(1)"
    }else{
        buttonUp.style.cssText = "transform: scale(0);";
    }
}
function scrollup(){
    var currentScroll = document.documentElement.scrollTop;
    if (currentScroll>0){
        window.requestAnimationFrame(scrollup);
        window.scrollTo (0,currentScroll - (currentScroll/20));
    }
}
function vermas() {
    let turismobsasid = document.getElementById("turismobsasid");
    let VerMas = document.getElementById("VerMas");
    if (turismobsasid.classList.contains('turismobsasnone')) {
        turismobsasid.classList.remove("turismobsasnone");
        VerMas.innerText = "Ocultar";

    } else {
        turismobsasid.classList.add("turismobsasnone");
        VerMas.innerText = "Ver Mas"
    }
}
function historiaboton(){
    let lethistoriaid = document.getElementById("historiaid");
    let lethistoriaboton = document.getElementById("historiaboton");
    if(lethistoriaid.classList.contains('historiaclase')){
        historiaid.classList.remove("historiaclase");
        lethistoriaboton.innerText = "Ocultar";
    }else{
        historiaid.classList.add("historiaclase");
        lethistoriaboton.innerText = "Ver Historia";
    }
}
