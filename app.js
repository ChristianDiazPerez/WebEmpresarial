//BARRA NAVEGACION. En desarrollo!!

document.addEventListener('DOMContentLoaded', () => {
  if (window.location.href.includes('index.html')) {
    const elemento = document.getElementById('enlace_2'); // Selecciona el elemento con el ID 'holahola'
    
    // Cambia el color de fondo del elemento
    if (elemento) {
      elemento.style.backgroundColor = '#F2AC29'; // Cambia el color de fondo a gris oscuro
    } else {
      console.log("Elemento no encontrado.");
    }
  }
});

//CABECERA PEGAJOSA. En desarrollo!!
var header = document.getElementById('Header')

window.addEventListener("scroll", function(){
    var scroll = window.scrollY;
    if(scrollY>0){
        header.style.backgroundColor = '#121212';

    }
    else{
        header.style.backgroundColor = 'transparent';
    }

})

//LIGH BOX
const images = document.querySelectorAll("img[data-lightbox]");

if (images) {
  // Load the lightbox
  const lightbox = document.createElement("div");
  lightbox.classList.add("lightbox");
  document.body.appendChild(lightbox);

  // Load the close button
  const lightboxCloseButton = document.createElement("button");
  lightboxCloseButton.classList.add("lightbox__close");
  lightboxCloseButton.innerHTML = "X";

  images.forEach((image) => {
    image.addEventListener("click", (e) => {
      lightbox.classList.add("active");
      const img = document.createElement("img");
      img.src = image.src;
      while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild);
      }
      lightbox.appendChild(img);
      lightbox.appendChild(lightboxCloseButton);
      // Add a class to body
      document.body.classList.add("overflow-hidden");
    });
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target !== e.currentTarget) return;
    lightbox.classList.remove("active");
    document.body.classList.remove("overflow-hidden");
  });

  lightboxCloseButton.addEventListener("click", (e) => {
    lightbox.classList.remove("active");
    document.body.classList.remove("overflow-hidden");
  });
}
