async function getRace() {
  const charRaces = document.getElementById("charRaces");
  const response = await fetch("https://www.dnd5eapi.co/api/races");
  const data = await response.json();
  const cRaces = data.results;

  console.dir(charRaces);

  cRaces.forEach((race) => {
    let tempRaceHTML = `
    <ul class="list-group" style="width: 10rem;">
    <li class="list-group-item">
    <input class="race-check-box" type="checkbox" value="" aria-label="...">
    ${race.name}
    </li>
    </ul>`;
    charRaces.innerHTML += tempRaceHTML;
  });
  const checkboxes = document.querySelectorAll("input[class='race-check-box']");

  checkboxes.forEach((box) => {
    box.onclick = () => {
      if (box.checked) {
        alert(box.parentElement.innerText);
      }
    };
  });

  console.dir(checkboxes);
}

export { getRace };
