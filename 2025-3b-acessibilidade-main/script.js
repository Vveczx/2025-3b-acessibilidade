const aumentarFonteBotao=document.getElementById (aumentar-fonte)

let tamanhoFonteatual=1;

aumentarFonteBotao.addEventListener('click', unction () {
tamanhoFonteatual += 0.1;
document.body.style.fontSize = `${tamanhoFonteatual}rem`
})