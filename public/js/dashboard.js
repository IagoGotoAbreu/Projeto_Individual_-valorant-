function quiz() {
  window.location.href = "./quiz.html";
}

function feedback() {
  window.location.href = "./feedback.html";
}

function dashboard() {
  window.location.href = "./dashboard.html";
}

function sair() {
  Swal.fire({
    title: "Tem certeza que deseja sair?",
    confirmButtonText: "Sim",
    showCancelButton: true,
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = "../index.html";
    }
  });
}

const kpiRadiante = document.getElementById("kpiRadiante");
const kpiTempo = document.getElementById("kpiTempo");

const usuario = sessionStorage.NOME_USUARIO;
menuNickname.innerHTML = usuario;
var idUsuario = sessionStorage.ID_USUARIO;

pegarKpi();
function pegarKpi() {
  fetch(`/quiz/buscarDadosQuizAcertosRad`).then((res) => {
    res.json().then((res) => {
      if (res.length > 0) {
        kpiRadiante.textContent = res[0].pontos_rad;
      }
    });
  });

  fetch(`/quiz/buscarDadosQuizTempo`).then((res) => {
    res.json().then((res) => {
      if (res.length > 0) {
        kpiTempo.textContent = res[0].tempo_rapido;
      }
    });
  });
}

var acertos_usuario = 0;
pegarDados();
function pegarDados() {
  fetch(`/quiz/buscarDadosQuizAcertos/${idUsuario}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function (resposta) {
      console.log("ESTOU NO THEN DO pegarDados()!");
      console.log(resposta);

      if (resposta.ok) {
        console.log(resposta);

        resposta.json().then((json) => {
          console.log(json);
          acertos_usuario = json[0].respostas_certas;
          pegarOutrosDados();
        });
      } else {
        console.log("Houve um erro ao cadastrar feedback");

        resposta.text().then((texto) => {
          console.error(texto);
        });
      }
    })
    .catch(function (erro) {
      console.log(erro);
    });
}

var player1;
var player2;
var player3;
var player4;
var player5;
var player6;
var player7;
var dadosPlayer1;
var dadosPlayer2;
var dadosPlayer3;
var dadosPlayer4;
var dadosPlayer5;
var dadosPlayer6;
var dadosPlayer7;
function pegarOutrosDados() {
  fetch(`/quiz/buscarDadosQuizOutrosAcertos/${idUsuario}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function (resposta) {
      console.log("ESTOU NO THEN pegarOutrosDados()!");
      console.log(resposta);

      if (resposta.ok) {
        return resposta.json();
      } else {
        console.log("Houve um erro ao buscar os dados");
        return resposta.text();
      }
    })
    .then(function (dados) {
      console.error(dados);
      console.log(dados);
      player1 = dados[0].nickname;
      dadosPlayer1 = dados[0].respostas_certas;
      player2 = dados[1].nickname;
      dadosPlayer2 = dados[1].respostas_certas;
      player3 = dados[2].nickname;
      dadosPlayer3 = dados[2].respostas_certas;
      player4 = dados[3].nickname;
      dadosPlayer4 = dados[3].respostas_certas;
      player5 = dados[4].nickname;
      dadosPlayer5 = dados[4].respostas_certas;
      player6 = dados[5].nickname;
      dadosPlayer6 = dados[5].respostas_certas;
      player7 = dados[6].nickname;
      dadosPlayer7 = dados[6].respostas_certas;
      criarGraficoDados();
    })
    .catch(function (erro) {
      console.log(erro);
    });
}

function criarGraficoDados() {
  const labelsBarra = [
    `${player1}`,
    `${player2}`,
    `${player3}`,
    `${player4}`,
    `${player5}`,
    `${player6}`,
    `${player7}`,
    `${usuario}`,
  ];

  const dataBarra = {
    labels: labelsBarra,
    datasets: [
      {
        label: "Pontuação",
        backgroundColor: "#FF4654",
        hoverBorderColor: "#FFFFFF",
        hoverBackgroundColor: "#FF4654",
        borderWidth: [3, 3, 3, 3, 3, 3, 3, 6],
        borderColor: "#111723",
        data: [
          dadosPlayer1,
          dadosPlayer2,
          dadosPlayer3,
          dadosPlayer4,
          dadosPlayer5,
          dadosPlayer6,
          dadosPlayer7,
          acertos_usuario,
        ],
      },
    ],
  };

  const configBarra = {
    type: "bar",
    data: dataBarra,
    options: {
      scales: {
        y: {
          suggestedMin: 0,
          suggestedMax: 10,
          ticks: {
            color: "white",
            font: {
              size: 13,
            },
          },
          grid: {
            color: "#ff465669",
          },
        },
        x: {
          ticks: {
            color: "white",
            font: {
              size: 13,
            },
          },
          grid: {
            color: "transparent",
          },
        },
      },
      plugins: {
        legend: {
          labels: {
            color: "white",
            font: {
              size: 20,
            },
          },
        },
      },
    },
  };

  const myChartBar = new Chart(
    document.getElementById("myChartBar"),
    configBarra
  );
}

var total = 0;
var uma_estrela = 0;
var duas_estrela = 0;
var tres_estrela = 0;
var quatro_estrela = 0;
var cinco_estrela = 0;
pegarFeedback();
function pegarFeedback() {
  fetch(`/feedback/buscarFeedback`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function (resposta) {
      console.log("ESTOU NO THEN DO saveFeedback()!");
      console.log(resposta);

      if (resposta.ok) {
        console.log(resposta);

        resposta.json().then((json) => {
          console.log(json);
          uma_estrela = Number(json[0].uma_estrelas);
          duas_estrela = Number(json[0].duas_estrelas);
          tres_estrela = Number(json[0].tres_estrelas);
          quatro_estrela = Number(json[0].quatro_estrelas);
          cinco_estrela = Number(json[0].cinco_estrelas);
          total = uma_estrela + duas_estrela + tres_estrela + quatro_estrela + cinco_estrela;
          uma_estrela = (uma_estrela / total * 100).toFixed(0);
          duas_estrela = (duas_estrela / total * 100).toFixed(0);
          tres_estrela = (tres_estrela / total * 100).toFixed(0);
          quatro_estrela = (quatro_estrela / total * 100).toFixed(0);
          cinco_estrela = (cinco_estrela / total * 100).toFixed(0);
          criarGraficosFeedback();
        });
      } else {
        console.log("Houve um erro ao cadastrar feedback");

        resposta.text().then((texto) => {
          console.error(texto);
        });
      }
    })
    .catch(function (erro) {
      console.log(erro);
    });
}

function criarGraficosFeedback() {
  const labelsPie = ["1★", "2★", "3★", "4★", "5★"];

  const dataPie = {
    labels: labelsPie,
    datasets: [
      {
        data: [
          uma_estrela,
          duas_estrela,
          tres_estrela,
          quatro_estrela,
          cinco_estrela,
        ],
        label: "Porcentagem",
        backgroundColor: [
          "#8B0000",
          "#8B4500",
          "#8B8000",
          "#006400",
          "#00008B",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const configPie = {
    type: "pie",
    data: dataPie,
    options: {
      plugins: {
        legend: {
          labels: {
            color: "white",
            font: {
              size: 15,
            },
          },
        },
      },
    },
  };

  const myChartPie = new Chart(
    document.getElementById("myChartPie"),
    configPie
  );
}
