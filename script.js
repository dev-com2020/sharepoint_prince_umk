function toggleSection(header) {
    const content = header.nextElementSibling;
    const button = header.querySelector(".toggle-btn");
  
    if (content.style.display === "block") {
      content.style.display = "none";
      button.textContent = "Rozwiń";
    } else {
      content.style.display = "block";
      button.textContent = "Zwiń";
    }
  }
  