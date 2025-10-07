const Saudacao = document.getElementById('Saudacao');
const frase = document.getElementById('frase');
const icone = document.getElementById('icone');

const frasesManha = ["se algo lhe fizer mal sorria e seja feliz, não vale a pena se estressar com bobeiras",
"Que a manhã comece com fé, boas vibrações e a certeza de que hoje é um novo dia para fazer dar certo."
];
const frasesTarde = ["Que a tarde traga calma, força e a motivação que faltava para transformar o resto do dia em algo incrível.",
"Que esta tarde seja produtiva, leve e cheia de boas energias para seguir em frente com um sorriso no rosto" ];
const frasesNoite = ["Que a noite seja leve, os pensamentos tranquilos e o coração em paz para recomeçar amanhã com mais força e esperança",
"Que a noite traga paz ao coração, descanso à mente e renovação para um novo amanhecer cheio de oportunidades"
];

function atualizaSaudacao() {
    const hoje = new Date();
    const hora = hoje.getHours();
    let msgSaudacao, imgFundo, imgIcone, frasesDoMomento;
    if (hora >= 5 && hora < 12) {
        msgSaudacao = 'bom dia' ;
        imgFundo = "url(manhã.png)";
        imgIcone = "rising-sun.png";
        frasesDoMomento = frasesManha;
    } else if ( hora >= 12 && hora < 18) {
        msgSaudacao = 'Boar Tarde' ;
        imgFundo = "url(tarde.png)";
        imgIcone = "games.png";
        frasesDoMomento = frasesTarde;
    } else {
        msgSaudacao = 'Boar Noite' ;
        imgFundo = "url(noite.png)";
        imgIcone = "moon.png";
        frasesDoMomento = frasesNoite;
    } 
    Saudacao.textContent = msgSaudacao;
    document.body.style.backgroundImage = imgFundo;
    icone.src = imgIcone;
    const randomIndex = Math.floor(Math.random() * frasesDoMomento.length);
    frase.textContent = frasesDoMomento[randomIndex];
}
atualizaSaudacao();
setInterval(atualizaSaudacao, 8000);