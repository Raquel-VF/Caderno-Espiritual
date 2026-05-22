//console.log("Hello, Word!");
//window.alert("Olá, como você esta?");

const botao = document.querySelector("#botao");
const titulo = document.querySelector("#titulo");
const texto = document.querySelector("#texto");
const humores = document.querySelector("#humores");
const mensagem = document.querySelector("#mensagem");
const musica = document.querySelector("#musica");
const controleMusica = document.querySelector("#controle-musica");
const historico = document.querySelector("#historico");
const data = new Date().toLocaleDateString("pt-BR");

let historicoEmocoes = [];
const historicoSalvo = localStorage.getItem("historico");

if(historicoSalvo){
    historicoEmocoes = JSON.parse(historicoSalvo);
}

botao.addEventListener("click", function () {

    titulo.innerHTML = "Como você esta hoje?";
    texto.innerHTML = "Escolha seu humor";
    botao.style.display = "none";

    humores.innerHTML = `
    <img class="emoji" src="assets/imagem/emoji-feliz.png" alt="Emoji feliz">
    <img class="emoji" src="assets/imagem/emoji-triste.png" alt="Emoji triste">
    <img class="emoji" src="assets/imagem/emoji-chuva.png" alt="Emoji chuva">
    <img class="emoji" src="assets/imagem/emoji-muda.png" alt="Emoji muda">
    `;

    const emojis = document.querySelectorAll(".emoji");

    emojis.forEach(function (emoji) { // Para cada emoji, adiciona um evento de clique
        emoji.addEventListener("click", function () { // Adiciona um evento de clique para cada emoji
            if (emoji.alt === "Emoji feliz") { // Verifica qual emoji foi clicado
                mensagem.innerHTML = "Hoje parece um dia leve ";

                diario.innerHTML = `
                <textarea id="texto-diario" placeholder="Escreva como foi seu dia..."</textarea>
                `;

                const salvarDiario = document.querySelector("#salvar-diario");
                salvarDiario.addEventListener("click", function () {
                    const textoDiario = document.querySelector("#texto-diario").value;

                    console.log(textoDiario);
                });

                if(historicoSalvo){
                    historicoEmocoes = JSON.parse(historicoSalvo);

                    historicoEmocoes.forEach(function(emocao){
                
                // Adiciona o registro ao histórico
                const registro = `
                <div class="registro">

                <p>${emoji.alt} . ${mensagem.innerHTML}</p>

                <small>${data}</small>

                </div>`;

                historico.innerHTML += registro;
            });
            }
                const emocao = {
                    humor: emoji.alt,
                    mensagem: mensagem.innerHTML,
                    data: new Date().toLocaleDateString("pt-BR")
                };
                historicoEmocoes.push(emocao);
            

                // Altera o plano de fundo para um gradiente alegre
                document.body.style.background = "linear-gradient(180deg, #FFD166, #F4A261)";

                // Toca uma música alegre
                musica.src = "assets/audio/som-feliz.mp3";
                musica.play();
                musicaTocando = true;
                controleMusica.innerHTML = "🔊";

                // Armazena o humor no localStorage
                localStorage.setItem("humor", "😄");
                localStorage.setItem("historico", JSON.stringify(historicoEmocoes));

                historicoEmocoes.forEach(function (emocao){

                });

            }

            else if (emoji.alt === "Emoji triste") {
                mensagem.innerHTML = "Tudo bem desacelerar um pouco as vezes, não se cobre tanto!"
                
                // Adiciona o registro ao histórico
                const registro = `
                <div class="registro">
                <p>${emoji.alt}</p>
                <p>${mensagem.innerHTML}</p>
                </div>`;
                historico.innerHTML += registro;

                document.body.style.background = "linear-gradient(180deg, #3A506B, #1C2541)";

                musica.src = "assets/audio/som-triste.mp3";
                musica.play();
                musicaTocando = true;
                controleMusica.innerHTML = "🔊";
            }

            else if (emoji.alt === "Emoji chuva") {
                mensagem.innerHTML = "Permita se sentir chuvoso. A tempestade sempre passa!"
                // Adiciona o registro ao histórico
                const registro = `
                <div class="registro">
                <p>${emoji.alt}</p>
                <p>${mensagem.innerHTML}</p>
                </div>`;
                historico.innerHTML += registro;

                document.body.style.background = "linear-gradient(180deg, #1B1B2F, #0B1020)";

                musica.src = "assets/audio/som-chuva.mp3";
                musica.play();
                musicaTocando = true;
                controleMusica.innerHTML = "🔊";
            }

            else if (emoji.alt === "Emoji muda") {
                mensagem.innerHTML = "Você esta florecendo aos poucos."

                document.body.style.background = "linear-gradient(180deg, #132A13, #31572C)";

                musica.src = "assets/audio/som-natureza.mp3";
                musica.play();
                musicaTocando = true;
                controleMusica.innerHTML = "🔊";
            }
        })
    })

    /* Controle de música */
    let musicaTocando = true;

    controleMusica.addEventListener("click", function () {

        if (musicaTocando) {
            musica.pause();

            controleMusica.innerHTML = "🔇"

            musicaTocando = false;
        }

        else {
            musica.play();
            controleMusica.innerHTML = "🔊"
            musicaTocando = true;
        }
    })


});

