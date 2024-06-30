

// Contact 
function contact() {
  let a = document.getElementById("input1").value;
  let b = document.getElementById("input2").value;
  let c = document.getElementById("input3").value;
  let x = document.getElementById("input4").value;
  if (a == "") {
  alert("Hãy điền thông tin của bạn");
  return false;
}
  else if (b == "") {
  alert("Hãy điền email của bạn ");
  return false;
}
  else if (c == "") {
  alert("Hãy điền sđt của bạn ");
  return false;
}
  else if (x == "") {
  alert("Hãy điền vào ô trống ");
  return false;
}
  else if(isNaN(c)){
  alert("Sđt sai");
}
  else{
  alert("Cảm ơn đóng góp của bạn");
}
}


// About
function changeImage() {
  window.location = "food.html"
}

function changeImage1() {
  window.location = "emotion.html"
}

function changeImage2() {
  window.location = "sport.html"
}
