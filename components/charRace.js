async function getRace() {
  const charRaces = document.getElementById("charRaces");
  const response = await fetch("https://www.dnd5eapi.co/api/races");
  const data = await response.json();
  const cRaces = data.results;

  cRaces.forEach((race) => {
    let tempRaceHTML = `
    <ul id="races" class="list-group" style="width: 10rem;">
    <li id="race" class="list-group-item">
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
    if ((e.target.checked = true)) {
      checkboxes.forEach((box) => {
        box.disabled = true;
      });
    }
  });
}

export { getRace };
