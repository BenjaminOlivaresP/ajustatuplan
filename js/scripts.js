

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
if (footer) {
  fetch("componentes/footer.html")
    .then(res => res.text())
    .then(data => {
      footer.innerHTML = data;
    });
}


