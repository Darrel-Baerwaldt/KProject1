async function getClasses() {
  const charClasses = document.getElementById("charClasses");
  const response = await fetch("https://www.dnd5eapi.co/api/classes/");
  const data = await response.json();
  const cClasses = data.results;

  cClasses.forEach((job) => {
    let tempJobHTML = `
    <ul id="classes" class="list-group" style="width: 10rem;">
  <li id="class" class="list-group-item">
    <input id="class-box" class="class-check-box" type="checkbox" value="" aria-label="...">
    ${job.name}
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
    if ((e.target.checked = true)) {
      checkboxes.forEach((box) => {
        box.disabled = true;
      });
    }
  });
}

export { getClasses };
