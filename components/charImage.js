import { toonMe } from "./serviceFile.js";

async function getMyPic() {
  const imageDIV = document.getElementById("charImage");
  const imgFormDIV = document.createElement("div");
  imageDIV.appendChild(imgFormDIV);
  imgFormDIV.innerHTML = `
  <form>
  <div class="mb-3">
    <label for="inputUrl" class="form-label"><strong>Please add an image Url.</strong></label>
    <input type="url" class="form-control" id="inputUrl" aria-describedby="imageURL" style="background-color: black; color: red">
  </div>
  <button id="urlBtn" type="submit" class="btn" style="background-color: rgba(96,9,0,0.65); color: black">Toonify</button>
</form>
  `;
  const inputUrl = document.getElementById("inputUrl");
  const urlBtn = document.getElementById("urlBtn");

  urlBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let url = inputUrl.value;

    toonMe(url);
    if (inputUrl.value != "") {
      setTimeout(() => {
        imageDIV.classList.add("pop-out");
      }, 2000);
    }
  });
}

export { getMyPic };
