
//button kikeresése
let mybutton = document.getElementById("myBtn");

// Ha a felhasználo legörget 25px a dokumentum tetejétől, akkor, mutassa a  buttont
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

//scrollozz felfele script 
// Ha az user scrolloz lefele jelenjen meg a scrolltop elem
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Mobil menü nézet
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
/* váltás hozzáadás elvétel responziv nézetek között, ha az user rákattint a top buttonra */
// function myFunctionMyTopNav() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "topnav") {
//     x.className += " responsive";
//   } else {
//     x.className = "topnav";
//   }
// }

