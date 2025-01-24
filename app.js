//BARRA NAVEGACION. En desarrollo!!

document.addEventListener('DOMContentLoaded', () => {
//Al encontrarnos en:
  //index 
    if (window.location.href.includes('index.html')) {
      const elemento1 = document.getElementById('enlace_1');
      const parrafo1 = elemento1.querySelector('p'); 
      
      if (elemento1) {
        elemento1.style.backgroundColor = '#1A3C69'; //Color del boton
        parrafo1.style.color = '#FFFFFF'; // color del texto

      } else {
        console.log("Elemento no encontrado.");
      }
    }

   //Portafolio  
    if (window.location.href.includes('portafolio.html')) {
      const elemento2 = document.getElementById('enlace_2'); 
      const parrafo2 = elemento2.querySelector('p'); 
      
      if (elemento2) {
        elemento2.style.backgroundColor = '#1A3C69'; //Color del boton
        parrafo2.style.color = '#FFFFFF'; // color del texto
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
