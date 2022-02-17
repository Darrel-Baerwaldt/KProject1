async function getMyPic() {
  deepai.setApiKey("48ae4165-2d41-450c-9271-db314770c849");

  (async function () {
    var resp = await deepai.callStandardApi("toonify", {
      image:
        "https://images.tennis.com/image/private/t_16-9_768/tenniscom-prd/kpi3csldatbbrqqibjlk.jpg",
    });

    await deepai.renderResultIntoElement(
      resp,
      document.getElementById("charImage")
    );
  })();

  //   (async function () {
  //     var resp = await deepai.callStandardApi("toonify", {
  //       image: document.getElementById("life").src,
  ////http://localhost:5500/images/Life.jpg
  //     });
  //     console.log(resp);
  //   })();
}

// const deepai = require("deepai"); // OR include deepai.min.js as a script tag in your HTML

// deepai.setApiKey("48ae4165-2d41-450c-9271-db314770c849");

export { getMyPic };
