// Function to make each number circle
function createNum(i, j) {
  // Create the section that is going to keep the number
  const numberCircle = document.createElement("div");
  numberCircle.classList.add("number-circle-2");

  // Configure the section
  numberCircle.innerHTML = j + 1;
  numberCircle.style.top = `${coordinates[i - 1][0]}px`;
  numberCircle.style.left = `${coordinates[i - 1][1]}px`;
  return numberCircle // Return the div for usage
}

// Function to show the coin that was clicked
function renderSecondScreen(country, i) {
  // Create the coin image section and add it to the screen
  const secondScreen = document.querySelector(".second-screen");
  const coinSection = document.createElement("div");
  coinSection.classList.add("coin-section-2");

  // Create the coin name and add a class for styles
  const coinName = document.createElement("span");
  coinName.classList.add("coin-name-2");
  coinName.textContent = country.name[i];

  // Create the front side of coin image
  const coinImage = document.createElement("img");
  coinImage.alt = "Coin Image";
  coinImage.classList.add("coin-image-2");
  coinImage.src = `./coin_img/${country.code}/${i}a.png`;

  //// Change to the other image if clicked
  //coinImage.onclick = () => {
  //  // The flip of coin logic ... ... ...
  //  coinImage.src = `./coin_img/${country.code}/${i}${coinImage.src.includes("a") ? "b" : "a"}.png`;
  //}

  // Create the section to put all the numbers
  const numberSection = document.createElement("div");
  numberSection.classList.add("number-section-2");

  // Create every number circle from the database
  Object.keys(country.coins[i][0]).forEach((key, j) => {
    numberSection.appendChild(createNum(parseInt(key), j));
  });

  // Get the section and populate with objects
  coinSection.appendChild(coinName);
  coinSection.appendChild(coinImage);
  coinSection.appendChild(numberSection);
  secondScreen.appendChild(coinSection);
}