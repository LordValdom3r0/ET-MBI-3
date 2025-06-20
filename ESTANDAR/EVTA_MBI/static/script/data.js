// Obtener una referencia al elemento canvas del DOM
const $grafica = document.querySelector("#grafica");
// Las etiquetas son las que van en el eje X. 
const etiquetas = ["Enero", "Febrero", "Marzo", "Abril"]
// Podemos tener varios conjuntos de datos

const datosVentas2018 = {
    label: "Ventas por mes - 2018",
    data: [500, 900, 134, 2000], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(211,93,110, 0.2)',// Color de fondo
    borderColor: 'rgba(211,93,110, 1)',// Color del borde
    borderWidth: 1,// Ancho del borde
};
const datosVentas2019 = {
    label: "Ventas por mes - 2019",
    data: [700, 700, 4500, 2500], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(209,234,163,0.5)',// Color de fondo
    borderColor: 'rgba(209,234,163,1)',// Color del borde
    borderWidth: 1,// Ancho del borde
};
const datosVentas2020 = {
    label: "Ventas por mes - 2020",
    data: [5000, 1500, 8000, 5102], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo
    borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
    borderWidth: 1,// Ancho del borde
};
const datosVentas2021 = {
    label: "Ventas por mes - 2021",
    data: [10000, 1700, 5000, 5989], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(255, 159, 64, 0.2)',// Color de fondo
    borderColor: 'rgba(255, 159, 64, 1)',// Color del borde
    borderWidth: 1,// Ancho del borde
};

new Chart($grafica, {
    type: 'bar',// Tipo de gráfica
    data: {
        labels: etiquetas,
        datasets: [
            datosVentas2018,
            datosVentas2019,
            datosVentas2020,
            datosVentas2021,
            // Aquí más datos...
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
        },
    }
});
/*export default {
    "idle": [
      {
        "cases": 28,
        "date": "2020-01-22T00:00:00Z"
      },
      {
        "cases": 30,
        "date": "2020-01-23T00:00:00Z"
      },
      {
        "cases": 36,
        "date": "2020-01-24T00:00:00Z"
      },
      {
        "cases": 39,
        "date": "2020-01-25T00:00:00Z"
      },
      {
        "cases": 52,
        "date": "2020-01-26T00:00:00Z"
      },
      {
        "cases": 61,
        "date": "2020-01-27T00:00:00Z"
      },
      {
        "cases": 107,
        "date": "2020-01-28T00:00:00Z"
      },
      {
        "cases": 126,
        "date": "2020-01-29T00:00:00Z"
      },
      {
        "cases": 143,
        "date": "2020-01-30T00:00:00Z"
      },
      {
        "cases": 222,
        "date": "2020-01-31T00:00:00Z"
      },
      {
        "cases": 284,
        "date": "2020-02-01T00:00:00Z"
      },
      {
        "cases": 472,
        "date": "2020-02-02T00:00:00Z"
      },
      {
        "cases": 623,
        "date": "2020-02-03T00:00:00Z"
      },
      {
        "cases": 852,
        "date": "2020-02-04T00:00:00Z"
      },
      {
        "cases": 1124,
        "date": "2020-02-05T00:00:00Z"
      },
      {
        "cases": 1488,
        "date": "2020-02-06T00:00:00Z"
      },
      {
        "cases": 2012,
        "date": "2020-02-07T00:00:00Z"
      },
      {
        "cases": 2618,
        "date": "2020-02-08T00:00:00Z"
      },
      {
        "cases": 3245,
        "date": "2020-02-09T00:00:00Z"
      },
      {
        "cases": 3947,
        "date": "2020-02-10T00:00:00Z"
      },
      {
        "cases": 4684,
        "date": "2020-02-11T00:00:00Z"
      },
      {
        "cases": 5158,
        "date": "2020-02-12T00:00:00Z"
      },
      {
        "cases": 6298,
        "date": "2020-02-13T00:00:00Z"
      },
      {
        "cases": 8061,
        "date": "2020-02-14T00:00:00Z"
      },
      {
        "cases": 9398,
        "date": "2020-02-15T00:00:00Z"
      },
      {
        "cases": 10867,
        "date": "2020-02-16T00:00:00Z"
      },
      {
        "cases": 12582,
        "date": "2020-02-17T00:00:00Z"
      },
      {
        "cases": 14351,
        "date": "2020-02-18T00:00:00Z"
      },
      {
        "cases": 16123,
        "date": "2020-02-19T00:00:00Z"
      },
      {
        "cases": 18181,
        "date": "2020-02-20T00:00:00Z"
      },
      {
        "cases": 18894,
        "date": "2020-02-21T00:00:00Z"
      },
      {
        "cases": 22890,
        "date": "2020-02-22T00:00:00Z"
      },
      {
        "cases": 23403,
        "date": "2020-02-23T00:00:00Z"
      },
      {
        "cases": 25244,
        "date": "2020-02-24T00:00:00Z"
      },
      {
        "cases": 27940,
        "date": "2020-02-25T00:00:00Z"
      },
      {
        "cases": 30407,
        "date": "2020-02-26T00:00:00Z"
      },
      {
        "cases": 33309,
        "date": "2020-02-27T00:00:00Z"
      },
      {
        "cases": 36742,
        "date": "2020-02-28T00:00:00Z"
      },
      {
        "cases": 39842,
        "date": "2020-02-29T00:00:00Z"
      },
      {
        "cases": 42752,
        "date": "2020-03-01T00:00:00Z"
      },
      {
        "cases": 45638,
        "date": "2020-03-02T00:00:00Z"
      },
      {
        "cases": 48267,
        "date": "2020-03-03T00:00:00Z"
      },
      {
        "cases": 51209,
        "date": "2020-03-04T00:00:00Z"
      },
      {
        "cases": 53841,
        "date": "2020-03-05T00:00:00Z"
      },
      {
        "cases": 55914,
        "date": "2020-03-06T00:00:00Z"
      },
      {
        "cases": 58402,
        "date": "2020-03-07T00:00:00Z"
      },
      {
        "cases": 60745,
        "date": "2020-03-08T00:00:00Z"
      },
      {
        "cases": 62563,
        "date": "2020-03-09T00:00:00Z"
      },
      {
        "cases": 64477,
        "date": "2020-03-10T00:00:00Z"
      },
      {
        "cases": 67040,
        "date": "2020-03-11T00:00:00Z"
      },
      {
        "cases": 68324,
        "date": "2020-03-12T00:00:00Z"
      },
      {
        "cases": 70252,
        "date": "2020-03-13T00:00:00Z"
      },
      {
        "cases": 72624,
        "date": "2020-03-14T00:00:00Z"
      },
      {
        "cases": 76034,
        "date": "2020-03-15T00:00:00Z"
      },
      {
        "cases": 78088,
        "date": "2020-03-16T00:00:00Z"
      },
      {
        "cases": 80840,
        "date": "2020-03-17T00:00:00Z"
      },
      {
        "cases": 83313,
        "date": "2020-03-18T00:00:00Z"
      },
      {
        "cases": 84962,
        "date": "2020-03-19T00:00:00Z"
      },
      {
        "cases": 87403,
        "date": "2020-03-20T00:00:00Z"
      },
      {
        "cases": 91676,
        "date": "2020-03-21T00:00:00Z"
      },
      {
        "cases": 97996,
        "date": "2020-03-22T00:00:00Z"
      },
      {
        "cases": 100958,
        "date": "2020-03-23T00:00:00Z"
      },
      {
        "cases": 107705,
        "date": "2020-03-24T00:00:00Z"
      },
      {
        "cases": 113770,
        "date": "2020-03-25T00:00:00Z"
      },
      {
        "cases": 122150,
        "date": "2020-03-26T00:00:00Z"
      },
      {
        "cases": 130915,
        "date": "2020-03-27T00:00:00Z"
      }
    ],
    "down": [
      {
        "cases": 17,
        "date": "2020-01-22T00:00:00Z"
      },
      {
        "cases": 18,
        "date": "2020-01-23T00:00:00Z"
      },
      {
        "cases": 26,
        "date": "2020-01-24T00:00:00Z"
      },
      {
        "cases": 42,
        "date": "2020-01-25T00:00:00Z"
      },
      {
        "cases": 56,
        "date": "2020-01-26T00:00:00Z"
      },
      {
        "cases": 82,
        "date": "2020-01-27T00:00:00Z"
      },
      {
        "cases": 131,
        "date": "2020-01-28T00:00:00Z"
      },
      {
        "cases": 133,
        "date": "2020-01-29T00:00:00Z"
      },
      {
        "cases": 171,
        "date": "2020-01-30T00:00:00Z"
      },
      {
        "cases": 213,
        "date": "2020-01-31T00:00:00Z"
      },
      {
        "cases": 259,
        "date": "2020-02-01T00:00:00Z"
      },
      {
        "cases": 362,
        "date": "2020-02-02T00:00:00Z"
      },
      {
        "cases": 426,
        "date": "2020-02-03T00:00:00Z"
      },
      {
        "cases": 493,
        "date": "2020-02-04T00:00:00Z"
      },
      {
        "cases": 565,
        "date": "2020-02-05T00:00:00Z"
      },
      {
        "cases": 635,
        "date": "2020-02-06T00:00:00Z"
      },
      {
        "cases": 720,
        "date": "2020-02-07T00:00:00Z"
      },
      {
        "cases": 807,
        "date": "2020-02-08T00:00:00Z"
      },
      {
        "cases": 907,
        "date": "2020-02-09T00:00:00Z"
      },
      {
        "cases": 1014,
        "date": "2020-02-10T00:00:00Z"
      },
      {
        "cases": 1114,
        "date": "2020-02-11T00:00:00Z"
      },
      {
        "cases": 1120,
        "date": "2020-02-12T00:00:00Z"
      },
      {
        "cases": 1372,
        "date": "2020-02-13T00:00:00Z"
      },
      {
        "cases": 1524,
        "date": "2020-02-14T00:00:00Z"
      },
      {
        "cases": 1667,
        "date": "2020-02-15T00:00:00Z"
      },
      {
        "cases": 1771,
        "date": "2020-02-16T00:00:00Z"
      },
      {
        "cases": 1869,
        "date": "2020-02-17T00:00:00Z"
      },
      {
        "cases": 2008,
        "date": "2020-02-18T00:00:00Z"
      },
      {
        "cases": 2124,
        "date": "2020-02-19T00:00:00Z"
      },
      {
        "cases": 2249,
        "date": "2020-02-20T00:00:00Z"
      },
      {
        "cases": 2253,
        "date": "2020-02-21T00:00:00Z"
      },
      {
        "cases": 2460,
        "date": "2020-02-22T00:00:00Z"
      },
      {
        "cases": 2471,
        "date": "2020-02-23T00:00:00Z"
      },
      {
        "cases": 2631,
        "date": "2020-02-24T00:00:00Z"
      },
      {
        "cases": 2710,
        "date": "2020-02-25T00:00:00Z"
      },
      {
        "cases": 2772,
        "date": "2020-02-26T00:00:00Z"
      },
      {
        "cases": 2816,
        "date": "2020-02-27T00:00:00Z"
      },
      {
        "cases": 2874,
        "date": "2020-02-28T00:00:00Z"
      },
      {
        "cases": 2949,
        "date": "2020-02-29T00:00:00Z"
      },
      {
        "cases": 2998,
        "date": "2020-03-01T00:00:00Z"
      },
      {
        "cases": 3087,
        "date": "2020-03-02T00:00:00Z"
      },
      {
        "cases": 3162,
        "date": "2020-03-03T00:00:00Z"
      },
      {
        "cases": 3256,
        "date": "2020-03-04T00:00:00Z"
      },
      {
        "cases": 3349,
        "date": "2020-03-05T00:00:00Z"
      },
      {
        "cases": 3460,
        "date": "2020-03-06T00:00:00Z"
      },
      {
        "cases": 3558,
        "date": "2020-03-07T00:00:00Z"
      },
      {
        "cases": 3803,
        "date": "2020-03-08T00:00:00Z"
      },
      {
        "cases": 3995,
        "date": "2020-03-09T00:00:00Z"
      },
      {
        "cases": 4259,
        "date": "2020-03-10T00:00:00Z"
      },
      {
        "cases": 4629,
        "date": "2020-03-11T00:00:00Z"
      },
      {
        "cases": 4720,
        "date": "2020-03-12T00:00:00Z"
      },
      {
        "cases": 5404,
        "date": "2020-03-13T00:00:00Z"
      },
      {
        "cases": 5819,
        "date": "2020-03-14T00:00:00Z"
      },
      {
        "cases": 6440,
        "date": "2020-03-15T00:00:00Z"
      },
      {
        "cases": 7126,
        "date": "2020-03-16T00:00:00Z"
      },
      {
        "cases": 7905,
        "date": "2020-03-17T00:00:00Z"
      },
      {
        "cases": 8733,
        "date": "2020-03-18T00:00:00Z"
      },
      {
        "cases": 9867,
        "date": "2020-03-19T00:00:00Z"
      },
      {
        "cases": 11299,
        "date": "2020-03-20T00:00:00Z"
      },
      {
        "cases": 12973,
        "date": "2020-03-21T00:00:00Z"
      },
      {
        "cases": 14636,
        "date": "2020-03-22T00:00:00Z"
      },
      {
        "cases": 16497,
        "date": "2020-03-23T00:00:00Z"
      },
      {
        "cases": 18615,
        "date": "2020-03-24T00:00:00Z"
      },
      {
        "cases": 21181,
        "date": "2020-03-25T00:00:00Z"
      },
      {
        "cases": 23970,
        "date": "2020-03-26T00:00:00Z"
      },
      {
        "cases": 27198,
        "date": "2020-03-27T00:00:00Z"
      }
    ],
    "run": [
      {
        "cases": 556,
        "date": "2020-01-22T00:00:00Z"
      },
      {
        "cases": 657,
        "date": "2020-01-23T00:00:00Z"
      },
      {
        "cases": 945,
        "date": "2020-01-24T00:00:00Z"
      },
      {
        "cases": 1445,
        "date": "2020-01-25T00:00:00Z"
      },
      {
        "cases": 2131,
        "date": "2020-01-26T00:00:00Z"
      },
      {
        "cases": 2941,
        "date": "2020-01-27T00:00:00Z"
      },
      {
        "cases": 5593,
        "date": "2020-01-28T00:00:00Z"
      },
      {
        "cases": 6182,
        "date": "2020-01-29T00:00:00Z"
      },
      {
        "cases": 8252,
        "date": "2020-01-30T00:00:00Z"
      },
      {
        "cases": 9942,
        "date": "2020-01-31T00:00:00Z"
      },
      {
        "cases": 12058,
        "date": "2020-02-01T00:00:00Z"
      },
      {
        "cases": 16808,
        "date": "2020-02-02T00:00:00Z"
      },
      {
        "cases": 19904,
        "date": "2020-02-03T00:00:00Z"
      },
      {
        "cases": 23917,
        "date": "2020-02-04T00:00:00Z"
      },
      {
        "cases": 27666,
        "date": "2020-02-05T00:00:00Z"
      },
      {
        "cases": 30850,
        "date": "2020-02-06T00:00:00Z"
      },
      {
        "cases": 34424,
        "date": "2020-02-07T00:00:00Z"
      },
      {
        "cases": 37155,
        "date": "2020-02-08T00:00:00Z"
      },
      {
        "cases": 40187,
        "date": "2020-02-09T00:00:00Z"
      },
      {
        "cases": 42803,
        "date": "2020-02-10T00:00:00Z"
      },
      {
        "cases": 44854,
        "date": "2020-02-11T00:00:00Z"
      },
      {
        "cases": 45281,
        "date": "2020-02-12T00:00:00Z"
      },
      {
        "cases": 60425,
        "date": "2020-02-13T00:00:00Z"
      },
      {
        "cases": 66944,
        "date": "2020-02-14T00:00:00Z"
      },
      {
        "cases": 69089,
        "date": "2020-02-15T00:00:00Z"
      },
      {
        "cases": 71287,
        "date": "2020-02-16T00:00:00Z"
      },
      {
        "cases": 73321,
        "date": "2020-02-17T00:00:00Z"
      },
      {
        "cases": 75201,
        "date": "2020-02-18T00:00:00Z"
      },
      {
        "cases": 75705,
        "date": "2020-02-19T00:00:00Z"
      },
      {
        "cases": 76268,
        "date": "2020-02-20T00:00:00Z"
      },
      {
        "cases": 76915,
        "date": "2020-02-21T00:00:00Z"
      },
      {
        "cases": 78669,
        "date": "2020-02-22T00:00:00Z"
      },
      {
        "cases": 79060,
        "date": "2020-02-23T00:00:00Z"
      },
      {
        "cases": 79647,
        "date": "2020-02-24T00:00:00Z"
      },
      {
        "cases": 80514,
        "date": "2020-02-25T00:00:00Z"
      },
      {
        "cases": 81485,
        "date": "2020-02-26T00:00:00Z"
      },
      {
        "cases": 82857,
        "date": "2020-02-27T00:00:00Z"
      },
      {
        "cases": 84306,
        "date": "2020-02-28T00:00:00Z"
      },
      {
        "cases": 86865,
        "date": "2020-02-29T00:00:00Z"
      },
      {
        "cases": 88441,
        "date": "2020-03-01T00:00:00Z"
      },
      {
        "cases": 90379,
        "date": "2020-03-02T00:00:00Z"
      },
      {
        "cases": 92903,
        "date": "2020-03-03T00:00:00Z"
      },
      {
        "cases": 95154,
        "date": "2020-03-04T00:00:00Z"
      },
      {
        "cases": 97886,
        "date": "2020-03-05T00:00:00Z"
      },
      {
        "cases": 101754,
        "date": "2020-03-06T00:00:00Z"
      },
      {
        "cases": 105748,
        "date": "2020-03-07T00:00:00Z"
      },
      {
        "cases": 109686,
        "date": "2020-03-08T00:00:00Z"
      },
      {
        "cases": 113386,
        "date": "2020-03-09T00:00:00Z"
      },
      {
        "cases": 118368,
        "date": "2020-03-10T00:00:00Z"
      },
      {
        "cases": 126766,
        "date": "2020-03-11T00:00:00Z"
      },
      {
        "cases": 128343,
        "date": "2020-03-12T00:00:00Z"
      },
      {
        "cases": 145226,
        "date": "2020-03-13T00:00:00Z"
      },
      {
        "cases": 156100,
        "date": "2020-03-14T00:00:00Z"
      },
      {
        "cases": 167447,
        "date": "2020-03-15T00:00:00Z"
      },
      {
        "cases": 181546,
        "date": "2020-03-16T00:00:00Z"
      },
      {
        "cases": 197168,
        "date": "2020-03-17T00:00:00Z"
      },
      {
        "cases": 214915,
        "date": "2020-03-18T00:00:00Z"
      },
      {
        "cases": 242713,
        "date": "2020-03-19T00:00:00Z"
      },
      {
        "cases": 272167,
        "date": "2020-03-20T00:00:00Z"
      },
      {
        "cases": 304528,
        "date": "2020-03-21T00:00:00Z"
      },
      {
        "cases": 336093,
        "date": "2020-03-22T00:00:00Z"
      },
      {
        "cases": 378287,
        "date": "2020-03-23T00:00:00Z"
      },
      {
        "cases": 417966,
        "date": "2020-03-24T00:00:00Z"
      },
      {
        "cases": 467594,
        "date": "2020-03-25T00:00:00Z"
      },
      {
        "cases": 529591,
        "date": "2020-03-26T00:00:00Z"
      },
      {
        "cases": 593291,
        "date": "2020-03-27T00:00:00Z"
      }
    ]
  }*/