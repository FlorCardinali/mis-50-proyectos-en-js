document.addEventListener('DOMContentLoaded', () => {
    const imagen = document.querySelectorAll('.image-container img');
    images.forEach(function(img) {
      img.onload = function() {
        img.classList.add('loaded');
      }
    });
  });