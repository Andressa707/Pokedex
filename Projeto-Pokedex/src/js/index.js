function trocarImagemFundo(modoEscuroEstaAtivo) {
  const imagemFundo = modoEscuroEstaAtivo ? './src/imagens/img%20fundo%20dia.jpeg' : './src/imagens/img%20fundo%20noite.jpeg';
  body.style.backgroundImage = `url('${imagemFundo}')`;
}

const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", (e) => {
  const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

  body.classList.toggle("modo-escuro");

  trocarImagemFundo(modoEscuroEstaAtivo);

  if (modoEscuroEstaAtivo) {
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png"); 
  } else {
    imagemBotaoTrocaDeTema.setAttribute ("src", "./src/imagens/moon.png");
  }
});