let slider = {
    curSlide: 1,
    city: ['Rostov-on-Don<br>LCD admiral', 'Sochi<br>Thieves', 'Rostov-on-Don<br>Patriotic'],
    area: [81, 105, 93],
    time: [4.5, 4, 3]
}

const cityContent = document.getElementById('city-left');
const areaContent = document.getElementById('area-left');
const timeContent = document.getElementById('time-left');
const imgContent = document.getElementById('slide-image');
const topLinks = document.getElementsByClassName('main__block-one__menu__li');
const dotLinks = document.getElementsByClassName('main__block-one__slider__dot');
const arrowLinks = document.getElementsByClassName('slider-arrows');

function showSlide() {
    for (let i = 1; i <= 3; i++) {
        const activeLi = topLinks[i-1];
        const activeDot = dotLinks[i-1];
        if (i == slider.curSlide) {
            activeLi.classList.add('li_active');
            activeDot.classList.add('dot_active');
        }
        else {
            activeLi.classList.remove('li_active');
            activeDot.classList.remove('dot_active');
        }
    }
    cityContent.innerHTML = slider.city[slider.curSlide-1];
    areaContent.innerHTML = slider.area[slider.curSlide-1];
    timeContent.innerHTML = slider.time[slider.curSlide-1];
    imgContent.src = `./images/image${slider.curSlide}.jpg`;
}  

const chooseSlide = (event) => {
    slider.curSlide = event.target.dataset.slide;
    clearInterval(intervalID);
    showSlide();
}

showSlide();

  let intervalID = setInterval (() => {
      slider.curSlide++;
      if (slider.curSlide > 3) slider.curSlide = 1;
      showSlide();
  }, 3000);

for (let link of topLinks) {
    link.addEventListener('click', (event) => {
        chooseSlide(event);
    });
}

for (let link of dotLinks) {
    link.addEventListener('click', (event) => {
        chooseSlide(event);
    });
}

for (let link of arrowLinks) {
    link.addEventListener('click', (event) => {
        clearInterval(intervalID);
        if (event.target.id === 'next-arrow') {
            slider.curSlide++;
            if (slider.curSlide > 3) slider.curSlide = 1;
        } else {
            slider.curSlide--;
            if (slider.curSlide < 1) slider.curSlide = 3;
        } 
    showSlide();
    });
}