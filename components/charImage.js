async function getMyPic() {
  deepai.setApiKey("48ae4165-2d41-450c-9271-db314770c849");

  (async function () {
    var resp = await deepai.callStandardApi("toonify", {
      image:
        "https://m.media-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_.jpg",
    });
    // console.log(resp);
    await deepai.renderResultIntoElement(
      resp,
      document.getElementById("charImage")
    );
  })();
}

export { getMyPic };
