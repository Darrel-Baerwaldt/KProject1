async function getRace() {
  const charRaces = document.getElementById("charRaces");
  const response = await fetch("https://www.dnd5eapi.co/api/races");
  const data = await response.json();
  const cRaces = data.results;

  const raceTitle = document.createElement("h3");
  raceTitle.innerHTML = "Races";
  charRaces.prepend(raceTitle);

  cRaces.forEach((race) => {
    let tempRaceHTML = `
    <ul id="races" class="list-group" style="width: 7rem;">
    <li id="race" class="group-item" style=" background-color: transparent;">
    <input id="race-box" class="race-check-box" type="checkbox" value="" aria-label="...">
    ${race.name}
    </li>
    </ul>`;
    charRaces.innerHTML += tempRaceHTML;
  });
  const checkboxes = document.querySelectorAll("input[class='race-check-box']");

  charRaces.addEventListener("change", (e) => {
    e.target.parentElement.style.color = "red";
    e.target.parentElement.style.backgroundColor = "black";
    e.target.parentElement.style.borderRadius = "25px";
    if ((e.target.checked = true)) {
      checkboxes.forEach((box) => {
        box.disabled = true;
      });
    }
  });
}

export { getRace };
