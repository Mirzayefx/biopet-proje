let loggedName = document.querySelector('.user_profile p')
let logOutBtn = document.querySelector('.user_profile i')
let basketCount = document.querySelector('.count')

loggedName.innerHTML = JSON.parse(localStorage.getItem('loggedInUser')).fullName;

logOutBtn.addEventListener('click', () => {
  localStorage.removeItem('loggedInUser');
  window.location.href='login.html';
})

let secTwoContainer = document.querySelector(".sec_two_container");

function showLikes(arr){
    secTwoContainer.innerHTML = '';
    arr.forEach(data=>{
        secTwoContainer.innerHTML +=`
        <div class="sec_two_box">
        <img class="img_" src="${data.img}" alt="">
        <img class="img_overflow" src="/imgs/sec_two_overflow.png" alt="">
        <div class="sec_two_heart">
        <i class="fa-regular fa-heart heart_empty_one"></i>
        <i class="fa-solid fa-heart heart_filled"></i>
        </div>
        <div class="sec_two_shop"><button type="button" onclick="addToCart(${data.id})"> İndi al <i class="fa-solid fa-cart-shopping"></i>
          </button></div>
      </div>
        `
    })
}
function addToCart(id){
  let checkSebet = sebet.find(data=>data.id === +id);
  if(checkSebet){
    checkSebet.count += 1;
  }
  else{
  let checkPr = products.find(data=>data.id === +id);
  checkPr.count = 1
  sebet.push(checkPr);
  basketCount.innerHTML = sebet.length;
  }
  basketCount.innerHTML = sebet.length;
  localStorage.setItem('sebet',JSON.stringify(sebet))
}
basketCount.innerHTML = sebet.length;
window.addEventListener('load',()=>{
    showLikes(likes)
})