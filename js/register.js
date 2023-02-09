let registerEmail = document.querySelector(".register_email");
let registerFullname = document.querySelector(".register_fullname");
let registerUsername = document.querySelector(".register_username");
let registerPassword = document.querySelector(".register_password");
let registerError = document.querySelector(".register_error");
let registerBtn = document.querySelector(".register_btn");

registerBtn.addEventListener("click", () => {
  if (
    registerEmail.value !== "" &&
    registerFullname.value !== "" &&
    registerUsername.value !== "" &&
    registerPassword.value !== ""
  ) {
    let checkNewUsers = users.find(
      (data) =>
        data.email === registerEmail.value ||
        data.phoneNumber === registerEmail.value ||
        data.userName === registerUsername.value
    );
    if(!checkNewUsers){
        let newUser = {
            id: users.length+1,
            email: registerEmail.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) ? registerEmail.value : null,
            phoneNumber: registerEmail.value.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)? registerEmail.value: null,
            userName: registerUsername.value,
            fullName: registerFullname.value,
            password: registerPassword.value
        }
        users.push(newUser);
        console.log(users);
        registerError.innerHTML = 'Qeydiyyat ugurlar bitdi'
        localStorage.setItem('users',JSON.stringify(users))
    }else{
        registerError.innerHTML = 'Bu istifadechi movcuddur'
    }
  }else{
    registerError.innerHTML = 'Xanalari doldurun'
  }
});
