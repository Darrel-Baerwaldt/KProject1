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

// fetch("https://www.dnd5eapi.co/api/classes/")
//   .then((response) => {
//     // console.log(response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data, "Classes");
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// fetch("https://www.dnd5eapi.co/api/races")
//   .then((response) => {
//     // console.log(response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data, "Races");
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// fetch("https://www.dnd5eapi.co/api/spells?level=1")
//   .then((response) => {
//     // console.log(response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data, "Spells");
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// fetch("https://www.dnd5eapi.co/api/skills")
//   .then((response) => {
//     // console.log(response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data, "Skills");
//   })
//   .catch((err) => {
//     console.error(err);
//   });
