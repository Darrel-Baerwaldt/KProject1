import { toonMe } from "./serviceFile.js";
// const imageApiKey = config.SECRET_API_KEY;
async function getMyPic() {
  const imageDIV = document.getElementById("charImage");
  const imgFormDIV = document.createElement("div");
  imageDIV.appendChild(imgFormDIV);
  imgFormDIV.innerHTML = `
  <form>
  <div class="mb-3">
    <label for="inputUrl" class="form-label">Please add an image Url. https://</label>
    <input type="url" class="form-control" id="inputUrl" aria-describedby="imageURL">
  </div>
  <button id="urlBtn" type="submit" class="btn btn-danger">Submit</button>
</form>
  `;
  const inputUrl = document.getElementById("inputUrl");
  const urlBtn = document.getElementById("urlBtn");
  console.dir(inputUrl.value);

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
