const typed = document.querySelector(".type");

new Typewriter(typed, {
  loop: true,
  deleteSpeed: 10,
})
  .changeDelay(20)
  .typeString("<strong>Je m'appelle Hugo Menial, je suis titulaire d’un Baccalauréat STI2D<br> Je poursuis mes études actuellement en dexième année de BTS<br> Services informatiques aux organisations en option SISR au Lycée Saint-Luc à Cambrai. <br><br>Dynamique et courageux, je suis déterminé à me former rapidement et efficacement.</strong>")
  .pauseFor(7000)
  .start();
