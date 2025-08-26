// Skapa array med namn (steg 1 i uppgiften)
let people = ["Anna", "Siri", "Jona", "Mia", "Omar"];

// RÖR EJ DENNA RAD – skriv bara logik inuti funktionen
export function initSearch(people) {
  // Hämta HTML-element
  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");
  const resultDisplay = document.getElementById("resultDisplay");

  // Klick-händelse på Sök-knappen
  searchBtn.addEventListener("click", () => {
    // 1. Hämta texten
    const name = searchInput.value.trim();

    // 2. Boolean för hittad/inte hittad
    let found = false;

    // 3. Loopa igenom people-arrayen
    for (const person of people) {
      // 4. Jämför (case-insensitive)
      if (person.toLowerCase() === name.toLowerCase()) {
        // 5. Träff
        resultDisplay.innerHTML = "Namn hittades: " + person;
        found = true;
        break;
      }
    }

    // 6. Ingen träff
    if (!found) {
      resultDisplay.innerHTML = "Namn hittades inte.";
    }
  });
}

// RÖR EJ DESSA RADER
document.addEventListener("DOMContentLoaded", () => {
  initSearch(people);
});
  