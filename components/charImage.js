import { toonMe } from "./serviceFile.js";
// const imageApiKey = config.IMAGE_API_KEY;
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
  <button id="urlBtn" type="submit" class="btn" style="background-color: rgba(96,9,0,0.65)">Toonify</button>
</form>
  `;
  const inputUrl = document.getElementById("inputUrl");
  const urlBtn = document.getElementById("urlBtn");

  urlBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let url = inputUrl.value;

    toonMe(url);

    //////////////////  STILL WORKING with THIS //////////////////////////

    // const url = imageDIV.children[0].value;
    // deepai.setApiKey(imageApiKey);

    // (async function () {
    //   var resp = await deepai.callStandardApi("toonify", {
    //     image:
    //       "https://images.tennis.com/image/private/t_16-9_768/tenniscom-prd/kpi3csldatbbrqqibjlk.jpg",
    //   });

    //   await deepai.renderResultIntoElement(
    //     resp,
    //     document.getElementById("charImage")
    //   );
    // })();

    // (async function () {
    //   var resp = await deepai.callStandardApi("toonify", {
    //     image: document.getElementById("life"),
    //     //http://localhost:5500/images/Life.jpg
    //   });
    //   await deepai.renderResultIntoElement(
    //     resp,
    //     document.getElementById("charImage")
    //   );
    //   console.log(deepai);
    // })();
  });
}

// const deepai = require("deepai"); // OR include deepai.min.js as a script tag in your HTML

// deepai.setApiKey(imageApiKey);

export { getMyPic };
