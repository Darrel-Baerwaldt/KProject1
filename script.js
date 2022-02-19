import { getClasses } from "./components/charClasses.js";
import { getMyPic } from "./components/charImage.js";
import { getRace } from "./components/charRace.js";
import { stats } from "./components/charStats.js";
import { getSkill } from "./components/charSkills.js";
import { getNames } from "./components/names.js";
import { splashPage } from "./components/splashPage.js";

splashPage();
getClasses();
getRace();
stats();
getSkill();
getNames();
getMyPic();
