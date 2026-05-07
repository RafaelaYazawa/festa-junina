export function displayMenu() {
  console.log("menueeee");
  const menuIcon = document.querySelector(".hamburguer-icon");
  const navLinks = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".page-links");

  menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      console.log("cliquei????");
      navLinks.classList.remove("show");
    });
  });
}
