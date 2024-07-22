//shorthand console.log
const log = console.log.bind(document);

//main hamburger menu hide begin//
const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
  this.classList.toggle("close");
});
//main hamburger menu hide end//
// Meteo article content generator start

// Meteo article content generator end
//sikloernyozes menu content start
function sikloArticleToggle(melyik) {
  let a = melyik.nextSibling.nextElementSibling.style;
  console.log(melyik.nextSibling.nextElementSibling);
  console.log(melyik.nextElementSibling);

  if (a.display === "block") {
    melyik.nextSibling.nextElementSibling.style = "display: none;";
  } else {
    melyik.nextSibling.nextElementSibling.style = "display: block;";
  }
}

//sikloernyozes menu content end

//klubok xcontest mutat rejt eredménylista eleje

const mutasd = document.querySelector(".mutasdRejtsd");
//ha másik oldalon töltődik be a script, aho nincs mutasdrejtsd class hibát dobna
mutasd ? mutasd.addEventListener("click", displayList) : null;

function displayList() {
  for (let i = 11; i <= 33; i++) {
    document.querySelector("#Klubok > ol").children[i].style.display =
      "inherit";
  }
  document.querySelector("#Klubok > ol").children[10].style.display = "none";
}

//klubok xcontest mutat rejt eredménylista vége
