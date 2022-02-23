const themeButton = document.querySelector("#themeButton");

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
  manualThemeToggle();
} else {
  document.documentElement.classList.remove("dark");
  manualThemeToggle();
}

function manualThemeToggle() {
  themeButton.addEventListener("click", () => {
    if (themeButton.checked) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  });
}
