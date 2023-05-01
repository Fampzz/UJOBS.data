// Seleciona o botão "Login"
var dropdownBtn = document.querySelector(".dropbtn");

// Seleciona o conteúdo do dropdown
var dropdownContent = document.querySelector(".dropdown-content");

// Adiciona um evento de clique ao botão "Login"
dropdownBtn.addEventListener("click", function() {
  // Verifica se o conteúdo do dropdown está visível
  if (dropdownContent.style.display === "block") {
    // Se estiver visível, oculta-o
    dropdownContent.style.display = "none";
  } else {
    // Se estiver oculto, exibe-o
    dropdownContent.style.display = "block";
  }
});