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

function createCard() {
  const divCard = document.createElement("div");

  const divAnuncio = document.createElement("div");
  divAnuncio.classList.add("card-anuncio");

  const imgCard = document.createElement("img");
  imgCard.classList.add("img-card");
  imgCard.setAttribute("src", "./assets/ProfilePics/user1.jpg");
  divAnuncio.appendChild(imgCard);

  const divDadosCard = document.createElement("div");
  divDadosCard.classList.add("dados-card");

  const nomeCard = document.createElement("p");
  nomeCard.classList.add("nome-card");
  nomeCard.innerText = "Itachi uchiha";
  divDadosCard.appendChild(nomeCard);

  const cargoCard = document.createElement("p");
  cargoCard.classList.add("cargo-card");
  cargoCard.innerText = "Designer";
  divDadosCard.appendChild(cargoCard);

  const divClassificacao = document.createElement("div");
  divClassificacao.classList.add("classificacao");

  for (let i = 0; i < 2; i++) {
    const imgStarFill = document.createElement("img");
    imgStarFill.setAttribute("src", "./assets/Avaliationstars/star-fill.svg");
    divClassificacao.appendChild(imgStarFill);
  }

  const imgStarHalf = document.createElement("img");
  imgStarHalf.setAttribute("src", "./assets/Avaliationstars/star-half.svg");
  divClassificacao.appendChild(imgStarHalf);

  for (let i = 0; i < 2; i++) {
    const imgStar = document.createElement("img");
    imgStar.setAttribute("src", "./assets/Avaliationstars/star.svg");
    divClassificacao.appendChild(imgStar);
  }

  divDadosCard.appendChild(divClassificacao);

  const localizacao = document.createElement("p");
  localizacao.classList.add("localizacao");
  localizacao.innerText = "Konoha";
  divDadosCard.appendChild(localizacao);

  divAnuncio.appendChild(divDadosCard);

  const divCardContato = document.createElement("div");
  divCardContato.classList.add("card-contato");

  const btnContrate = document.createElement("button");
  btnContrate.classList.add("btns");
  btnContrate.classList.add("btns-card");
  btnContrate.innerText = "Contrate";
  divCardContato.appendChild(btnContrate);

  const textCardContato = document.createElement("p");
  textCardContato.classList.add("text-card-contato");
  textCardContato.innerText = "Preço por hora:";
  divCardContato.appendChild(textCardContato);

  const priceCardContato = document.createElement("p");
  priceCardContato.classList.add("price-card-contato");
  priceCardContato.innerText = "R$ 100,00";
  divCardContato.appendChild(priceCardContato);

  divAnuncio.appendChild(divCardContato);

  divCard.appendChild(divAnuncio);

  return divCard;
}

for(let i=0; i<20;i++){
  const myContainer = document.querySelector("#anunciosID");
  myContainer.appendChild(createCard());
}