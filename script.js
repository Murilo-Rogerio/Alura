const flashcards = [
    {
        pergunta: "O CSS é responsável por deixar as páginas da internet mais bonitas e organizadas. Mas o que significa CSS?",
        resposta: "CSS significa <strong>Cascading Style Sheets</strong>."
    },
    {
        pergunta: "O HTML é usado para montar a estrutura de todas as páginas da web. Mas o que significa HTML?",
        resposta: "HTML significa <strong>HyperText Markup Language</strong>."
    },
    {
        pergunta: "O JavaScript deixa as páginas interativas e dinâmicas. Em que ano ele foi criado?",
        resposta: "Em <strong>1995</strong>, por Brendan Eich — em apenas 10 dias!"
    }
];

let cartaoAtual = 0;
let respostaVisivel = false;

const perguntaEl = document.getElementById("pergunta");
const respostaEl = document.getElementById("resposta");
const botaoRespostaEl = document.getElementById("botaoResposta");
const contadorEl = document.getElementById("contador");

function renderizarCartao() {
    const cartao = flashcards[cartaoAtual];

    perguntaEl.textContent = cartao.pergunta;
    respostaEl.innerHTML = cartao.resposta;
    contadorEl.textContent = (cartaoAtual + 1) + " / " + flashcards.length;

    esconderResposta();
}

function alternarResposta() {
    respostaVisivel = !respostaVisivel;

    respostaEl.classList.toggle("oculta", !respostaVisivel);
    botaoRespostaEl.textContent = respostaVisivel
        ? "🙈 Ocultar resposta"
        : "👁 Ver resposta";
}

function esconderResposta() {
    respostaVisivel = false;
    respostaEl.classList.add("oculta");
    botaoRespostaEl.textContent = "👁 Ver resposta";
}

function proximoCartao() {
    cartaoAtual = (cartaoAtual + 1) % flashcards.length;
    renderizarCartao();
}

function cartaoAnterior() {
    cartaoAtual = (cartaoAtual - 1 + flashcards.length) % flashcards.length;
    renderizarCartao();
}

respostaEl.addEventListener("click", alternarResposta);

document.addEventListener("keydown", function (e) {
    if (e.target.tagName === "BUTTON") return;

    if (e.code === "Space") {
        e.preventDefault();
        alternarResposta();
    } else if (e.code === "ArrowRight") {
        proximoCartao();
    } else if (e.code === "ArrowLeft") {
        cartaoAnterior();
    }
});

renderizarCartao();
