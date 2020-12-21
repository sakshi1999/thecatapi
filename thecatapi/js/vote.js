//link all pages

function vote() {
  window.location.assign("http://127.0.0.1:5500/html/vote.html");
}
// function images() {
//   window.location.assign("http://127.0.0.1:5500/html/images.html");
// }
function favourtie() {
  window.location.assign("http://127.0.0.1:5500/html/favourite.html");
}
function upload() {
  window.location.assign("http://127.0.0.1:5500/html/upload.html");
}

let images = document.getElementById("images");

images.addEventListener("click", (evt)=>{
  window.location.assign("http://127.0.0.1:5500/html/images.html")
})

//calling buttons by their id's
let likebtn = document.getElementById("likebtn");
let dislikebtn = document.getElementById("dislikebtn");
let imagetag = document.getElementById("cat__image");
console.log(imagetag)
var imageId = '';
//fetch api to generate a random images
fetch("https://api.thecatapi.com/v1/images/search")
    .then((res) => res.json())
    .then((cats) => {
      cats.forEach((cat) => {
          console.log('cat',cat)
          imagetag.setAttribute('src',cat.url)
        imageId = cat.id;
       
      });
    });
function favlist() {
    var data ={
      image_id: imageId
    }
  fetch("https://api.thecatapi.com/v1/favourites", {
    method: "POST",
    headers: { 
      "Content-Type": "application/json",
      "x-api-key": "17d94b92-754f-46eb-99a0-65be65b5d18f"

    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      res.json();
      alert('saved to favorite')
      console.log("post", res);
    })

    .catch((err) => {
      console.log(err);
    });
}
likebtn.addEventListener("click", (evt) => {
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((res) => res.json())
    .then((cats) => {
      cats.forEach((cat) => {
          console.log('cat',cat)
          imagetag.setAttribute('src',cat.url)
        imageId = cat.id;
       
      });
    }).catch(e=>alert('something went wrong try again!! '));
});

dislikebtn.addEventListener("click", (evt) => {
  fetch("https://api.thecatapi.com/v1/images/search")
  .then((res) => res.json())
  .then((cats) => {
    cats.forEach((cat) => {
        console.log('cat',cat)
        imagetag.setAttribute('src',cat.url)
      imageId = cat.id;
     
    });
  }).catch(e=>alert('something went wrong try again!! '));;
});
