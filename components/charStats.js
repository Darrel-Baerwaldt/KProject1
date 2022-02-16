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
  strTitle.setAttribute("id", "STR");
  str.appendChild(strTitle);
  const strSpan = document.createElement("span");
  strSpan.setAttribute("id", "strVal");
  str.children[0].appendChild(strSpan);
  document.getElementById("strVal").style.padding = "5rem";

  const dexTitle = document.createElement("h4");
  dexTitle.innerHTML = "DEX";
  dexTitle.setAttribute("id", "DEX");
  dex.appendChild(dexTitle);
  const dexSpan = document.createElement("span");
  dexSpan.setAttribute("id", "dexVal");
  dex.children[0].appendChild(dexSpan);
  document.getElementById("dexVal").style.padding = "5rem";

  const conTitle = document.createElement("h4");
  conTitle.innerHTML = "CON";
  conTitle.setAttribute("id", "CON");
  con.appendChild(conTitle);
  const conSpan = document.createElement("span");
  conSpan.setAttribute("id", "conVal");
  con.children[0].appendChild(conSpan);
  document.getElementById("conVal").style.padding = "5rem";

  const intTitle = document.createElement("h4");
  intTitle.innerHTML = "INT";
  intTitle.setAttribute("id", "INT");
  int.appendChild(intTitle);
  const intSpan = document.createElement("span");
  intSpan.setAttribute("id", "intVal");
  int.children[0].appendChild(intSpan);
  document.getElementById("intVal").style.padding = "5rem";

  const wisTitle = document.createElement("h4");
  wisTitle.innerHTML = "WIS";
  wisTitle.setAttribute("id", "WIS");
  wis.appendChild(wisTitle);
  const wisSpan = document.createElement("span");
  wisSpan.setAttribute("id", "wisVal");
  wis.children[0].appendChild(wisSpan);
  document.getElementById("wisVal").style.padding = "5rem";

  const chaTitle = document.createElement("h4");
  chaTitle.innerHTML = "CHA";
  chaTitle.setAttribute("id", "CHA");
  cha.appendChild(chaTitle);
  const chaSpan = document.createElement("span");
  chaSpan.setAttribute("id", "chaVal");
  cha.children[0].appendChild(chaSpan);
  document.getElementById("chaVal").style.padding = "5rem";

  let statsTitle = document.createElement("h3");
  statsTitle.innerHTML = "BASE STATS";
  statsDIV.prepend(statsTitle);

  let statsBtn = document.createElement("button");
  statsBtn.innerHTML = "Lock-in Stats";
  statsBtn.setAttribute("id", "setStats");
  statsDIV.appendChild(statsBtn);
  const setBtn = document.getElementById("setStats");

  let strRolls = 0;
  let dexRolls = 0;
  let conRolls = 0;
  let intRolls = 0;
  let wisRolls = 0;
  let chaRolls = 0;

  const makeStats = (e) => {
    switch (e.target.id) {
      case "STR":
        if (strRolls < 3) {
          strSpan.innerText = diceRoll();
          strRolls++;
        }
        break;
      case "DEX":
        if (dexRolls < 3) {
          dexSpan.innerText = diceRoll();
          dexRolls++;
        }
        break;
      case "CON":
        if (conRolls < 3) {
          conSpan.innerText = diceRoll();
          conRolls++;
        }
        break;
      case "INT":
        if (intRolls < 3) {
          intSpan.innerText = diceRoll();
          intRolls++;
        }
        break;
      case "WIS":
        if (wisRolls < 3) {
          wisSpan.innerText = diceRoll();
          wisRolls++;
        }
        break;
      case "CHA":
        if (chaRolls < 3) {
          chaSpan.innerText = diceRoll();
          chaRolls++;
        }
        break;
    }
  };

  statsDIV.addEventListener("click", makeStats);

  setBtn.addEventListener("click", () => {
    statsDIV.removeEventListener("click", makeStats);
  });
}
const diceRoll = () => {
  let result = Math.floor(Math.random() * 20) + 1;
  return result;
};

export { stats };
