
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