const PATHAUDIO = "../assets/atividades/ditado/audios";
const DELAY = 1500;
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
    audio: `${PATHAUDIO}/palavra1.mp3`,
    feedback: null,
  },
  {
    palavra: "Concessão",
    audio: `${PATHAUDIO}/palavra2.mp3`,
    feedback: null,
  },
  {
    palavra: "Seiscentos",
    audio: `${PATHAUDIO}/palavra3.mp3`,
    feedback: null,
  },
  {
    palavra: "Azia",
    audio: `${PATHAUDIO}/palavra4.mp3`,
    feedback: null,
  },
  {
    palavra: "Recessão",
    audio: `${PATHAUDIO}/palavra5.mp3`,
    feedback: null,
  },
  {
    palavra: "Exprimir",
    audio: `${PATHAUDIO}/palavra6.mp3`,
    feedback: null,
  },
  {
    palavra: "Hediondo",
    audio: `${PATHAUDIO}/palavra7.mp3`,
    feedback: null,
  },
  {
    palavra: "Assepsia",
    audio: `${PATHAUDIO}/palavra8.mp3`,
    feedback: null,
  },
  {
    palavra: "Companhia",
    audio: `${PATHAUDIO}/palavra9.mp3`,
    feedback: null,
  },
  {
    palavra: "Fugaz",
    audio: `${PATHAUDIO}/palavra10.mp3`,
    feedback: null,
  },
  {
    palavra: "Ironizar",
    audio: `${PATHAUDIO}/palavra11.mp3`,
    feedback: null,
  },
  {
    palavra: "Visando",
    audio: `${PATHAUDIO}/palavra12.mp3`,
    feedback: null,
  },
  {
    palavra: "Escassez",
    audio: `${PATHAUDIO}/palavra13.mp3`,
    feedback: null,
  },
  {
    palavra: "Contencioso",
    audio: `${PATHAUDIO}/palavra14.mp3`,
    feedback: null,
  },
  {
    palavra: "Assertivo",
    audio: `${PATHAUDIO}/palavra15.mp3`,
    feedback: null,
  },
  {
    palavra: "Extorsão",
    audio: `${PATHAUDIO}/palavra16.mp3`,
    feedback: null,
  },
  {
    palavra: "Ansioso",
    audio: `${PATHAUDIO}/palavra17.mp3`,
    feedback: null,
  },
  {
    palavra: "Subsídio",
    audio: `${PATHAUDIO}/palavra18.mp3`,
    feedback: null,
  },
  {
    palavra: "Consternação",
    audio: `${PATHAUDIO}/palavra19.mp3`,
    feedback: null,
  },
  {
    palavra: "Assessoria",
    audio: `${PATHAUDIO}/palavra20.mp3`,
    feedback: null,
  },
  {
    palavra: "Excepcional",
    audio: `${PATHAUDIO}/palavra21.mp3`,
    feedback: null,
  },
  {
    palavra: "Acedioso",
    audio: `${PATHAUDIO}/palavra22.mp3`,
    feedback: null,
  },
  {
    palavra: "Exaustivo",
    audio: `${PATHAUDIO}/palavra23.mp3`,
    feedback: null,
  },
  {
    palavra: "Premissa",
    audio: `${PATHAUDIO}/palavra24.mp3`,
    feedback: null,
  },
  {
    palavra: "Obcecado",
    audio: `${PATHAUDIO}/palavra25.mp3`,
    feedback: null,
  },
  {
    palavra: "Excelência",
    audio: `${PATHAUDIO}/palavra26.mp3`,
    feedback: null,
  },
  {
    palavra: "Sexagésimo",
    audio: `${PATHAUDIO}/palavra27.mp3`,
    feedback: null,
  },
  {
    palavra: "Etnia",
    audio: `${PATHAUDIO}/palavra28.mp3`,
    feedback: null,
  },
  {
    palavra: "Propensão",
    audio: `${PATHAUDIO}/palavra29.mp3`,
    feedback: null,
  },
  {
    palavra: "Exuberância",
    audio: `${PATHAUDIO}/palavra30.mp3`,
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
let segundaChanceControle = false;

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
  audioAtual = new Audio(n1[indexAtual].audio);
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
  const duration = audioAtual.duration;
  //const duration = 2;
  animateConfig.duration = duration * 1000;
  audioAtual.play();
  trackN1.animate(animate, animateConfig);
  playN1.querySelector("img").setAttribute("src", imgAudio.pause);
  trackN1.addEventListener("animationend", (e) => {
    e.preventDefault();
    playN1.querySelector("img").setAttribute("src", imgAudio.reiniciar);
  });
});
playN2.addEventListener("click", (e) => {
  const duration = audioAtual.duration;
  //const duration = 2;
  animateConfig.duration = duration * 1000;
  audioAtual.play();
  trackN2.animate(animate, animateConfig);
  playN2.querySelector("img").setAttribute("src", imgAudio.pause);
  trackN2.addEventListener("animationend", (e) => {
    e.preventDefault();
    playN2.querySelector("img").setAttribute("src", imgAudio.reiniciar);
  });
});
playN3.addEventListener("click", (e) => {
  const duration = audioAtual.duration;
  //const duration = 2;
  animateConfig.duration = duration * 1000;
  audioAtual.play();
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
  audioAtual = new Audio(n1[indexAtual].audio);
  atualizaHeader(nivel, headerN1);
});
iniciarRevisaoN2.addEventListener("click", (e) => {
  e.preventDefault();
  revisaoN2.classList.add("d-none");
  audioN2.classList.remove("d-none");
  respostaN2.classList.remove("d-none");
  atualizaHeader(nivel, headerN2);
  indexAtual = n2.findIndex((n) => n.feedback === "Errado");
  audioAtual = new Audio(n2[indexAtual].audio);
});
iniciarRevisaoN3.addEventListener("click", (e) => {
  e.preventDefault();
  revisaoN3.classList.add("d-none");
  audioN3.classList.remove("d-none");
  respostaN3.classList.remove("d-none");
  atualizaHeader(nivel, headerN3);
  indexAtual = n3.findIndex((n) => n.feedback === "Errado");
  audioAtual = new Audio(n3[indexAtual].audio);
});

const atualizaVariavel = (nivel) => {
  let auxArray,
    auxResposta,
    auxAudio,
    auxHeader,
    auxTrack,
    auxPlay,
    auxAtividade,
    auxProximo,
    auxHeaderProximo,
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

  return {
    auxArray,
    auxResposta,
    auxAudio,
    auxHeader,
    auxTrack,
    auxPlay,
    auxAtividade,
    auxHeaderProximo,
    auxProximo,
    auxRevisao,
  };
};

btnsEnviar.forEach((enviar, i) => {
  enviar.addEventListener("click", (e) => {
    e.preventDefault();
    enviar.classList.add("disabled");
    const input = atualizaVariavel(nivel).auxAtividade.querySelector(".campo");
    let value = input.value.toLocaleLowerCase().trim();
    let palavra = atualizaVariavel(nivel).auxArray[indexAtual]
      ? atualizaVariavel(nivel)
          .auxArray[indexAtual].palavra.toLocaleLowerCase()
          .trim()
      : "";

    if (value === palavra && !segundaChance && palavra) {
      atualizaVariavel(nivel).auxArray[indexAtual].feedback = "Correto";
      atualizaVariavel(nivel).auxResposta.classList.add("correta");
      atualizaVariavel(nivel).auxResposta.insertAdjacentHTML(
        "beforeend",
        `<img class="img" src="${imgFeedbacks.correto}">`
      );
      atualizaVariavel(nivel).auxResposta.insertAdjacentHTML(
        "beforeend",
        `<p class="feed">${msgFeedbacks.correto}</p>`
      );
    } else if (!segundaChance && palavra) {
      atualizaVariavel(nivel).auxArray[indexAtual].feedback = "Errado";
      atualizaVariavel(nivel).auxResposta.classList.add("errada");
      atualizaVariavel(nivel).auxResposta.insertAdjacentHTML(
        "beforeend",
        `<img class="img" src="${imgFeedbacks.errado}">`
      );
      atualizaVariavel(nivel).auxResposta.insertAdjacentHTML(
        "beforeend",
        `<p class="feed">${msgFeedbacks.errado}</p>`
      );
      palavrasErradas.push(atualizaVariavel(nivel).auxArray[indexAtual]);
    }
    if (!segundaChance) {
      atualizaVariavel(nivel).auxArray[indexAtual].segundaChance = false;
      indexAtual++;
      audioAtual = atualizaVariavel(nivel).auxArray[indexAtual]
        ? new Audio(atualizaVariavel(nivel).auxArray[indexAtual].audio)
        : "";
    }
    if (
      indexAtual >= atualizaVariavel(nivel).auxArray.length &&
      !segundaChance
    ) {
      if (
        atualizaVariavel(nivel).auxArray.some((n) => n.feedback === "Errado")
      ) {
        atualizaVariavel(nivel).auxAudio.classList.add("d-none");
        atualizaVariavel(nivel).auxResposta.classList.add("d-none");
        atualizaVariavel(nivel).auxRevisao.classList.remove("d-none");
        segundaChance = true;
        indexAtual = 0;
        audioAtual = new Audio(
          atualizaVariavel(nivel).auxArray[indexAtual].audio
        );
      } else {
        indexAtual = 0;
        palavrasErradas = [];
        segundaChance = false;
        indexAux = 0;

        setTimeout(() => {
          atualizaVariavel(nivel).auxAtividade.classList.add("d-none");
          if (nivel === 3) {
            carregaFim();
          } else {
            atualizaVariavel(nivel).auxProximo.classList.remove("d-none");
            nivel++;
            audioAtual = new Audio(
              atualizaVariavel(nivel).auxArray[indexAtual].audio
            );
            atualizaHeader(nivel, atualizaVariavel(nivel).auxHeader);
          }
        }, DELAY);
      }
    }
    if (!segundaChance)
      atualizaHeader(nivel, atualizaVariavel(nivel).auxHeader);
    if (segundaChance && segundaChanceControle) {
      palavra = atualizaVariavel(nivel).auxArray[indexAtual]
        ? atualizaVariavel(nivel)
            .auxArray[indexAtual].palavra.toLocaleLowerCase()
            .trim()
        : "";
      if (value === palavra && palavra) {
        atualizaVariavel(nivel).auxArray[indexAtual].feedback = "Meio Certo";
        atualizaVariavel(nivel).auxResposta.classList.add("correta");
        atualizaVariavel(nivel).auxResposta.insertAdjacentHTML(
          "beforeend",
          `<img class="img" src="${imgFeedbacks.correto}">`
        );
        atualizaVariavel(nivel).auxResposta.insertAdjacentHTML(
          "beforeend",
          `<p class="feed">${msgFeedbacks.correto}</p>`
        );
      } else {
        atualizaVariavel(nivel).auxResposta.classList.add("errada");
        atualizaVariavel(nivel).auxResposta.insertAdjacentHTML(
          "beforeend",
          `<img class="img" src="${imgFeedbacks.errado}">`
        );
        atualizaVariavel(nivel).auxResposta.insertAdjacentHTML(
          "beforeend",
          `<p class="feed">${msgFeedbacks.erradoFim}</p>`
        );
        atualizaVariavel(nivel).auxArray[indexAtual].segundaChance = true;
      }
      indexAux++;
      indexAtual = atualizaVariavel(nivel).auxArray.findIndex(
        (n) => n.feedback === "Errado" && !n.segundaChance
      );
      audioAtual = atualizaVariavel(nivel).auxArray[indexAtual]
        ? new Audio(atualizaVariavel(nivel).auxArray[indexAtual].audio)
        : "";
      atualizaHeader(nivel, atualizaVariavel(nivel).auxHeader);
      if (indexAux >= palavrasErradas.length) {
        segundaChance = false;
        indexAtual = 0;
        indexAux = 0;
        palavrasErradas = [];
        segundaChanceControle = false;
        setTimeout(() => {
          atualizaVariavel(nivel).auxAtividade.classList.add("d-none");
          if (nivel === 3) {
            carregaFim();
          } else {
            atualizaVariavel(nivel).auxProximo.classList.remove("d-none");
            nivel++;
            audioAtual = new Audio(
              atualizaVariavel(nivel).auxArray[indexAtual].audio
            );
            atualizaHeader(nivel, atualizaVariavel(nivel).auxHeader);
          }
        }, DELAY);
      }
    }
    if (segundaChance) segundaChanceControle = true;
    atualizaVariavel(nivel)
      .auxPlay.querySelector("img")
      .setAttribute("src", imgAudio.play);
    atualizaVariavel(nivel).auxTrack.animate([{ width: "0%" }], {
      duration: 0,
      fill: "forwards",
    });
    if (indexAtual === atualizaVariavel(nivel).auxArray.length / 2) {
      atualizaVariavel(nivel).auxResposta.insertAdjacentHTML(
        "beforeend",
        `<p class="motivacao">${msgFeedbacks.metadeNivel}</p>`
      );
    }
    setTimeout(() => {
      atualizaVariavel(nivel)
        .auxAtividade.querySelectorAll(".img")
        .forEach((img) => img.remove());
      atualizaVariavel(nivel)
        .auxAtividade.querySelectorAll(".feed")
        .forEach((feed) => feed.remove());
      atualizaVariavel(nivel)
        .auxAtividade.querySelectorAll(".motivacao")
        .forEach((feed) => feed.remove());
      atualizaVariavel(nivel).auxResposta.classList.remove("correta", "errada");
      enviar.classList.remove("disabled");
      input.value = "";
    }, DELAY);
  });
});

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
