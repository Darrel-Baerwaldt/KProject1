async function getClasses() {
  const charClass = document.getElementById("charClass");
  const response = await fetch("https://www.dnd5eapi.co/api/classes/");
  const data = await response.json();
  console.dir(data);
  const cClass = data.results;

  cClass.forEach((job) => {
    let tempJobHTML = `
    <ul class="list-group" style="width: 10rem;">
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
    ${job.name}
  </li>
</ul>`;

    charClass.innerHTML += tempJobHTML;
  });
}

export { getClasses };
