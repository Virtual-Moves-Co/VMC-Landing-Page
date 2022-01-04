const showBtn = document.querySelectorAll(".add-btn");
showBtn.forEach((e) => {
  e.addEventListener("click", function () {
    e.classList.toggle("active");
    this.parentElement.parentElement.classList.toggle("active");
  });
});

// let count = 1

// const radioBtn = document.querySelectorAll('.radio-btn')
// function colorBtn(params){
//     radioBtn.forEach((e, i) =>{

//         if (e.checked) {
//             bannerBtn[i].style.backgroundColor = '#ffb000'
//         }
//         // bannerBtn.forEach((e,i)=>{
//         //     e.style.backgroundColor = 'white'
//         // })

//     })

// }
// colorBtn()

// function changeBanner(){
//     document.querySelector('.jumbo-wrapper').style.backgroundPositionY = '1000px'
//     document.querySelector('.jumbo-wrapper').style.backgroundImage = 'url(assets/img/banner.png)'
//     document.querySelector('.jumbo-wrapper').style.backgroundPositionY = '-1000px'
// }

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
