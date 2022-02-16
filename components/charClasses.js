async function getClasses() {
  const charClasses = document.getElementById("charClasses");
  const response = await fetch("https://www.dnd5eapi.co/api/classes/");
  const data = await response.json();
  const cClasses = data.results;

  cClasses.forEach((job) => {
    let tempJobHTML = `
    <ul class="list-group" style="width: 10rem;">
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
    ${job.name}
  </li>
</ul>`;

    charClasses.innerHTML += tempJobHTML;
  });
}

export { getClasses };
