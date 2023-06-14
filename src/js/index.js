const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");
const divChikorita = document.getElementById("shiny-chico");
const divBayleef = document.getElementById("bayleef");
const divMeganium = document.getElementById("meganium");
const divCyndaquil = document.getElementById("cyndaquil");
const divQuilava = document.getElementById("quilava");
const divTyphlosion = document.getElementById("typhlosion");
const divTotodile = document.getElementById("totodile");
const divCroconaw = document.getElementById("croconaw");
const divFeraligatr = document.getElementById("feraligatr");
const divSentret = document.getElementById("sentret");

botaoAlterarTema.addEventListener("click", () => {
  const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");
  body.classList.toggle("modo-escuro");

  if (modoEscuroEstaAtivo) {
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");

    // Trocar a imagem no elemento <div class="centro" id="shiny-chico">
    divChikorita.innerHTML = '<img src="./src/imagens/Chikorita.gif" alt="Chikorita" class="gif">';
    divBayleef.innerHTML = '<img src="./src/imagens/Bayleef.gif" alt="Bayleef" class="gif">';
    divMeganium.innerHTML = '<img src="./src/imagens/Meganium.gif" alt="Meganium" class="gif">';
    divCyndaquil.innerHTML = '<img src="./src/imagens/Cyndaquil.gif" alt="Cyndaquil" class="gif">';
    divQuilava.innerHTML = '<img src="./src/imagens/Quilava.gif" alt="Quilava" class="gif">';
    divTyphlosion.innerHTML = '<img src="./src/imagens/Typhlosion2.gif" alt="Typhlosion" class="gif">';
    divTotodile.innerHTML = '<img src="./src/imagens/Totodile.gif" alt="Totodile" class="gif">';
    divCroconaw.innerHTML = '<img src="./src/imagens/Croconaw.gif" alt="Croconaw" class="gif">';
    divFeraligatr.innerHTML = '<img src="./src/imagens/Feraligatr.gif" alt="Feraligatr" class="gif">';
    divSentret.innerHTML = '<img src="./src/imagens/Sentret.gif" alt="Sentret" class="gif">';
  } else {
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");

    // Trocar a imagem no elemento <div class="centro" id="shiny-chico">
    divChikorita.innerHTML = '<img src="./src/imagens/shinychikorita.gif" alt="Outra Imagem" class="gif">';
    divBayleef.innerHTML = '<img src="./src/imagens/shinybayleef.gif" alt="Outra Imagem" class="gif">';
    divMeganium.innerHTML = '<img src="./src/imagens/shinymeganium.gif" alt="Outra Imagem" class="gif">';
    divCyndaquil.innerHTML ='<img src="./src/imagens/Shinycyndaquil.gif" alt="Cyndaquil" class="gif">';
    divQuilava.innerHTML = '<img src="./src/imagens/Shinyquilava.gif" alt="Outra Imagem" class="gif">';
    divTyphlosion.innerHTML = '<img src="./src/imagens/ShinyTyphlosion2.gif" alt="Outra Imagem" class="gif">';
    divTotodile.innerHTML = '<img src="./src/imagens/shinytotodile.gif" alt="Totodile" class="gif">';
    divCroconaw.innerHTML = '<img src="./src/imagens/shinycroconaw.gif" alt="Croconaw" class="gif">';
    divFeraligatr.innerHTML = '<img src="./src/imagens/shinyFeraligatr.gif" alt="Feraligatr" class="gif">';
    divSentret.innerHTML = '<img src="./src/imagens/shinysentret.gif" alt="Sentret" class="gif">';
  }
});
