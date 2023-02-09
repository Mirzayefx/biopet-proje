let loginEmail = document.querySelector(".login_email_username");
let loginPassword = document.querySelector(".login_password");
let loginError = document.querySelector(".login_error");
let loginBtn = document.querySelector(".login_btn");


loginBtn.addEventListener("click", () => {
    if(loginEmail.value !== ''&& loginPassword.value !== ''){
        let checkUsers = users.find(data=>data.email === loginEmail.value || data.userName === loginEmail.value || data.phoneNumber === loginEmail.value)
        if(checkUsers){
            if(checkUsers.password === loginPassword.value){
                localStorage.setItem('loggedInUser',JSON.stringify(checkUsers))
                if(localStorage.getItem('loggedInUser')){
                    window.location.href = 'index.html';
                  }else{
                     window.location.href = "login.html";
                  }
            }else{
                loginError.innerHTML = "Wrong Password";
            }
        }else{
            loginError.innerHTML = "Istidechi movcud deyil";
        }
    }else{
        loginError.innerHTML = "Enter Email or Password";
    }
})
window.addEventListener('load',()=>{
    if(localStorage.getItem('loggedInUser')){
        window.location.href = 'index.html';
      } 
})