const darkThemeSetter = document.querySelector("#dark");
const lightThemeSetter = document.querySelector("#light");
const root = document.documentElement;

function toggleTheme() {
  root.classList.toggle("dark");
}

darkThemeSetter.addEventListener("click", toggleTheme);
lightThemeSetter.addEventListener("click", toggleTheme);
