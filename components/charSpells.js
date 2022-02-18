async function getSpells() {
    const charSpells = document.getElementById("charSpells");
    const response = await fetch("https://www.dnd5eapi.co/api/spells?level=1"); 
    const data = await response.json();
    const cSpells = data.results;
// console.log(cSpells);
    
    cSpells.forEach((spell) => {
 //     console.log(spell.name);
      let tempSpellsHTML = `
      <ul class="list-group" style="width: 10rem;">
    <li class="list-group-item">
      <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
      ${spell.name}
    </li>
  </ul>`;
      charSpells.innerHTML += tempSpellsHTML;
//      console.log(spells.name);
    });
  }
//  console.log(response);

  export { getSpells };


  