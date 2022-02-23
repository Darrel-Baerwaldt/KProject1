async function getSpells() {
    const charSpells = document.getElementById("charSpells");
    const response = await fetch("https://www.dnd5eapi.co/api/spells?level=1"); 
    const data = await response.json();
    const cSpells = data.results;

    cSpells.forEach((spell, index) => {

      if (index < 16) {
        let tempSpellsHTML = `
        <ul class="spList-group" style="width: 10rem;">
        <li class="group-item" style="background-color: transparent; width: 150px; ">
        <input id="spell-box" class="spell-check-box" type="checkbox" value="" aria-label="...">
        ${spell.name}
        </li>
        </ul>`;
        charSpells.innerHTML += tempSpellsHTML;
        
      }

    });

    // let spellCounter = 0;
    const spellCheckBoxes = document.querySelectorAll("input[class='spell-check-box']");
    charSpells.addEventListener("change", (e) => {
      
      e.target.parentElement.style.color = "green";
      e.target.parentElement.style.backgroundColor = "white";

    //   if (e.target.checked == true && spellCounter < 5) {
    //     spellCheckBoxes.forEach((box) => {
    //       box.disabled = true;
    //       spellCounter++;
    //     });
        
    //   } else if (e.target.checked == false) {
    //     spellCheckBoxes.forEach((box) => {
    //       box.disabled = false;
    //       spellCounter--;

    //   })
    // }
    });
    
  }

  export { getSpells };


  