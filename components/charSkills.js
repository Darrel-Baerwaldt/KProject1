async function getSkill() {
  const charSkills = document.getElementById("charSkills");
  const response = await fetch("https://www.dnd5eapi.co/api/skills");
  const data = await response.json();
  const cSkills = data.results;

  cSkills.forEach((skill) => {
    let tempSkillHTML = `
    <ul id="skill" class="list-group" style="width: 9rem;">
    <li id="skill" class="group-item">
    <input id="skill-box" class="skill-check-box" type="checkbox" value="" aria-label="...">
    ${skill.name}
    </li>
    </ul>`;
    charSkills.innerHTML += tempSkillHTML;
  });
  const checkboxes = document.querySelectorAll(
    "input[class='skill-check-box']"
  );

  charSkills.addEventListener("change", (e) => {
    e.target.parentElement.style.color = "red";
    e.target.parentElement.style.backgroundColor = "black";
    if ((e.target.checked = true)) {
      checkboxes.forEach((box) => {
        box.disabled = true;
      });
    }
  });
}

export { getSkill };
