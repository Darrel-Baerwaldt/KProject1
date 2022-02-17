async function getSpells() {
    const charSpells = document.getElementById("charSpells");
    const response = await fetch("https://www.dnd5eapi.co/api/spells"); 
    const data = await response.json();
    const cRace = data.results;
  
    cRace.forEach((spells) => {
      let tempSpellsHTML = `
      <ul class="list-group" style="width: 10rem;">
    <li class="list-group-item">
      <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
      ${spells.name}
    </li>
  </ul>`;
      charSpells.innerHTML += tempSpellsHTML;
    });
  }
  console.log(response);
  
  export { getSpells };


  