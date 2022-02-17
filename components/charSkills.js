async function getSkill() {
    const charSkill = document.getElementById("charSkill");
    const response = await fetch("https://www.dnd5eapi.co/api/skills");
    const data = await response.json();
    const cSkill = data.results;

  //  charSkill.innerHTML += '<form>'
    cSkill.forEach((skill) => {
      let tempSkillHTML = `
      <ul class="list-group" style="width: 10rem;">
    <li class="list-group-item">
      <input class="form-check-input me-1" type="radio" name="skill" value="" aria-label="...">
      ${skill.name}
    </li>
  </ul>`;
      charSkill.innerHTML += tempSkillHTML;
    });
    // charSkill.innterHTML += '</form>'
  }
  
  export { getSkill };