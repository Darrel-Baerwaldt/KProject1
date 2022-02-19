const splashPage = () => {
  const splash = document.querySelector(".splash");

  const splashH1 = document.createElement("h1");
  splashH1.setAttribute("class", "fade-in");
  splashH1.innerHTML = `If you made it here,<br />you must be,<br />STILL-NERD'in out!`;
  splash.appendChild(splashH1);

  document.addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
      splash.classList.add("display-none");
    }, 7000);
  });

  setTimeout(() => {
    const splashImgDIV = document.createElement("div");
    splashImgDIV.innerHTML = `<img id="splashPic" src="https://i.ytimg.com/vi/PeR1AhcT8Og/hqdefault.jpg">`;
    splash.appendChild(splashImgDIV);
  }, 5000);
};

export { splashPage };
