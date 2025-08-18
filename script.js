let currentIndex = 0;

document.querySelector('.prev-button').addEventListener('click', () => {
    navigate(-1);
});

document.querySelector('.next-button').addEventListener('click', () => {
    navigate(1);
});

function navigate(direction) {
    const galleryContainer = document.querySelector('.gallery-container');
    const totalImages = document.querySelectorAll('.gallery-item').length;
    
    currentIndex = (currentIndex + direction + totalImages) % totalImages;
    const offset = -currentIndex * 100;
    
    galleryContainer.style.transform = `translateX(${offset}%)`;
}

//AUTOPLAY
let autoplayInterval = null;

function startAutoplay(interval) {
    stopAutoplay();  // Detiene cualquier autoplay anterior para evitar múltiples intervalos.
    autoplayInterval = setInterval(() => {
        navigate(1);  // Navega a la siguiente imagen cada intervalo de tiempo.
    }, interval);
}

function stopAutoplay() {
    clearInterval(autoplayInterval);
}

// Iniciar autoplay con un intervalo de 3 segundos.
startAutoplay(3000);

// Opcional: Detener autoplay cuando el usuario interactúa con los botones de navegación.
document.querySelectorAll('.nav-button').forEach(button => {
    button.addEventListener('click', stopAutoplay);
});



var origins = document.querySelectorAll("button[data-origin]");

for (let i = 0; i < origins.length; i++) {
  origins[i].addEventListener('click', function(e) {
      // Get all elements with data-origin defined
      var allOrigins = document.querySelectorAll("*[data-origin]");             
      for (i = 0; i < allOrigins.length; i++) {
          allOrigins[i].classList.remove("active");
      }
      
      // Get all elements with data-target defined
      var allTargets = document.querySelectorAll("*[data-target]");
      for (i = 0; i < allTargets.length; i++) {
          allTargets[i].style.display = "none";
      }
      
      //Only get elements of which the data-target attribute matches the value of the data-origin of the clicked  element
      var targets = document.querySelectorAll("*[data-target='"+e.target.dataset.origin+"']");   
      for (i = 0; i < targets.length; i++) {
          targets[i].style.display = "block";      
      }
      
      e.target.classList.add("active");
  });
}