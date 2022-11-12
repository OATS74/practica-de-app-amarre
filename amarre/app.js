function moverPosicionRandon(elm) { 
    elm.style.position = 'absolute';
    elm.style.top = Math.random() * (window.innerHeight - elm
        .offsetHeight) + 'px';

        elm.style.left = Math.random() * (window.innerWidth - elm
            .offsetWidth) + 'px';
}
let btnSi = document.getElementById("btn_si");
let btnNo =document.getElementById("btn_no");
let divModoFamilia = document.getElementByClassName("modo_familia")[0];

btnNo.addEventListener('mouseenter', function(e) { moverPosicionRandon(e.target)});

btnSi.addEventListener('click',function(e) {

alert('Sabia que dirias que si TQM ')
divModoFamilia.style.display = 'block';
const camcion  = new Audio ('images\\siempre-peligroso.mp3');
camcion.play();
}); 
//agregar una cancion enjs?

