const cityContent = document.getElementById("city-left");
const areaContent = document.getElementById("area-left");
const timeContent = document.getElementById("time-left");
const imgContent = document.getElementById("slide-image");
const topLinks = document.getElementsByClassName("main__block-one__menu__li");
const dotLinks = document.getElementsByClassName(
  "main__block-one__slider__dot"
);
const arrowLinks = document.getElementsByClassName("slider-arrows");

const slider = {
  curSlide: 0,
  city: [
    "Rostov-on-Don<br>LCD admiral",
    "Sochi<br>Thieves",
    "Rostov-on-Don<br>Patriotic"
  ],
  area: [81, 105, 93],
  time: [4.5, 4, 3],
  slides: []
};

for (let i = 0; i < topLinks.length; i++) {
  slider.slides.push({
    elTop: topLinks[i],
    elDot: dotLinks[i],

    city: slider.city[i],
    area: slider.area[i],
    time: slider.time[i],


    activate: function() {
      this.elTop.classList.add("li_active");
      this.elDot.classList.add("dot_active");

      cityContent.innerHTML = this.city;
      areaContent.innerHTML = this.area;
      timeContent.innerHTML = this.time;
      imgContent.src = `./images/image${i + 1}.jpg`;
    },

    deactivate: function() {
      this.elTop.classList.remove("li_active");
      this.elDot.classList.remove("dot_active");
    }
  });
}

function showSlide() {
  for (let i = 0; i < slider.slides.length; i++) {
    const currentSlide = slider.slides[i];
    if (i === slider.curSlide) {
      currentSlide.activate();
    } else {
      currentSlide.deactivate();
    }
  }
}

const chooseSlide = event => {
  slider.curSlide = event.target.dataset.slide;
  clearInterval(intervalID);
  showSlide();
};

showSlide();

let intervalID = setInterval(() => {
  slider.curSlide++;
  if (slider.curSlide >= 3) slider.curSlide = 0;
  showSlide();
}, 3000);

for (let link of topLinks) {
  link.addEventListener("click", event => {
    chooseSlide(event);
  });
}

for (let link of dotLinks) {
  link.addEventListener("click", event => {
    chooseSlide(event);
  });
}

for (let link of arrowLinks) {
  link.addEventListener("click", event => {
    clearInterval(intervalID);
    if (event.target.id === "next-arrow") {
      slider.curSlide++;
      if (slider.curSlide >= 3) slider.curSlide = 0;
    } else {
      slider.curSlide--;
      if (slider.curSlide < 0) slider.curSlide = 2;
    }
    showSlide();
  });
}