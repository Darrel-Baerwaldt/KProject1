///////   DEEPAI api-key 48ae4165-2d41-450c-9271-db314770c849

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

// const fs = require("fs");

// const deepai = require("deepai"); // OR include deepai.min.js as a script tag in your HTML

// deepai.setApiKey("48ae4165-2d41-450c-9271-db314770c849");

// (async function () {
//   var resp = await deepai.callStandardApi("toonify", {
//     image: fs.createReadStream("C:/Users/Dad/Desktop/Darrel/life/file.jpg"),
//   });
//   console.log(resp);
// })();

// var request = require("request");
// var fs = require("fs");

// request.post(
//   {
//     url: "https://www.cutout.pro/api/v1/cartoonSelfie?cartoonType=1",
//     formData: {
//       file: fs.createReadStream("C:/Users/Dad/Desktop/Darrel/life.jpg"),
//     },
//     headers: {
//       APIKEY: "ab3ba5f169c74be39b3f807471e51e08",
//     },
//     encoding: null,
//   },
//   function (error, response, body) {
//     // console.log(response);
//   }
// );

// fetch(
//   "https://master-white-box-cartoonization-psi1104.endpoint.ainize.ai/predict",
//   {
//     method: "POST",
//     headers: {
//       accept: "image/jpg",
//       "Content-Type": "multipart/form-data",
//     },
//     body: {
//       file_type: "image",
//       source: "Life.jpg",
//       //   "Life.jpg": "type=image/jpeg",
//     },
//   }
// )
//   .then((response) => {
//     // console.log(response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data, "PICTURE");
//   })
//   .catch((err) => {
//     console.error(err);
//   });
