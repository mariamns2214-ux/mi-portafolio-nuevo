import gsap from "https://esm.sh/gsap@3.11.0";
import { ScrollTrigger } from "https://esm.sh/gsap@3.11.0/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CONFIG = {
  items: 4,
  gap: 0.1,
  buff: 2,
  animate: true,
  scroll: true,
  masklower: 0.9,
  maskupper: 1.8,
  perspective: 320,
  rotatex: 0,
  rotatez: 0,
};

const MAIN = document.querySelector(".carrusel-sobre-mi");

const generateItems = () => {
  const items = [];
  const controllers = [];

  const imagenes = [
    "imagenes/interfaces de color.jpg",
    "imagenes/barner publicitario.jpg",
    "imagenes/diseño videojuegos.jpg",
    "imagenes/barner publicitario2.png"
  ];

  for (let i = 0; i < CONFIG.items; i++) {
    items.push(`
      <li style="--index: ${i};">
        <img src="${imagenes[i]}" alt="Imagen ${i + 1}" />
      </li>
    `);
    controllers.push("<li></li>");
  }

  return {
    items: items.join(""),
    controllers: controllers.join("")
  };
};

const render = () => {
  const { controllers, items } = generateItems();
  MAIN.innerHTML = `
    <div class="container" style="--total: ${CONFIG.items};">
      <div class="carousel-container">
        <ul class="carousel">${items}</ul>
      </div>
      <ul class="controller">${controllers}</ul>
    </div>
  `;
};

render();

if (!CSS.supports("animation-timeline: scroll()") && CONFIG.scroll) {
  gsap.set([".carousel"], { animation: "none", "--rotate": 0 });
  gsap.to(".carousel", {
    rotateY: -360,
    "--rotate": 360,
    ease: "none",
    scrollTrigger: {
      horizontal: true,
      scroller: ".controller",
      scrub: true
    }
  });
}

// 💜 Código del visor de imágenes (sin etiquetas <script>)
const visor = document.getElementById("visor");
const visorImg = document.getElementById("visor-img");
const cerrar = document.querySelector(".cerrar");

document.querySelectorAll(".cinta img").forEach(img => {
  img.addEventListener("click", () => {
    visor.style.display = "flex";
    visorImg.src = img.src;
  });
});

cerrar.addEventListener("click", () => {
  visor.style.display = "none";
});

visor.addEventListener("click", (e) => {
  if (e.target === visor) {
    visor.style.display = "none";
  }
});

// Generador automático de luciérnagas para la sección de proyectos

document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.querySelector('.particulas');

  if (!contenedor) return;

  const cantidad = 40;

  for (let i = 0; i < cantidad; i++) {
    const span = document.createElement('span');
    span.classList.add('particula-proyecto');

    span.style.top = Math.random() * 100 + '%';
    span.style.left = Math.random() * 100 + '%';

    const size = Math.random() * 6 + 3;
    span.style.width = size + 'px';
    span.style.height = size + 'px';

    const colores = ['#00c8ff', '#a855f7', '#008cff'];
    const color = colores[Math.floor(Math.random() * colores.length)];

    span.style.background = color;
    span.style.boxShadow = `0 0 12px ${color}`;

    contenedor.appendChild(span);
  }
});


