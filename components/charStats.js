async function stats() {
  const statsDIV = document.getElementById("charStats");

  const str = statsDIV.children[0];
  const dex = statsDIV.children[1];
  const con = statsDIV.children[2];
  const int = statsDIV.children[3];
  const wis = statsDIV.children[4];
  const cha = statsDIV.children[5];

  const strTitle = document.createElement("h4");
  strTitle.innerHTML = "STR";
  str.appendChild(strTitle);
  const strSpan = document.createElement("span");
  strSpan.setAttribute("id", "strVal");
  str.children[0].appendChild(strSpan);
  document.getElementById("strVal").style.padding = "5rem";

  const dexTitle = document.createElement("h4");
  dexTitle.innerHTML = "DEX";
  dex.appendChild(dexTitle);
  const dexSpan = document.createElement("span");
  dexSpan.setAttribute("id", "dexVal");
  dex.children[0].appendChild(dexSpan);
  document.getElementById("dexVal").style.padding = "5rem";

  const conTitle = document.createElement("h4");
  conTitle.innerHTML = "CON";
  con.appendChild(conTitle);
  const conSpan = document.createElement("span");
  conSpan.setAttribute("id", "conVal");
  con.children[0].appendChild(conSpan);
  document.getElementById("conVal").style.padding = "5rem";

  const intTitle = document.createElement("h4");
  intTitle.innerHTML = "INT";
  int.appendChild(intTitle);
  const intSpan = document.createElement("span");
  intSpan.setAttribute("id", "intVal");
  int.children[0].appendChild(intSpan);
  document.getElementById("intVal").style.padding = "5rem";

  const wisTitle = document.createElement("h4");
  wisTitle.innerHTML = "WIS";
  wis.appendChild(wisTitle);
  const wisSpan = document.createElement("span");
  wisSpan.setAttribute("id", "wisVal");
  wis.children[0].appendChild(wisSpan);
  document.getElementById("wisVal").style.padding = "5rem";

  const chaTitle = document.createElement("h4");
  chaTitle.innerHTML = "CHA";
  cha.appendChild(chaTitle);
  const chaSpan = document.createElement("span");
  chaSpan.setAttribute("id", "chaVal");
  cha.children[0].appendChild(chaSpan);
  document.getElementById("chaVal").style.padding = "5rem";

  let statsTitle = document.createElement("h3");
  statsTitle.innerHTML = "BASE STATS";
  statsDIV.prepend(statsTitle);

  statsDIV.addEventListener("click", (e) => {
    e.preventDefault();
    // switch (e.target.outerText) {
    //   case "STR":
    //     strSpan.textContent = diceRoll();
    //     console.log("I was clicked");
    //     break;
    //   case "DEX":
    //     dexSpan.textContent = diceRoll();
    //     console.log(diceRoll());
    //     break;
    //   case "CON":
    //     conSpan.textContent = diceRoll();
    //     console.log("I was clicked");
    //     break;
    //   case "INT":
    //     intSpan.textContent = diceRoll();
    //     console.log("I was clicked");
    //     break;
    //   case "WIS":
    //     wisSpan.textContent = diceRoll();
    //     console.log("I was clicked");
    //     break;
    //   case "CHA":
    //     chaSpan.textContent = diceRoll();
    //     console.log("I was clicked");
    //     break;
    // }
    if (
      e.target.outerText == "STR" ||
      e.target.outerText == "DEX" ||
      e.target.outerText == "CON" ||
      e.target.outerText == "INT" ||
      e.target.outerText == "WIS" ||
      e.target.outerText == "CHA"
    ) {
      e.target.children[0].textContent = diceRoll();
    }
  });
}
const diceRoll = () => {
  let result = Math.floor(Math.random() * 20) + 1;
  return result;
};

export { stats };
