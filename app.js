particlesJS("particles-js", {
  particles: {
    number: {
      value: 60  ,
      density: { enable: true, value_area: 800 },
    },
    color: { value: "#a6ff00" },
    shape: { type: "circle" },
    opacity: { value: 0.7, random: true },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#a6ff00",
      opacity: 0.2,
      width: 0.5,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: true,
      out_mode: "out",
    },
  },
});
// menu hamburger (màn 1000px): bấm để mở/đóng, bấm vào link thì tự đóng
const header = document.querySelector("header");
const bar = document.querySelector(".bar");

function setMenu(open) {
  header.classList.toggle("open", open);
  bar.setAttribute("aria-expanded", open);
  bar.querySelector("i").className = open ? "fa-solid fa-xmark" : "fa-solid fa-bars";
}

bar.addEventListener("click", () => setMenu(!header.classList.contains("open")));
document.querySelectorAll("nav a").forEach((link) =>
  link.addEventListener("click", () => setMenu(false))
);
