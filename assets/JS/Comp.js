const typed = document.querySelector(".type");

new Typewriter(typed, {
  loop: true,
  deleteSpeed: 15,
})
  .changeDelay(30)
  .typeString("<strong>→ LAMP sous Linux<br></strong>")
  .pauseFor(300)
  .typeString("<strong>→ Serveur DNS (MultiSite)<br></strong>")
  .pauseFor(300)
  .typeString("<strong>→ NAS openMédiaVault<br></strong>")
  .pauseFor(300)
  .typeString("<strong>→ Configuration de routeurs et de commutateurs<br></strong>")
  .pauseFor(300)
  .typeString("<strong>→ Gestion de commutateurs réseau<br></strong>")
  .pauseFor(300)
  .typeString("<strong>→ Déploiement FOG<br></strong>")
  .pauseFor(300)
  .typeString("<strong>→ Utilisation du conteneurs Docker<br></strong>")
  .pauseFor(300)
  .typeString("<strong>→ Utilisation du pare-feu PFsense<br></strong>")
  .pauseFor(300)
  .typeString("<strong>→ Gestion des actifs informatiques GLPI<br></strong>")
  .pauseFor(300)
  .typeString("<strong>   thanks for reading</strong>")
  .pauseFor(3000)
  .start();
