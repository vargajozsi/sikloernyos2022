
const searchbar = document.querySelector(".inputClass");
const mutasd = document.querySelector(".articlesiklo");


searchbar.addEventListener("input", search);

function search() {
  const names = document.querySelectorAll(".sikloernyozesTitle");
  const posts = document.querySelectorAll(".sikloernyozesContent");
  const val = searchbar.value.toLowerCase();
  
  for (let i = 0; i < names.length; i++){
    if(!names[i].textContent.toLowerCase().includes(val) && !posts[i].textContent.toLowerCase().includes(val)) {
      names[i].parentElement.classList.add("rejtes");
    } else if (names[i].parentElement.classList.contains("rejtes")) {
      names[i].parentElement.classList.remove("rejtes");
    }


  }

}

