function quiz() {
  window.location.href = "../dashboard/quiz.html";
}

function sair() {
  window.location.href = "../index.html";
}

const kpiRadiante = document.getElementById("kpiRadiante");
const kpiTempo = document.getElementById("kpiTempo");

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

function pegarAcertos() {}

const usuario = sessionStorage.NOME_USUARIO;
menuNickname.innerHTML = usuario;

/* Gráfico de Barra */

const labelsBarra = [
  "Player 1",
  "Player 2",
  "Player 3",
  "Player 4",
  "Player 5",
  "Player 6",
  "Player 7",
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
      data: [1, 7, 2, 4, 6, 5, 1, 3, 2],
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

const labelsPie = ["1★", "2★", "3★", "4★", "5★"];

const dataPie = {
  labels: labelsPie,
  datasets: [
    {
      data: [2, 3, 3, 5, 4],
      label: "Porcentagem",
      backgroundColor: ["#FF4654", "#3b0780", "#FFCC00", "#AE6427", "#4B97D2"],
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
            size: 20,
          },
        },
      },
    },
  },
};

const myChartPie = new Chart(document.getElementById("myChartPie"), configPie);

window.addEventListener("load", () => {
  pegarKpi();
  // getRankingQuestionError();
  // getFeedbackStarsCount();
});
