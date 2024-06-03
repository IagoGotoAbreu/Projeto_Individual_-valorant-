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
  window.location.href = "../index.html";
}

const kpiRadiante = document.getElementById("kpiRadiante");
const kpiTempo = document.getElementById("kpiTempo");

const usuario = sessionStorage.NOME_USUARIO;
menuNickname.innerHTML = usuario;

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


// function pegarAcertos() {

// }


const labelsBarra = [
  `P1`,
  `P2`,
  `P3`,
  `P4`,
  `P5`,
  `P6`,
  `P7`,
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
      data: [2, 2, 2, 2, 2, 2, 2, 4],
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
            size: 15,
          },
        },
      },
    },
  },
};

const myChartPie = new Chart(document.getElementById("myChartPie"), configPie);

window.addEventListener("load", () => {
  pegarKpi();
  // pegarAcertos();
});
