//link all pages

function vote() {
  window.location.assign("http://127.0.0.1:5500/html/vote.html");
}
function favourtie() {
  window.location.assign("http://127.0.0.1:5500/html/favourite.html");
}
function upload() {
  window.location.assign("http://127.0.0.1:5500/html/upload.html");
}

var listcatdiv = document.getElementById("listcat");
var listofcat = [];
const normalfetch = (order) => {
  fetch(`https://api.thecatapi.com/v1/images/?limit=10&page=0&order=${order}`, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "17d94b92-754f-46eb-99a0-65be65b5d18f",
    },
  })
    .then((res) => res.json())
    .then((resdata) => {
      console.log(resdata);
      listofcat = resdata;
      listofcat.map((data, i) => {
        i === 0
          ? (listcatdiv.innerHTML = `<img class="cat__images"  src=${data.url} alt=""/>`)
          : (listcatdiv.innerHTML += `<img class="cat__images"  src=${data.url} alt=""/>`);
      });
    });
};
normalfetch();
const orderdata = (data) => {
  console.log(data.value);
  normalfetch(data.value);
};
const breed = () => {
  // console.log(data)
  normalfetch("AESC");
};
const types = () => {
  // console.log(data)
  normalfetch("DESC");
};
const category = () => {
  // console.log(data)
  normalfetch("AESC");
};
