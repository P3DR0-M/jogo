
let taboleiroCobrinha =document.querySelector(",tabuleiro")

let comidaX, comidaY;
let cobrinhaX=15,cobrinhaY=15;
Let velocidadeX = 0, velocidadeY 

const mudarPosicaoComida = () => { 
    comidaX = Math.floor(Math.random()*30)+1;
    comidaY = Math.floor(Math.random()*30)+1;
}
const movimentoCobra=(a)=>{
    if(a.key==="ArroWup"){
        velocidadeX =0;
        velocidadeY=-1
    } else if(a.key === "ArrowDom"){
        velocidadeX =0;
        velocidadeY=1
    } else if(a.key === "ArroWleft"){
        velocidadeX = -1;
        velocidadeY=0;
    } else if(a.key === "ArroWRight"){
        velocidadeX = 1;
        velocidadeY= 0;
    }
     
}

const iniciarJogo = () => {

let htmlMarkup = `<div class="comida"style=grid-area: ${comidaY}/ ${comidaX}"></div>`;
htmlMarkup += `<div class="cabecaCobrinha"style="grid-area: ${cobrinhaY}/ $
{cobrinhaX}"></div>`;


taboleiroCobrinha.innerHTML = htmlMarkup
}

mudarPosicaoComida();
iniciarJogo();