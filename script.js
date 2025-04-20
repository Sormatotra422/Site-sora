const boutonCompte = document.getElementById("toggle-compte");
const sousMenu = document.getElementById("sous-menu-compte");

boutonCompte.addEventListener("click", function(event) {
  event.preventDefault(); // Empêche le lien de recharger la page
  sousMenu.classList.toggle("show"); // Affiche ou cache le sous-menu
});
<script>
  function afficherPub() {
    var pubDiv = document.getElementById("pub-content");
    pubDiv.style.display = "block";
  }
</script>
