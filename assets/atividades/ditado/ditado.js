const animate = [
  {
    width: "0%",
  },
  {
    width: "100%",
  },
];

const animateConfig = {
  iterations: 1,
  fill: "forwards",
  direction: "normal",
  composite: "replace",
  easing: "linear",
};

const imgFeedbacks = {
  correto: "../assets/atividades/ditado/img/correto.png",
  errado: "../assets/atividades/ditado/img/errado.png",
  meioCerto: "../assets/atividades/ditado/img/meioCerto.png",
};
const imgAudio = {
  play: "../assets/atividades/ditado/img/play.png",
  pause: "../assets/atividades/ditado/img/pause.png",
  reiniciar: "../assets/atividades/ditado/img/reiniciar.png",
};
const msgFeedbacks = {
  correto: "Muito bem! Palavra Correta!",
  errado: "Ops! Tente novamente ao final do nível!",
  erradoFim: "Ops! A palavra está errada!",
  metadeNivel: "Continue com o esse ótimo trabalho!",
};
const listaPalavras = [
  {
    palavra: "Superstição",
    audio: "",
    feedback: null,
  },
  {
    palavra: "Concessão",
    audio: "",
    feedback: null,
  },
  {
    palavra: "Seiscentos",
    audio: "",
    feedback: null,
  },
  {
    palavra: "Azia",
    audio: "",
    feedback: null,
  },
  {
    palavra: "Recessão",
    audio: "",
    feedback: null,
  },
  {
    palavra: "Exprimir",
    audio: "",
    feedback: null,
  },
  {
    palavra: "Hediondo",
    audio: "",
    feedback: null,
  },
  {
    palavra: "Assepsia",
    audio: "",
    feedback: null,
  },
  {
    palavra: "Companhia",
    audio: "",
    feedback: null,
  },
  {
    palavra: "Fugaz",
    audio: "",
    feedback: null,
  },
  {
    palavra: "Ironizar",
    audio: "",
    feedback: null,
  },
  {
    palavra: "Visando",
    audio: "",
    feedback: null,
  },
  {
    palavra: "Escassez",
    audio: "",
    feedback: null,
  },
  {
    palavra: "Contencioso",
    audio: "",
    feedback: null,
  },
  {
    palavra: "Assertivo",
    audio: "",
    feedback: null,
  },
  {
    palavra: "Extorsão",
    audio: "",
    feedback: null,
  },
  {
    palavra: "Ansioso",
    audio: "",
    feedback: null,
  },
  {
    palavra: "Subsídio",
    audio: "",
    feedback: null,
  },
  {
    palavra: "Consternação",
    audio: "",
    feedback: null,
  },
  {
    palavra: "Assessoria",
    audio: "",
    feedback: null,
  },
  {
    palavra: "Excepcional",
    audio: "",
    feedback: null,
  },
  {
    palavra: "Acedioso",
    audio: "",
    feedback: null,
  },
  {
    palavra: "Exaustivo",
    audio: "",
    feedback: null,
  },
  {
    palavra: "Premissa",
    audio: "",
    feedback: null,
  },
  {
    palavra: "Obcecado",
    audio: "",
    feedback: null,
  },
  {
    palavra: "Excelência",
    audio: "",
    feedback: null,
  },
  {
    palavra: "Sexagésimo",
    audio: "",
    feedback: null,
  },
  {
    palavra: "Etnia",
    audio: "",
    feedback: null,
  },
  {
    palavra: "Propensão",
    audio: "",
    feedback: null,
  },
  {
    palavra: "Exuberância",
    audio: "",
    feedback: null,
  },
];

listaPalavras.forEach((p, i) => {
  p.id = i;
});

const n1 = listaPalavras.slice(0, 10);
const n2 = listaPalavras.slice(10, 20);
const n3 = listaPalavras.slice(20, 30);

let nivel = 0;
let palavrasErradas = [];
let palavraAtual;
let indexAtual = 0;
let indexAux = 0;
let audioAtual;
let segundaChance = false;

const atualizaHeader = (nivel, node) => {
  node.innerHTML = "";
  node.insertAdjacentHTML("beforeend", `<div>Nv${nivel}</div>`);
  let aux,
    light = "";
  if (nivel === 1) aux = n1;
  if (nivel === 2) aux = n2;
  if (nivel === 3) aux = n3;
  aux.forEach((n, i) => {
    //if (i == indexAtual && segundaChance) light = "light";
    if (n.feedback === "Correto") {
      node.insertAdjacentHTML(
        "beforeend",
        `<div><img class="${light}" src="${imgFeedbacks.correto}"></div>`
      );
    } else if (n.feedback === "Errado") {
      node.insertAdjacentHTML(
        "beforeend",
        `<div><img class="${light}" src="${imgFeedbacks.errado}"></div>`
      );
    } else if (n.feedback === "Meio Certo") {
      node.insertAdjacentHTML(
        "beforeend",
        `<div><img class="${light}" src="${imgFeedbacks.meioCerto}"></div>`
      );
    } else {
      node.insertAdjacentHTML(
        "beforeend",
        `<div><img src="../assets/atividades/ditado/img/audio.png"></div>`
      );
    }
  });
};

const ditado = document.querySelector(".ditado");

const enunciado = ditado.querySelector(".enunciado");

const iniciar = enunciado.querySelector(".iniciar");
iniciar.addEventListener("click", (e) => {
  enunciado.classList.add("d-none");
  atividadeN1.classList.remove("d-none");
  nivel = 1;
  //audioAtual = new Audio(n1[indexAtual].audio)
  atualizaHeader(nivel, headerN1);
});

const atividadeN1 = ditado.querySelector(".atividade.n1");
const atividadeN2 = ditado.querySelector(".atividade.n2");
const atividadeN3 = ditado.querySelector(".atividade.n3");

const headerN1 = atividadeN1.querySelector(".header");
const headerN2 = atividadeN2.querySelector(".header");
const headerN3 = atividadeN3.querySelector(".header");

const trackN1 = atividadeN1.querySelector(".track .mask");
const trackN2 = atividadeN2.querySelector(".track .mask");
const trackN3 = atividadeN3.querySelector(".track .mask");

const playN1 = atividadeN1.querySelector(".play");
const playN2 = atividadeN2.querySelector(".play");
const playN3 = atividadeN3.querySelector(".play");
playN1.addEventListener("click", (e) => {
  //const duration = audioAtual.duration;
  const duration = 2;
  animateConfig.duration = duration * 1000;
  //audioAtual.play();
  trackN1.animate(animate, animateConfig);
  playN1.querySelector("img").setAttribute("src", imgAudio.pause);
  trackN1.addEventListener("animationend", (e) => {
    e.preventDefault();
    playN1.querySelector("img").setAttribute("src", imgAudio.reiniciar);
  });
});
playN2.addEventListener("click", (e) => {
  //const duration = audioAtual.duration;
  const duration = 2;
  animateConfig.duration = duration * 1000;
  //audioAtual.play();
  trackN2.animate(animate, animateConfig);
  playN2.querySelector("img").setAttribute("src", imgAudio.pause);
  trackN2.addEventListener("animationend", (e) => {
    e.preventDefault();
    playN2.querySelector("img").setAttribute("src", imgAudio.reiniciar);
  });
});
playN3.addEventListener("click", (e) => {
  //const duration = audioAtual.duration;
  const duration = 2;
  animateConfig.duration = duration * 1000;
  //audioAtual.play();
  trackN3.animate(animate, animateConfig);
  playN3.querySelector("img").setAttribute("src", imgAudio.pause);
  trackN3.addEventListener("animationend", (e) => {
    e.preventDefault();
    playN3.querySelector("img").setAttribute("src", imgAudio.reiniciar);
  });
});

const audioN1 = atividadeN1.querySelector(".audio");
const audioN2 = atividadeN2.querySelector(".audio");
const audioN3 = atividadeN3.querySelector(".audio");
const respostaN1 = atividadeN1.querySelector(".resposta");
const respostaN2 = atividadeN2.querySelector(".resposta");
const respostaN3 = atividadeN3.querySelector(".resposta");

const btnsEnviar = ditado.querySelectorAll(".enviar");
const enviarN1 = atividadeN1.querySelector(".enviar");
const enviarN2 = atividadeN2.querySelector(".enviar");
const enviarN3 = atividadeN3.querySelector(".enviar");

const revisaoN1 = ditado.querySelector(".n1 .feedbackRevisao");
const iniciarRevisaoN1 = revisaoN1.querySelector(".iniciar");
const revisaoN2 = ditado.querySelector(".n2 .feedbackRevisao");
const iniciarRevisaoN2 = revisaoN2.querySelector(".iniciar");
const revisaoN3 = ditado.querySelector(".n3 .feedbackRevisao");
const iniciarRevisaoN3 = revisaoN3.querySelector(".iniciar");

iniciarRevisaoN1.addEventListener("click", (e) => {
  e.preventDefault();
  revisaoN1.classList.add("d-none");
  audioN1.classList.remove("d-none");
  respostaN1.classList.remove("d-none");
  indexAtual = n1.findIndex((n) => n.feedback === "Errado");
  atualizaHeader(nivel, headerN1);
});
iniciarRevisaoN2.addEventListener("click", (e) => {
  e.preventDefault();
  revisaoN2.classList.add("d-none");
  audioN2.classList.remove("d-none");
  respostaN2.classList.remove("d-none");
  atualizaHeader(nivel, headerN2);
  indexAtual = n2.findIndex((n) => n.feedback === "Errado");
});
iniciarRevisaoN3.addEventListener("click", (e) => {
  e.preventDefault();
  revisaoN3.classList.add("d-none");
  audioN3.classList.remove("d-none");
  respostaN3.classList.remove("d-none");
  atualizaHeader(nivel, headerN3);
  indexAtual = n3.findIndex((n) => n.feedback === "Errado");
});

btnsEnviar.forEach((enviar, i) => {
  enviar.addEventListener("click", (e) => {
    let auxArray,
      auxResposta,
      auxAudio,
      auxHeader,
      auxTrack,
      auxPlay,
      auxAtividade,
      auxRevisao;
    if (nivel === 1) {
      auxArray = n1;
      auxResposta = respostaN1;
      auxAudio = audioN1;
      auxHeader = headerN1;
      auxTrack = trackN1;
      auxPlay = playN1;
      auxRevisao = revisaoN1;
      auxAtividade = atividadeN1;
      auxProximo = atividadeN2;
      auxHeaderProximo = headerN2;
    } else if (nivel === 2) {
      auxArray = n2;
      auxResposta = respostaN2;
      auxRevisao = revisaoN2;
      auxAudio = audioN2;
      auxHeader = headerN2;
      auxTrack = trackN2;
      auxPlay = playN2;
      auxAtividade = atividadeN2;
      auxProximo = atividadeN3;
      auxHeaderProximo = headerN3;
    } else {
      auxArray = n3;
      auxRevisao = revisaoN3;
      auxResposta = respostaN3;
      auxAudio = audioN3;
      auxHeader = headerN3;
      auxTrack = trackN3;
      auxPlay = playN3;
      auxAtividade = atividadeN3;
    }
    e.preventDefault();
    enviar.classList.add("disabled");
    const input = auxAtividade.querySelector(".campo");
    const value = input.value.toLocaleLowerCase().trim();
    const palavra = auxArray[indexAtual]
      ? auxArray[indexAtual].palavra.toLocaleLowerCase().trim()
      : "";

    if (value === palavra && !segundaChance && palavra) {
      auxArray[indexAtual].feedback = "Correto";
      auxResposta.classList.add("correta");
      auxResposta.insertAdjacentHTML(
        "beforeend",
        `<img class="img" src="${imgFeedbacks.correto}">`
      );
      auxResposta.insertAdjacentHTML(
        "beforeend",
        `<p class="feed">${msgFeedbacks.correto}</p>`
      );
    } else if (!segundaChance && palavra) {
      auxArray[indexAtual].feedback = "Errado";
      auxResposta.classList.add("errada");
      auxResposta.insertAdjacentHTML(
        "beforeend",
        `<img class="img" src="${imgFeedbacks.errado}">`
      );
      auxResposta.insertAdjacentHTML(
        "beforeend",
        `<p class="feed">${msgFeedbacks.errado}</p>`
      );
      palavrasErradas.push(auxArray[indexAtual]);
    }
    if (!segundaChance) indexAtual++;
    if (indexAtual >= auxArray.length && !segundaChance) {
      if (auxArray.some((n) => n.feedback === "Errado")) {
        auxAudio.classList.add("d-none");
        auxResposta.classList.add("d-none");
        auxRevisao.classList.remove("d-none");
        segundaChance = true;
        indexAtual = 0;
      } else {
        indexAtual = 0;
        palavrasErradas = [];
        segundaChance = false;
        indexAux = 0;
        nivel++;
        setTimeout(() => {
          auxAtividade.classList.add("d-none");
          if (nivel !== 4) auxProximo.classList.remove("d-none");
          if (nivel !== 4) atualizaHeader(nivel, auxHeaderProximo);
          if (nivel === 4) carregaFim();
        }, 1500);
      }
    }
    if (!segundaChance) atualizaHeader(nivel, auxHeader);
    if (segundaChance) {
      if (value === palavra && palavra) {
        auxArray[indexAtual].feedback = "Meio Certo";
        auxResposta.classList.add("correta");
        auxResposta.insertAdjacentHTML(
          "beforeend",
          `<img class="img" src="${imgFeedbacks.correto}">`
        );
        auxResposta.insertAdjacentHTML(
          "beforeend",
          `<p class="feed">${msgFeedbacks.correto}</p>`
        );
      } else {
        auxResposta.classList.add("errada");
        auxResposta.insertAdjacentHTML(
          "beforeend",
          `<img class="img" src="${imgFeedbacks.errado}">`
        );
        auxResposta.insertAdjacentHTML(
          "beforeend",
          `<p class="feed">${msgFeedbacks.erradoFim}</p>`
        );
      }
      indexAux++;
      indexAtual = auxArray.findIndex((n) => n.feedback === "Errado");
      atualizaHeader(nivel, auxHeader);
      if (indexAux >= palavrasErradas.length) {
        nivel++;
        segundaChance = false;
        indexAtual = 0;
        indexAux = 0;
        palavrasErradas = [];
        setTimeout(() => {
          auxAtividade.classList.add("d-none");
          if (nivel === 4) {
            carregaFim();
          } else {
            auxProximo.classList.remove("d-none");
            atualizaHeader(nivel, auxHeaderProximo);
          }
        }, 1500);
      }
    }
    auxPlay.querySelector("img").setAttribute("src", imgAudio.play);
    auxTrack.animate([{ width: "0%" }], { duration: 0, fill: "forwards" });
    if (indexAtual === auxArray.length / 2) {
      auxResposta.insertAdjacentHTML(
        "beforeend",
        `<p class="motivacao">${msgFeedbacks.metadeNivel}</p>`
      );
    }
    setTimeout(() => {
      auxAtividade.querySelectorAll(".img").forEach((img) => img.remove());
      auxAtividade.querySelectorAll(".feed").forEach((feed) => feed.remove());
      auxAtividade
        .querySelectorAll(".motivacao")
        .forEach((feed) => feed.remove());
      auxResposta.classList.remove("correta", "errada");
      enviar.classList.remove("disabled");
      input.value = "";
    }, 1500);
  });
});

// enviarN1.addEventListener("click", (e) => {
//   e.preventDefault();
//   enviarN1.classList.add("disabled");
//   const input = atividadeN1.querySelector(".campo");
//   const value = input.value.toLocaleLowerCase().trim();
//   const palavra = n1[indexAtual]
//     ? n1[indexAtual].palavra.toLocaleLowerCase().trim()
//     : "";

//   if (value === palavra && !segundaChance && palavra) {
//     n1[indexAtual].feedback = "Correto";
//     respostaN1.classList.add("correta");
//     respostaN1.insertAdjacentHTML(
//       "beforeend",
//       `<img class="img" src="${imgFeedbacks.correto}">`
//     );
//     respostaN1.insertAdjacentHTML(
//       "beforeend",
//       `<p class="feed">${msgFeedbacks.correto}</p>`
//     );
//   } else if (!segundaChance && palavra) {
//     n1[indexAtual].feedback = "Errado";
//     respostaN1.classList.add("errada");
//     respostaN1.insertAdjacentHTML(
//       "beforeend",
//       `<img class="img" src="${imgFeedbacks.errado}">`
//     );
//     respostaN1.insertAdjacentHTML(
//       "beforeend",
//       `<p class="feed">${msgFeedbacks.errado}</p>`
//     );
//     palavrasErradas.push(n1[indexAtual]);
//   }
//   if (!segundaChance) indexAtual++;
//   if (indexAtual >= n1.length && !segundaChance) {
//     if (n1.some((n) => n.feedback === "Errado")) {
//       audioN1.classList.add("d-none");
//       respostaN1.classList.add("d-none");
//       revisaoN1.classList.remove("d-none");
//       segundaChance = true;
//       indexAtual = 0;
//     } else {
//       atividadeN1.classList.add("d-none");
//       atividadeN2.classList.remove("d-none");
//       indexAtual = 0;
//       palavrasErradas = [];
//       segundaChance = false;
//       indexAux = 0;
//       nivel++;
//       atualizaHeader(nivel, headerN2);
//     }
//   }
//   if (!segundaChance) atualizaHeader(nivel, headerN1);
//   if (segundaChance) {
//     if (value === palavra && palavra) {
//       n1[indexAtual].feedback = "Meio Certo";
//       respostaN1.classList.add("correta");
//       respostaN1.insertAdjacentHTML(
//         "beforeend",
//         `<img class="img" src="${imgFeedbacks.correto}">`
//       );
//       respostaN1.insertAdjacentHTML(
//         "beforeend",
//         `<p class="feed">${msgFeedbacks.correto}</p>`
//       );
//     } else {
//       respostaN1.classList.add("errada");
//       respostaN1.insertAdjacentHTML(
//         "beforeend",
//         `<img class="img" src="${imgFeedbacks.errado}">`
//       );
//       respostaN1.insertAdjacentHTML(
//         "beforeend",
//         `<p class="feed">${msgFeedbacks.erradoFim}</p>`
//       );
//     }
//     indexAux++;
//     indexAtual = n1.findIndex((n) => n.feedback === "Errado");
//     atualizaHeader(nivel, headerN1);
//     if (indexAux >= palavrasErradas.length) {
//       nivel++;
//       segundaChance = false;
//       indexAtual = 0;
//       indexAux = 0;
//       palavrasErradas = [];
//       setTimeout(() => {
//         atividadeN1.classList.add("d-none");
//         atividadeN2.classList.remove("d-none");
//         atualizaHeader(nivel, headerN2);
//       }, 1500);
//     }
//   }
//   playN1.querySelector("img").setAttribute("src", imgAudio.play);
//   trackN1.animate([{ width: "0%" }], { duration: 0, fill: "forwards" });
//   if (indexAtual === n1.length / 2) {
//     respostaN1.insertAdjacentHTML(
//       "beforeend",
//       `<p class="motivacao">${msgFeedbacks.metadeNivel}</p>`
//     );
//   }
//   setTimeout(() => {
//     atividadeN1.querySelectorAll(".img").forEach((img) => img.remove());
//     atividadeN1.querySelectorAll(".feed").forEach((feed) => feed.remove());
//     atividadeN1.querySelectorAll(".motivacao").forEach((feed) => feed.remove());
//     respostaN1.classList.remove("correta", "errada");
//     enviarN1.classList.remove("disabled");
//     input.value = "";
//   }, 1500);
// });

const carregaFim = () => {
  const fim = ditado.querySelector(".fim");
  fim.classList.remove("d-none");
  const headers = fim.querySelectorAll(".header");
  headers.forEach((h, i) => {
    atualizaHeader(i + 1, h);
  });
  const reiniciar = fim.querySelector(".reiniciar");
  reiniciar.addEventListener("click", (e) => window.location.reload());
};
