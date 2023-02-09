
if(!localStorage.getItem('loggedInUser')){
  window.location.href = 'login.html';
} 

// loading io 
let loader_container = document.querySelector('.loader_container')
let bodyIndex = document.querySelector('#index_load')
window.addEventListener('load',()=>{
  setTimeout(() => {
    loader_container.style.display = 'none';
    bodyIndex.style.overflowY = 'auto';
  }, 1000);
})

let secTwoContainer = document.querySelector(".sec_two_container");
let sec_three_cat_child = document.querySelectorAll(".sec_three_cat_child");
let sec_three_category = document.querySelector(".sec_three_category");
let basketCount = document.querySelector(".count");

products.forEach((data) => {
  secTwoContainer.innerHTML += `
    <div class="sec_two_box">
          <img class="img_" src="${data.img}" alt="">
          <img class="img_overflow" src="/imgs/sec_two_overflow.png" alt="">
          <div class="sec_two_heart">
          <i class="fa-regular fa-heart heart_empty_one" onclick="addToLiked(${data.id})"></i>
          <i class="fa-solid fa-heart heart_filled" onclick="removeLiked(${data.id})"></i>
          </div>
          <div class="sec_two_shop"><button type="button" onclick="addToCart(${data.id})"> İndi al <i class="fa-solid fa-cart-shopping"></i>
            </button></div>
            <p class="sec_two_content">${data.title}<b> ${data.price} ₼</b></p>
        </div>
    `;
});
function addToCart(id) {
  let checkBasket = sebet.find(data => data.id === id);
  if (checkBasket) {
    checkBasket.count += 1;
  } else {
    let checkProducts = products.find((data) => data.id === +id);
    checkProducts.count = 1;
    sebet.push(checkProducts);
    basketCount.innerHTML = sebet.length;
  }
  basketCount.innerHTML = sebet.length;
  localStorage.setItem("sebet", JSON.stringify(sebet));
}
basketCount.innerHTML = sebet.length;


// sec 3

let sec_three_container = document.querySelector(".sec_three_container");

fetch("./api/data.json")
  .then((resp) => resp.json())
  .then((data) => {
    data.forEach((el) => {
      sec_three_container.innerHTML += `
    <div class="sec_three_box" data-name="${el.dataName}">
    <div class="sec_three_content">
      <img src="${el.img}" alt="">
      <p>${el.title}</p>
      <span><b>${el.price} ₼</b></span>
      <div class="sec_three_content_flex">
        <div class="sec_three_shop">
          <button type="button" onclick="addToCartTwo(${el.id})">İndi al <i class="fa-solid fa-cart-shopping"></i></button>
        </div>
        <div class="sec_three_heart">
          <i class="fa-regular fa-heart"></i>
          <i class="fa-solid fa-heart heart_filled"></i>
        </div>
      </div>
    </div>
  </div>
    `;
    });

    let sec_three_box = document.querySelectorAll(".sec_three_box");

    for (let i = 0; i < sec_three_cat_child.length; i++) {
      sec_three_cat_child[i].addEventListener("click", () => {
        sec_three_category
          .querySelector(".cat_child_active")
          .classList.remove("cat_child_active");
        sec_three_cat_child[i].classList.add("cat_child_active");

        let sec3FilterBtn = sec_three_cat_child[i].getAttribute("data-name");

        for (let i = 0; i < sec_three_box.length; i++) {
          let sec3FilterCard = sec_three_box[i].getAttribute("data-name");

          if (sec3FilterBtn === sec3FilterCard || sec3FilterBtn === "all") {
            sec_three_box[i].classList.add("show");
            sec_three_box[i].classList.remove("hide");
          } else {
            sec_three_box[i].classList.remove("show");
            sec_three_box[i].classList.add("hide");
          }
        }
      });
    }
  });
function addToCartTwo(id) {
  let checkBasket = sebet.find((data) => data.id === +id);
  if (checkBasket) {
    checkBasket.count += 1;
  } else {
    fetch("./api/data.json")
      .then((resp) => resp.json())
      .then((data) => {
        let checkProducts = data.find((pr) => pr.id === +id);
        checkProducts.count = 1;
        sebet.push(checkProducts);
        basketCount.innerHTML = sebet.length;
        localStorage.setItem("sebet", JSON.stringify(sebet));
      });
  }
  localStorage.setItem("sebet", JSON.stringify(sebet));
  basketCount.innerHTML = sebet.length;
}
basketCount.innerHTML = sebet.length

// slider sec4

let leftIcon = document.querySelector(".left_icon");
let rightIcon = document.querySelector(".right_icon");
let servicesSlider = document.querySelector("#services_slider");

let sliderCount = 0;

function slideFunc() {
  for (let i = 0; i < servicesSlider.children.length; i++) {
    servicesSlider.children[i].style.transform = `translateX(${
      -300 * sliderCount
    }px)`;
  }
}

setInterval(() => {
  if (sliderCount < servicesSlider.children.length - 4) {
    sliderCount++;
    slideFunc();
  } else {
    sliderCount = 0;
    slideFunc();
  }
}, 3000);

leftIcon.addEventListener("click", () => {
  if (sliderCount < 0) {
    sliderCount = 0;
    slideFunc();
  } else {
    sliderCount--;
    slideFunc();
  }
});
rightIcon.addEventListener("click", () => {
  if (sliderCount < servicesSlider.children.length - 4) {
    sliderCount++;
    slideFunc();
  } else {
    sliderCount = 0;
    slideFunc();
  }
});

// slider sec1

let secOne = document.querySelector("#sec_one_slider");
let secOneLeft = document.querySelector(".sec_one_left");
let secOneRight = document.querySelector(".sec_one_right");
let count1 = 0;
function secOneSlideFunc() {
  for (let i = 0; i < secOne.children.length; i++) {
    secOne.children[i].style.transform = `translateX(${-297 * count1}px)`;
    secOne.children[i].classList.remove("sec_one_active");
  }
  secOne.children[count1 + 1].classList.add("sec_one_active");
}
setInterval(() => {
  if (count1 < secOne.children.length - 18) {
    count1++;
    secOneSlideFunc();
  } else {
    count1 = 0;
    secOneSlideFunc();
  }
}, 3000);

secOneLeft.addEventListener("click", () => {
  if(count1<0){
    count1=0;
    secOneSlideFunc();
  }else{
    count1--;
    secOneSlideFunc();
  }
})
secOneRight.addEventListener("click", () => {
  if (count1 < secOne.children.length - 3) {
    count1++;
    secOneSlideFunc();
  }
  else{
    count1 = 0;
    secOneSlideFunc();
  }
})

// slider header

const swiper = new Swiper('.swiper', {
  autoplay:{
      delay: 3000,
      disableOnInteraction: false,
  },
loop: true,

pagination: {
el: '.swiper-pagination',
clickable: true,
},

navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev',
},
});

// index login 
let loggedName = document.querySelector('.user_profile p')
let logOutBtn = document.querySelector('.user_profile i')

loggedName.innerHTML = JSON.parse(localStorage.getItem('loggedInUser')).fullName;

logOutBtn.addEventListener('click', () => {
  window.location.href='login.html';
  localStorage.removeItem('loggedInUser');
})

// nav fixxed 
window.onscroll = () => {
  if (window.scrollY > 100) {
    document.querySelector("#navbar").classList.add("sticky");
  } else {
    document.querySelector("#navbar").classList.remove("sticky");
}}

// hamburger 
let navList = document.querySelector('.nav_list')
let barIcon = document.querySelector('.bars_icon')

barIcon.addEventListener('click', () => {
  document.querySelector(".nav_list").classList.toggle("bar_active")
})


// LIKED PAGE 

let heartEmptyOne = document.querySelectorAll(".heart_empty_one")
let heartFilled = document.querySelectorAll(".heart_filled")


for(let i = 0 ; i<heartEmptyOne.length;i++){
  heartEmptyOne[i].addEventListener('click', () => {
    heartEmptyOne[i].style.display='none'
    heartFilled[i].style.display='block'
    // localStorage.setItem('heart_filled_one', JSON.stringify(heartFilled[i]))
  })
}
for(let i = 0 ; i<heartEmptyOne.length;i++){
  heartFilled[i].addEventListener('click', () => {
    heartFilled[i].style.display='none'
    heartEmptyOne[i].style.display='block'
    // localStorage.setItem('heart_empty_one', JSON.stringify(heartEmptyOne[i]))
  })
}

function addToLiked(id){
  let checkLikes = likes.find(data=>data.id === +id)
  if(checkLikes){
    checkLikes.count += 1

  }else{
  let checkLikesPr = products.find(data=>data.id === +id)
  checkLikesPr.count = 1
  checkLikesPr.liked = true;
    likes.push(checkLikesPr)
    localStorage.setItem('likes',JSON.stringify(likes))
    console.log(checkLikesPr);
  }
  // if(checkLikes){
  //   heartFilled[id-1].style.display='block'
  // }
}
function removeLiked(id){
  let index = likes.findIndex(data=>data.id === +id)
  likes.splice(index,1)
  localStorage.setItem('likes',JSON.stringify(likes))
}


// SCROLL Y ve Indi al urekde
let go_up_icon = document.querySelector('.go_up_icon')
window.addEventListener('scroll',()=> 
{
if(window.scrollY > 500 ){
  go_up_icon.style.visibility = "visible"
}
else{
  go_up_icon.style.visibility = "hidden"
}
})
go_up_icon.addEventListener('click',()=>{
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
})