async function getSkill() {
  const charSkills = document.getElementById("charSkills");
  const response = await fetch("https://www.dnd5eapi.co/api/skills");
  const data = await response.json();
  const cSkills = data.results;

  const skillsTitle = document.createElement("h3");
  skillsTitle.setAttribute("id", "skillsH3");
  skillsTitle.innerHTML = "Skills";
  charSkills.prepend(skillsTitle);

  cSkills.forEach((skill) => {
    let tempSkillHTML = `
    <ul id="skill" class="list-group" style="width: 9rem;">
    <li id="skill" class="group-item">
    <input id="skill-box" class="skill-check-box" type="checkbox" value="" aria-label="...">
    <strong>${skill.name}</strong>
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
    e.target.parentElement.style.borderRadius = "25px";
    if ((e.target.checked = true)) {
      checkboxes.forEach((box) => {
        box.disabled = true;
      });
    }
  });
}

export { getSkill };
