const imgs = [
    'mapa1.jpg', 'mapa2.jpg', 'mapa3.jpg', 'mapa 4.jpg'
];

let i = 0;

function minhaFuncao() {
    const retangulo = document.getElementById("mapas");
    retangulo.innerHTML = `<img class='mapa' src='imgs/${imgs[i]}'>`;
    i++;
    if (i > imgs.length - 1) {
        i = 0;
    }
    
}
minhaFuncao()

const imgs2 = [
    '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '25.jpg', '26.jpg', '27.jpg', '28.jpg', '29.jpg', '30.jpg', '31.jpg', '32.jpg', '33.jpg', '34.jpg', '35.jpg', '36.jpg', '37.jpg', '38.jpg', '39.jpg', '40.jpg', '41.jpg', '42.jpg', '43.jpg', '44.jpg', '45.jpg', '46.jpg', '47.jpg', '48.jpg', '49.jpg', '50.jpg', '51.jpg', '52.jpg', '54.jpg', '55.jpg', '56.jpg', '57.jpg'
];


function personagens() {
    const sorteio = Math.floor(Math.random() * imgs2.length);
    const personagensImg = document.getElementById("sorteio");
    personagensImg.innerHTML = `<img class='persona' src='imgs/${imgs2[sorteio]}'>`;
    document.getElementById("sorteio").style.display = "block";
    
}

function puxarpersona(){
    document.getElementById("tablet").style.display = "block";
    document.getElementById("seta").style.display = "block";
    document.getElementById("seta2").style.display = "block";
    document.getElementById("selec").style.display = "block";



}


function despuxarpersona(){
    document.getElementById("tablet").style.display = "none";
    document.getElementById("seta").style.display = "none";
    document.getElementById("seta2").style.display = "none";
    document.getElementById("selec").style.display = "none";
    document.getElementById("sorteio").style.display = "none";

}




function seta(){
personagens()

document.getElementById("selec").style.display = "none";
}
function seta2(){
    personagens()
     document.getElementById("selec").style.display = "none";
}


