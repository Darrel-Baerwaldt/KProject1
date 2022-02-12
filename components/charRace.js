async function getRace() {
  const charRace = document.getElementById("charRace");
  const response = await fetch("https://www.dnd5eapi.co/api/races");
  const data = await response.json();
  const cRace = data.results;

  cRace.forEach((race) => {
    let tempRaceHTML = `
    <ul class="list-group" style="width: 10rem;">
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
    ${race.name}
  </li>
</ul>`;
    charRace.innerHTML += tempRaceHTML;
  });
}

export { getRace };
