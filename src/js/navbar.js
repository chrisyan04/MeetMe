const logoLink = document.getElementById("logo-link");
const logoImg = document.getElementById("logo-img");

let originalImgSrc = "public/img/logo/logo-no-background.png";
let hoverImgSrc = "public/img/logo/logo-white.png";

logoLink.addEventListener("mouseover", () => {
    logoImg.src = hoverImgSrc;
});

logoLink.addEventListener("mouseout", () => {
    logoImg.src = originalImgSrc;
});
