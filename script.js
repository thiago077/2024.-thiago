const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: ""
            },
            {
                texto: "Não",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Qual a sua idade?",
        alternativas: [
            {
                texto: "Maior que 18",
                afirmacao: ""
            },
            {
                texto: "Menor de 18",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Se você tem sonhos, está colocando ele em prática?",
        alternativas: [
            {
                texto: "Sim, estou.",
                afirmacao: ""
            },
            {
                texto: "Estou tentando, correndo atrás.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Você acha que está no caminho certo?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: ""
            },
            {
                texto: "Não sei, não tenho contato com pessoas para me ajudarem",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Para seguir seu caminho é preciso estár decidido se é isso que você quer, sua decisão está tomada?",
        alternativas: [
            {
                texto: "Talvez.",
                afirmacao: ""
            },
            {
                texto: "Não, estou pensando.",
                afirmacao: ""
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Muito obrigado por responder, mas pense no seu futuro, nunca é tarde!";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
