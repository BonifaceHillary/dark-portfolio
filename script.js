var moon = document.getElementById("moon");

moon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    moon.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    moon.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
};
