const showBtn = document.querySelectorAll(".add-btn");
showBtn.forEach((e) => {
  e.addEventListener("click", function () {
    e.classList.toggle("active");
    this.parentElement.parentElement.classList.toggle("active");
  });
});

const bannerSlider = () => {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
};

let counter = 1;
setInterval(bannerSlider, 4000);

const bannerBtn = document.querySelectorAll(".banner-btn");

bannerBtn.forEach((e, i) => {
  e.addEventListener("click", function () {
    counter = i + 1;
  });
});

let teamMargin = 0;
let teamView = 0;

const prevBtn = document.querySelector(".btn.prev");
const nextBtn = document.querySelector(".btn.next");
const teamContent = document.querySelectorAll(".team-content");

teamContent.forEach(() => {
  const teamStrip = document.createElement("LI");
  const teamNavigation = document.querySelector(".team-navigation");
  teamNavigation.insertBefore(teamStrip, nextBtn);
});
prevBtn.addEventListener("click", () => {
  teamPrev();
});
nextBtn.addEventListener("click", () => {
  teamNext();
});

const teamNext = () => {
  if (teamMargin !== -(teamContent.length * 100 - 100)) {
    teamMargin -= 100;
  } else {
    teamMargin = 0;
  }
  teamContent[0].style.marginLeft = `${teamMargin}%`;
  coloringStrip(-teamMargin / 100);
};

const teamPrev = () => {
  if (teamMargin < 0) {
    teamMargin += 100;
  }
  teamContent[0].style.marginLeft = `${teamMargin}%`;
  coloringStrip(-teamMargin / 100);
};

setInterval(() => {
  teamNext();
  coloringStrip(-teamMargin / 100);
}, 20000);

const teamStrip = document.querySelectorAll(".team-navigation li");
const coloringStrip = (i) => {
  teamStrip.forEach((e) => (e.style.backgroundColor = "rgba(0, 0, 0, 0.123)"));

  teamStrip[i].style.backgroundColor = "#ffb000";
};

coloringStrip(0);
