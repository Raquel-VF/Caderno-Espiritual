//console.log("Hello, Word!");
//window.alert("Olá, como você esta?");

const botao = document.querySelector("#botao");
const titulo = document.querySelector("#titulo");
const texto = document.querySelector("#texto");
const humores = document.querySelector("#humores");
const mensagem = document.querySelector("#mensagem");
const musica = document.querySelector("#musica");

botao.addEventListener("click", function(){

    titulo.innerHTML = "Como você esta hoje?";
    texto.innerHTML = "Escolha seu humor";
    botao.style.display = "none";

    humores.innerHTML = `
    <span class="emoji">😄</span>
    <span class="emoji">😐</span>
    <span class="emoji">🌧</span>
    <span class="emoji">🌱</span>`;

    const emojis = document.querySelectorAll(".emoji");

    emojis.forEach(function(emoji){
        emoji.addEventListener("click", function(){
            if(emoji.innerHTML === "😄"){
                mensagem.innerHTML = "Hoje parece um dia leve ";
                
                document.body.style.background = "linear-gradient(180deg, #FFD166, #F4A261";

                musica.src = "assets/audio/som-feliz.mp3";
                musica.play();

            }

            else if(emoji.innerHTML === "😐"){
                mensagem.innerHTML = "Tudo bem desacelerar um pouco as vezes, não se cobre tanto!"
                
                document.body.style.background = "linear-gradient(180deg, #3A506B, #1C2541)";

                musica.src = "assets/audio/som-triste.mp3";
                musica.play();
            }

            else if(emoji.innerHTML === "🌧"){
                mensagem.innerHTML = "Permita se sentir chuvoso. A tempestade sempre passa!"

                document.body.style.background = "linear-gradient(180deg, #1B1B2F, #0B1020)";
                musica.src = "assets/audio/som-chuva.mp3";
                musica.play();
            }

            else if(emoji.innerHTML === "🌱"){
                mensagem.innerHTML = "Você esta florecendo aos poucos."

                document.body.style.background = "linear-gradient(180deg, #132A13, #31572C)";
                musica.src = "assets/audio/som-natureza.mp3";
                musica.play();
            }
        })
    })

});

