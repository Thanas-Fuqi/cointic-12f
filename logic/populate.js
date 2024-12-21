document.addEventListener("DOMContentLoaded", () => {
  // Loop through each object in the data array
  data.forEach((state, i) => {
    // Create a new div with class "border-box"
    const borderBox = document.createElement("div");
    borderBox.classList.add("border-box");
    borderBox.style.borderColor = state.color;

    // Create a span with class "border-text"
    const borderText = document.createElement("span");
    borderText.classList.add("border-text");
    borderText.innerHTML = state.country;
    borderText.style.color = state.color;
    borderBox.appendChild(borderText);

    // Loop through each object in the coins array
    state.coins.forEach((_, j) => {
      // Create a new div with class "section"
      const section = document.createElement("div");
      section.classList.add("section");

      // Create the first image
      const imgA = document.createElement("img");
      imgA.alt = "Placeholder Image";
      imgA.classList.add("a");
      imgA.src = `./coin_img/${i}c${j}a.png`;
      section.appendChild(imgA);

      // Create the second image
      const imgB = document.createElement("img");
      imgB.alt = "Placeholder Image";
      imgB.classList.add("b");
      imgB.src = `./coin_img/${i}c${j}b.png`;
      section.appendChild(imgB);

      // Create a span with class "section-content"
      const sectionContent = document.createElement("span");
      sectionContent.classList.add("section-content");  // Setting the class
      sectionContent.textContent = state.name[j];  // Setting the text content
      section.appendChild(sectionContent);

      // Append section to the container
      borderBox.appendChild(section);
    });

    // Add country section to body of document
    document.body.appendChild(borderBox);
  });
});