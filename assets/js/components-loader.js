document.addEventListener("DOMContentLoaded", function () {
  loadComponent("header");
  loadComponent("footer");
});

function loadComponent(name) {
  const placeholder = document.getElementById(name + "-placeholder");
  if (!placeholder) return;

  fetch("components/" + name + ".html")
    .then((response) => response.text())
    .then((html) => {
      placeholder.innerHTML = html;
    })
    .catch((error) => {
      console.error("Error loading component " + name + ":", error);
    });
}
