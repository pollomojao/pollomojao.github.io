// Función para mostrar sorpresa
document.getElementById('surpriseBtn').addEventListener('click', function() {
    // Reproducir la canción
    document.getElementById('audio').play();

    // Mostrar el gif
    document.getElementById('gifContainer').style.display = 'block';

  // Cambiar el mensaje
    document.getElementById('message').innerHTML = '🌟 Cuídate mucho, te dejo un miso spicy. 🌟 <br><span id="ramenEmoji">🍜</span>';


    //Cambiar h1
    document.getElementById('title').innerHTML = 'Elfo, lo siento mucho'
    // Cambiar el texto del botón
    this.textContent = '¡Canción otaku!';

    //Mostrar el footer
    document.querySelector('.footer').style.display = 'block';

});
