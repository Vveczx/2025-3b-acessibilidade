
const aumentarFonteBotao= document.getElementById (aumentar-fonte);
const diminuirFonteBotao= document.getElementById (diminuir-fonte)

let tamanhoFonteatual= 1;

aumentarFonteBotao.addEventListener('click', function () {
tamanhoFonteatual += 0.1;
document.body.style.fontSize = `${tamanhoFonteatual}rem`
})

diminuirFonteBotao.addEventListener('click', function () {
    tamanhoFonteatual -= 0.1;
    document.body.style.fontSize=  `${tamanhoFonteatual}rem`

})