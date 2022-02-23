async function getSpells() {
    const charSpells = document.getElementById("charSpells");
    const response = await fetch("https://www.dnd5eapi.co/api/spells?level=1"); 
    const data = await response.json();
    const cSpells = data.results;

    cSpells.forEach((spell, index) => {

      if (index < 36) {
        let tempSpellsHTML = `
        <ul class="list-group" style="width: 10rem;">
        <li class="group-item" style="background-color: transparent">
        <input class="form-check-input-box me-1" type="checkbox" value="" aria-label="...">
        ${spell.name}
        </li>
        </ul>`;
        charSpells.innerHTML += tempSpellsHTML;
        
      }

    });
    let checkBox = 0;
    const spellBoxes = document.querySelectorAll("input[class='form-check-input-box']");


    


    
  }

  export { getSpells };


  