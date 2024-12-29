// Function to make each number circle
function createNum(key, i, text, infoSection) {
  // Create the section that is going to keep the number
  const numberCircle = document.createElement("div");
  numberCircle.classList.add("number-circle-2");

  // Change the information when clicked
  numberCircle.onclick = () => {
    infoSection.innerHTML = "";
    infoSection.innerHTML = text;
  }

  // Configure the section
  numberCircle.innerHTML = i + 1;
  numberCircle.style.top = `${coordinates[key - 1][0]}px`;
  numberCircle.style.left = `${coordinates[key - 1][1]}px`;
  return numberCircle // Return the div for usage
}

// Function to show the coin that was clicked
function renderSecondScreen(country, i) {
  // Get the screen to populate each respectively
  const secondScreen = document.querySelector(".second-screen");
  const firstScreen = document.querySelector(".first-screen");

  // Create the coin image section and add it to the screen
  const coinSection = document.createElement("div");
  coinSection.classList.add("coin-section-2");

  // Return to the other page button
  const backButton = document.createElement("img");
  backButton.alt = "Back Button";
  backButton.classList.add("back-button-2");
  backButton.src = "./page2_code/back_img.png";

  // Return back to the first screen when the back is clicked
  backButton.onclick = () => {
    secondScreen.style.display = "none";
    firstScreen.style.display = "flex";
  }

  // Invert colors to show the white button instead of the black one
  if (getComputedStyle(document.documentElement).getPropertyValue('--primary-bg').trim() === "#121212") {
    backButton.style.filter = "invert(100%)"; // Invert based of the background color
  }

  // Create the coin name and add a class for styles
  const coinName = document.createElement("span");
  coinName.classList.add("coin-name-2");
  coinName.textContent = country.name[i];

  // Create the information section
  const infoSection = document.createElement("div");
  infoSection.classList.add("info-section-2");
  infoSection.innerHTML = defaultInformation;

  // Create the coin image to put the numbers on
  const coinImage = document.createElement("img");
  coinImage.alt = "Coin Image";
  coinImage.classList.add("coin-image-2");
  coinImage.src = `./coin_img/${country.code}/${i}a.png`;

  // Create the section to put all the numbers
  const numberSection = document.createElement("div");
  numberSection.classList.add("number-section-2");

  // Create number circle from the data
  Object.keys(country.coins[i][0]).forEach((key, j) => {
    const infoText = JSON.stringify(j + 1) + " => " + country.coins[i][0][key];
    numberSection.appendChild(createNum(parseInt(key), j, infoText, infoSection));
  });

  // Change to the other image if clicked
  coinImage.onclick = () => {
    // The flip of coin logic ... ... ...
    const isA = coinImage.src[coinImage.src.length - 5] === "a";

    // Re-populate the numbers based on the side
    numberSection.innerHTML = ""; // Clears previous data
    infoSection.innerHTML = defaultInformation; // Clears it
    Object.keys(country.coins[i][isA ? 1 : 0]).forEach((key, j) => {
      const infoText = JSON.stringify(j + 1) + " => " + country.coins[i][isA ? 1 : 0][key];
      numberSection.appendChild(createNum(parseInt(key), j, infoText, infoSection));
    });

    // Change the side of the current coin image
    coinImage.src = `./coin_img/${country.code}/${i}${isA ? "b" : "a"}.png`;
  };

  // Get the section and populate with objects
  coinSection.appendChild(backButton);
  coinSection.appendChild(coinName);

  coinSection.appendChild(coinImage);
  coinSection.appendChild(numberSection);

  coinSection.appendChild(infoSection);
  secondScreen.appendChild(coinSection);
}