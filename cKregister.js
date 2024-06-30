import { auth } from "./config.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const button = document.querySelector('#button1');


const xulyDangKy = (e) => {
    // Trien khai noi dung lay ra qua .value
    e.preventDefault();
    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;
    console.log(emailValue, passwordValue);
    
    createUserWithEmailAndPassword(auth, emailValue, passwordValue)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
    console.log(user);
    alert("Đăng ký thành công");
    window.location.href = "./cKsignin.html";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Đăng ký thất bại");
    // ..
  });
};

button.addEventListener('click', xulyDangKy);