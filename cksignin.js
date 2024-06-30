import { auth } from "./config.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


import (auth)

const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const button = document.querySelector('#button1');

const xulyDangNhap = (e) => {
  e.preventDefault();
    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, emailValue, passwordValue)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    alert("Đăng nhập thành công");
    window.location = "./cKmain.html"
  })
  .catch((error) => {
    alert("Vui lòng kiểm tra lại thông tin đăng nhập")
    const errorCode = error.code;
    const errorMessage = error.message;
  });

}

button.addEventListener('click', xulyDangNhap)