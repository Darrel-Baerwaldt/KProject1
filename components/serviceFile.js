const imageApiKey = config.IMAGE_API_KEY;
const toonMe = (url) => {
  deepai.setApiKey(imageApiKey);

  (async function () {
    var resp = await deepai.callStandardApi("toonify", {
      image: url,
    });

    await deepai.renderResultIntoElement(
      resp,
      document.getElementById("charImage")
    );
  })();
};

export { toonMe };
