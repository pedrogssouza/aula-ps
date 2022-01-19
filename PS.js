function coffeeCard(name, intensity, price, description, photo) {
  const capsuleContainer = document.createElement("div");
  const capsuleName = document.createElement("h2");
  const capsulePhoto = document.createElement("img");
  const capsuleDescription = document.createElement("p");
  const capsuleIntensity = document.createElement("p");
  const capsuleInnerContainer = document.createElement("div");
  const capsulePrice = document.createElement("p");
  const capsuleButton = document.createElement("button");

  capsuleName.innerText = name;
  capsuleDescription.innerText = description;
  capsuleIntensity.innerText = "Intensidade: " + intensity;
  capsulePrice.innerText = "R$" + price;
  capsulePhoto.src = photo;
  capsuleButton.innerHTML = "Comprar";

  capsuleContainer.classList.add("capsule-container");
  capsuleName.classList.add("capsule-name");
  capsulePhoto.classList.add("capsule-photo");
  capsuleDescription.classList.add("capsule-description");
  capsuleIntensity.classList.add("capsule-intensity");
  capsuleInnerContainer.classList.add("capsule-inner-container");
  capsulePrice.classList.add("capsule-price");
  capsuleButton.classList.add("capsule-button");

  const capsuleWrapper = document.querySelector(".wrapper");

  capsuleWrapper.appendChild(capsuleContainer);

  capsuleContainer.appendChild(capsuleName);
  capsuleContainer.appendChild(capsulePhoto);
  capsuleContainer.appendChild(capsuleDescription);
  capsuleContainer.appendChild(capsuleIntensity);
  capsuleContainer.appendChild(capsuleInnerContainer);

  capsuleInnerContainer.appendChild(capsulePrice);
  capsuleInnerContainer.appendChild(capsuleButton);
}

async function getData() {
  const response = await fetch(
    "https://entregavel.polijrinternal.com/produtos"
  );

  const produtos = await response.json();

  console.log(produtos);
  const { nome, intensidade, preco, descricao, foto } = produtos[0];
  coffeeCard(nome, intensidade, preco, descricao, foto);
}

getData();
