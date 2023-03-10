//GSAP
const tl = gsap.timeline({ defaults: { duration: 0.75 } });

tl.fromTo("#clock, #map", { y: 0 }, { y: -8, yoyo: true, repeat: -1 });

//Selector

const carsLi = document.querySelectorAll(".cars-li");
const fourthSectBg = document.querySelector(".fourth-sect");
const ddMenu = document.querySelectorAll(".dd-menu");
const ddContent = document.querySelectorAll(".dropdown-content");

//Event Listeners

if (window.innerWidth >= 768) {
  document.addEventListener("mousemove", movingBg);
  for (i = 0; i < carsLi.length; i++) {
    carsLi[i].addEventListener("mouseover", carHover);
  }
  for (i = 0; i < carsLi.length; i++) {
    carsLi[i].addEventListener("mouseout", carNotHover);
  }
}

//Functions

function movingBg(e) {
  mousePosY = e.clientY;
  mousePosX = e.clientX;
  fourthSectBg.style.backgroundPositionX =
    (mousePosX - window.innerWidth / 2) / 900 + "rem";
  fourthSectBg.style.backgroundPositionY =
    (mousePosY - window.innerHeight / 2) / 900 + "rem";
}

function carHover(e) {
  let exactParent = e.target.parentNode;
  exactParent.querySelector("img").style.top = "0.5vw";
  exactParent.querySelector("h5").style.color = "#ec1d23";
  exactParent.querySelector(".red-line").style.width = "85%";
}

function carNotHover(e) {
  let exactParent = e.target.parentNode;
  exactParent.querySelector("img").style.top = "1.25vw";
  exactParent.querySelector("h5").style.color = "#707070";
  exactParent.querySelector(".red-line").style.width = "0";
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

ddMenu[0].addEventListener("click", function () {
  ddContent[0].classList.toggle("dropdown-active");
});
