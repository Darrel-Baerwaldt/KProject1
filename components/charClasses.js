async function getClasses() {
  const charClasses = document.getElementById("charClasses");
  const response = await fetch("https://www.dnd5eapi.co/api/classes/");
  const data = await response.json();
  const cClasses = data.results;

  const classesTitle = document.createElement("h3");
  classesTitle.innerHTML = "Classes";
  charClasses.prepend(classesTitle);

  cClasses.forEach((job) => {
    let tempJobHTML = `
    <ul id="classes" class="list-group" style="width: 6rem;">
  <li id="class" class="group-item" style=" background-color: transparent;">
    <input id="class-box" class="class-check-box" type="checkbox" value="" aria-label="...">
    <strong>${job.name}</strong>
  </li>
</ul>`;

    charClasses.innerHTML += tempJobHTML;
  });

  const checkboxes = document.querySelectorAll(
    "input[class='class-check-box']"
  );

  charClasses.addEventListener("change", (e) => {
    e.target.parentElement.style.color = "red";
    e.target.parentElement.style.backgroundColor = "black";
    e.target.parentElement.style.borderRadius = "25px";
    if ((e.target.checked = true)) {
      checkboxes.forEach((box) => {
        box.disabled = true;
      });
    }
  });

  const dot = document.getElementById("class");
  console.dir(dot);
}

export { getClasses };
