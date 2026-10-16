// ===============================
// COLORES ISAPRES
// ===============================

const coloresIsapres = {
  consalud: '#10b981',
  banmedica: '#06b6d4',
  cruzblanca: '#6366f1',
  colmena: '#0d9488',
  vidatres: '#3b82f6',
  nuevamasvida: '#059669'
};


// ===============================
// GRAFICO 1 - EVOLUCION GES
// ===============================

const ctx1 = document.getElementById('graficoGES')?.getContext('2d');

if(ctx1){
new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['2006','2007','2010','2013','2016','2019','2021','2025','2026'],
        datasets: [{
            label: 'N° Patologías cubiertas',
            data: [25, 40, 56, 69, 80, 80, 85, 87, 90],
            borderWidth: 2,
            tension: 0.4,
            fill: false,
            pointRadius: 4
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});
}


// ===============================
// GRAFICO 2 - DISTRIBUCION ISAPRES
// ===============================

const ctx2 = document.getElementById('chart2')?.getContext('2d');

if(ctx2){
new Chart(ctx2, {
  type: 'doughnut',
  data: {
    labels: ['Colmena', 'Banmedica', 'Consalud', 'Cruz Blanca', 'Otras'],
    datasets: [{
      data: [23, 22.8, 18.5, 14.4, 21.3],
      backgroundColor: [
        coloresIsapres.colmena,
        coloresIsapres.banmedica,
        coloresIsapres.consalud,
        coloresIsapres.cruzblanca,
        '#94a3b8'
      ]
    }]
  },
  options: {
    responsive: true,
    cutout: '50%',
    animation: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          padding: 10,
          boxWidth: 18,
          font: { size: 12 }
        }
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return context.label + ': ' + context.raw + '%';
          }
        }
      }
    }
  }
});
}


// ===============================
// GRAFICO 3 - PRIMA GES
// ===============================

const ctx3 = document.getElementById('graficoValores')?.getContext('2d');

if(ctx3){
new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: ['Banmédica','Vida Tres','Nueva Másvida','Colmena','Consalud','Cruz Blanca'],
        datasets: [{
            label: 'Prima GES referencial (UF por beneficiario)',
            data: [0.778, 0.712, 0.854, 1.036, 0.781, 0.971],
            backgroundColor: [
              coloresIsapres.banmedica,
              coloresIsapres.vidatres,
              coloresIsapres.nuevamasvida,
              coloresIsapres.colmena,
              coloresIsapres.consalud,
              coloresIsapres.cruzblanca
            ],
            borderRadius: 3,
            borderSkipped: false
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: 'UF mensuales'
                }
            }
        }
    }
});
}


// ===============================
// ANIMACION SCROLL
// ===============================

function revealOnScroll() {

  const reveals = document.querySelectorAll(".reveal:not(.active)");

  reveals.forEach((element) => {

    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 120;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }

  });

}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


// ===============================
// BOTON SUGERENCIAS
// ===============================

const suggestionBtn = document.getElementById('suggestionBtn');
const suggestionForm = document.getElementById('suggestionForm');

if(suggestionBtn && suggestionForm){

suggestionBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  suggestionForm.style.display =
  suggestionForm.style.display === 'flex' ? 'none' : 'flex';
});

suggestionForm.addEventListener('click', (e) => e.stopPropagation());

document.addEventListener('click', () => {
  suggestionForm.style.display = 'none';
});

}


// ===============================
// CARGAR FOOTER COMPONENTE
// ===============================

const footer = document.getElementById("footer");

if(footer){
fetch("componentes/footer.html")
.then(res => res.text())
.then(data => {
footer.innerHTML = data;
});
}

