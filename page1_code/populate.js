document.addEventListener("DOMContentLoaded", () => {
  // Get the screens to populate with the corresponding data
  const firstScreen = document.querySelector(".first-screen");
  const secondScreen = document.querySelector(".second-screen");

  // If in a desktop enable animation
  if (window.innerWidth >= 1024) {
    firstScreen.classList.add("hoverable");
  }

  // Loop through each state in the data array
  data.forEach(country => {
    // Create each country border div
    const countryBox = document.createElement("div");
    countryBox.classList.add("country-box");
    countryBox.style.borderColor = country.color;

    // Create the country name with the corresponding color
    const countryText = document.createElement("span");
    countryText.classList.add("country-text");
    countryText.innerHTML = country.country;
    countryText.style.color = country.color;
    countryBox.appendChild(countryText);

    // Loop through each coin of each country
    country.coins.forEach((_, j) => {
      // Create a section for each coin
      const coinSection = document.createElement("div");
      coinSection.classList.add("coin-section");

      // If in a desktop enable click
      if (window.innerWidth >= 1024) {
        // Clear everything and draw next screen when clicked
        coinSection.onclick = () => {
          firstScreen.style.display = "none";
          secondScreen.style.display = "flex";
          renderSecondScreen(country, j);
        }
      }

      // Create the coin name and add a class for styles
      const coinName = document.createElement("span");
      coinName.classList.add("coin-name");
      coinName.textContent = country.name[j];
      coinSection.appendChild(coinName);

      // Create the front side of coin image
      const front = document.createElement("img");
      front.alt = "Front Side";
      front.classList.add("front");
      front.src = `./coin_img/${country.code}/${j}a.png`;
      coinSection.appendChild(front);

      // Create the back side of coin image
      const back = document.createElement("img");
      back.alt = "Back Side";
      back.classList.add("back");
      back.src = `./coin_img/${country.code}/${j}b.png`;
      coinSection.appendChild(back);

      // Add the coin section to the country section
      countryBox.appendChild(coinSection);
    });

    // Add country section to body of document
    firstScreen.appendChild(countryBox);
  });
});