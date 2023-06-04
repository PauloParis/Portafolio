

// nav transparente al inicio, y cambia de color al bajar
window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  nav.classList.toggle("scrolled", window.scrollY > 0);
});



// cambia de color las opciones del nav al hacer scroll
window.addEventListener("scroll", function () {
  const navLinks = document.querySelectorAll("nav a");
  const sections = document.querySelectorAll("section");
  let currentSectionIndex = 0;
  // Encuentra la sección actualmente visible en la ventana gráfica
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].getBoundingClientRect().top <= window.innerHeight / 2) {
      currentSectionIndex = i;
    }
  }
  // Quita la clase "active" de todas las opciones de navegación y agrega la clase "active" a la opción de navegación correspondiente
  navLinks.forEach((link) => link.classList.remove("active"));
  navLinks[currentSectionIndex].classList.add("active");
  
});



// al hacer click en una opcion del nav collapse al btn
// Obtener todos los elementos del menú
const menuItems = document.querySelectorAll(".nav-item");

// Agregar un eventListener a cada elemento del menú
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Obtener el elemento navbar-collapse
    const navbarCollapse = document.getElementById("navbarNav");
    // Cambiar la clase del elemento navbar-collapse
    navbarCollapse.classList.toggle("show");
  });
});






window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('.showOn');
  const windowHeight = window.innerHeight;
  sections.forEach(function(section) {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < windowHeight) {
      section.style.opacity = 1;
    }
  });
});






/* CV */
const cv = document.getElementById('cv')
cv.addEventListener('click', () => { window.open('https://docs.google.com/document/d/17Jdg6PwiC_dj_DOxx1WRNUoIpqvUAe2a/edit?usp=sharing&ouid=106033632182647737532&rtpof=true&sd=true') })




/* BTN proyect */

// índice de felicidad
const gitFelicidadFront = document.getElementById('gitFelicidadFront');
const gitFelicidadBack = document.getElementById('gitFelicidadBack');
gitFelicidadFront.addEventListener('click', () => window.open("https://github.com/PauloParis/Trabajo-Titulo-Frontend"));
gitFelicidadBack.addEventListener('click', () => window.open("https://github.com/PauloParis/Trabajo-Titulo-Backend"));

// poke-api
const gitPoke = document.getElementById('gitPoke');
const demoPoke = document.getElementById('demoPoke');
gitPoke.addEventListener('click', () => window.open("https://github.com/PauloParis/poke-app-vue-quasar-pinia-axios"));
demoPoke.addEventListener('click', () => window.open("https://pokemon-app-vue-quasar.netlify.app/"));

// chat
const gitChat = document.getElementById('gitChat');
const demoChat = document.getElementById('demoChat');
gitChat.addEventListener('click', () => window.open("https://github.com/PauloParis/RealTime-RoomChat"));
demoChat.addEventListener('click', () => window.open("https://realtime-roomchat.onrender.com/"));

// indicador
const gitIndicador = document.getElementById('gitIndicador');
const demoIndicador = document.getElementById('demoIndicador');
gitIndicador.addEventListener('click', () => window.open("https://github.com/PauloParis/Calendar-primevue-vue-3-boostrap"));
demoIndicador.addEventListener('click', () => window.open("https://calendar-indicador-vue.netlify.app/"));

// short url
const gitFrontUrl = document.getElementById('gitFrontUrl');
const gitBacktUrl = document.getElementById('gitBacktUrl');
const demoUrl = document.getElementById('demoUrl');
gitFrontUrl.addEventListener('click', () => window.open("https://github.com/PauloParis/Vue3-Pinia-JWT-Quasar-shortURL"));
gitBacktUrl.addEventListener('click', () => window.open("https://github.com/PauloParis/API-Rest-Express-Mongo-JWT-shortURL"));
demoUrl.addEventListener('click', () => window.open("https://short-url-vue-quasar-jwt.netlify.app/"));

// QR
const gitQR = document.getElementById('gitQR');
const demoQR = document.getElementById('demoQR');
gitQR.addEventListener('click', () => window.open("https://github.com/PauloParis/Generador-QRCode-Boostrap-JS"));
demoQR.addEventListener('click', () => window.open("https://generator-qrcode-boostrap.netlify.app/"));

// api-paises
const gitPaises = document.getElementById('gitPaises');
const demoPaises = document.getElementById('demoPaises');
gitPaises.addEventListener('click', () => window.open("https://github.com/PauloParis/App-paises-vue-3-vuex-compositionApi-boostrap"));
demoPaises.addEventListener('click', () => window.open("https://app-paises-vue3.netlify.app/"));

// api-digimon
const gitDigimon = document.getElementById('gitDigimon');
const demoDigimon = document.getElementById('demoDigimon');
gitDigimon.addEventListener('click', () => window.open("https://github.com/PauloParis/digimon-api-js-fetch"));
demoDigimon.addEventListener('click', () => window.open("https://digimon-api-js-fetch.netlify.app/"));