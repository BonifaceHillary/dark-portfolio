
// let dark = localStorage.getItem('darkmode');
// var moon = document.getElementById("moon");

// moon.onclick = function () {
//   document.body.classList.toggle("dark-theme");

//   if (document.body.classList.contains("dark-theme")) {

//     moon.innerHTML = '<i class="fa-solid fa-sun"></i>';

//   } else {
//     moon.innerHTML = '<i class="fa-solid fa-moon"></i>';
//   }
// };

let darkmode = localStorage.getItem('darkmode')
const moon = document.getElementById("moon")

const enableDarkmode = () => {
  document.body.classList.add('darkmode')
  localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
  document.body.classList.remove('darkmode')
  localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkmode()


moon.addEventListener("click",() => {
  darkmode = localStorage.getItem("click", () => {
    darkmode = localStorage.getItem('darkmoe')
  })
  darkmode !== "active" ? enableDarkmode() : disableDarkmode()

})