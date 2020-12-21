//link all pages

function vote() {
  window.location.assign("http://127.0.0.1:5500/html/vote.html");
}
function images() {
  window.location.assign("http://127.0.0.1:5500/html/images.html");
}
function favourtie() {
  window.location.assign("http://127.0.0.1:5500/html/favourite.html");
}
function upload() {
  window.location.assign("http://127.0.0.1:5500/html/upload.html");
}

//------------------------
var getdivforimage = document.getElementById("allimagewrapper");
console.log("get", getdivforimage);
var arrayoffavimages = [];
const getfavorite = () => {
  fetch("https://api.thecatapi.com/v1/favourites", {
    method: "get",

    headers: {
      "Content-Type": "application/json",
      "x-api-key": "17d94b92-754f-46eb-99a0-65be65b5d18f",
    },
  })
    .then((res) => res.json())
    .then((resdata) => {
      console.log(resdata);

      arrayoffavimages = resdata;
      arrayoffavimages.map((data, i) => {
        if (i === 0) {
          getdivforimage.innerHTML = `<div class="favDiv">
          <img class="fav__images" src=${data.image.url} />
          <button class="unfavbtn" onclick=unlike(${i})>UNFAV-IT</button>
          </div>`;
        } else {
          getdivforimage.innerHTML += `<div class="favDiv">
          <img class="fav__images" src=${data.image.url} />
          <button class="unfavbtn" onclick="unlike(${i})">UNFAV-IT</button>
          </div>`;
        }
        return data;
      });
      // alert('favourite loded')
    });
};
getfavorite();
const unlike = (index) => {
  console.log(index);
  const id = arrayoffavimages[index].id;
  fetch(`https://api.thecatapi.com/v1/favourites/${id}`, {
    method: "delete",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "17d94b92-754f-46eb-99a0-65be65b5d18f",
    },
  })
    .then((res) => res.json())
    .then((resdata) => {
      console.log("result", resdata);

      getfavorite();
    //   alert("unfavourite done");
    });
};
