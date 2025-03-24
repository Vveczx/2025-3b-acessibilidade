document.addEventListener(`DOMContentLoaded`, function (){
const botaoAcessibilidade=document.getElementById (`botao-acessibilidade`);
const opcoesAcesibilidade=document.getElementById (`apresenta-lista`);

botaoAcessibilidade.addEventListener(`click`, function(){
botaoAcessibilidade.classList.toggle(`rotacao-menu`)
opcoesAcesibilidade.classList.toggle(`apresenta-ĺista`)
})
const aumentarFonteBotao= document.getElementById (`aumentar-fonte`);
const diminuirFonteBotao= document.getElementById (`diminuir-fonte`)

let tamanhoFonteatual= 1;

aumentarFonteBotao.addEventListener('click', function () {
tamanhoFonteatual += 0.1;
document.body.style.fontSize = `${tamanhoFonteatual}rem`
})

diminuirFonteBotao.addEventListener('click', function () {
    tamanhoFonteatual -= 0.1;
    document.body.style.fontSize=  `${tamanhoFonteatual}rem`

})
});