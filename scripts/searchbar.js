
const searchbar = document.querySelector(".inputClass");

searchbar.addEventListener("input", search);

function search() {
  const names = document.querySelectorAll(".sikloernyozesTitle");
  const posts = document.querySelectorAll(".sikloernyozesContent");
  const val = searchbar.value;

  
  for (let i = 0; i < names.length; i++){
    if(!names[i].textContent.includes(val) && !posts[i].textContent.includes(val)) {
      names[i].parentElement.classList.add("rejtes");
    } else if (names[i].parentElement.classList.contains("rejtes")) {
      names[i].parentElement.classList.remove("rejtes");
    }


  }

}

