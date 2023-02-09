let basketContainer = document.querySelector(".basket_container");
let basketCount = document.querySelector(".count");

function showSebet(arr) {
  basketContainer.innerHTML = "";
  arr.forEach((data) => {
    basketContainer.innerHTML += `
        <div class="basket_card">
        <img class="img_" style="height:278px;"src="${data.img}">
        <p><b>${data.title}</b></p>
        <p>count: <b>${data.count}</b></p>
        <p>price: <b>${(data.price * data.count).toFixed(2)} ₼</b></p>
        <div class="basket_btn_flex">
        <button name="dec" onclick="editPr(event,${data.id})">-</button>
        <button name="inc" onclick="editPr(event,${data.id})">+</button>
        </div>
        </div>
        `;
  });
}

function editPr(e, id) {
  let checkBasket = sebet.find((data) => data.id === +id);
  checkBasket.count =
    e.target.name === "inc" ? checkBasket.count + 1 : checkBasket.count - 1;
  if (checkBasket.count === 0) {
    let index = sebet.findIndex((data) => data.id === +id);
    sebet.splice(index, 1);
  }
  showSebet(sebet);
  localStorage.setItem("sebet", JSON.stringify(sebet));
  basketCount.innerHTML = sebet.length;
}
basketCount.innerHTML = sebet.length;

let loggedName = document.querySelector('.user_profile p')
let logOutBtn = document.querySelector('.user_profile i')

loggedName.innerHTML = JSON.parse(localStorage.getItem('loggedInUser')).fullName;

logOutBtn.addEventListener('click', () => {
  localStorage.removeItem('loggedInUser');
  window.location.href='login.html';
})

window.addEventListener("load", () => {
  showSebet(sebet);
});
