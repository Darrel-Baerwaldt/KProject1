import { getClasses } from "./components/charClasses.js";
import { getMyPic } from "./components/charImage.js";
import { getRace } from "./components/charRace.js";
import { stats } from "./components/charStats.js";
import { getSkill } from "./components/charSkills.js";
import { getNames } from "./components/names.js";
import { splashPage } from "./components/splashPage.js";

splashPage();

// const splash = document.querySelector(".splash");

// const splashH1 = document.createElement("h1");
// splashH1.setAttribute("class", "fade-in");
// splashH1.innerHTML = `If you made it here, <br />you must be, <br />STILL-NERD'in!`;
// splash.appendChild(splashH1);

// document.addEventListener("DOMContentLoaded", (e) => {
//   console.log(splash);
//   setTimeout(() => {
//     console.log(splash);
//     splash.classList.add("display-none");
//     // splash.hidden = true;
//   }, 5000);
// });

getClasses();
getRace();
stats();
getSkill();
getNames();
getMyPic();
