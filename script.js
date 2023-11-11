function hideMsg(input){
  input.style.visibility= "hidden";
  input.style.display= "none";
}

function showMsg(input){
  input.style.visibility= "visible";
  input.style.display= "block";
}
  
function validEmail(){
  let email = document.getElementById("email").value;
  //div for user's input
  let wrongInput = document.getElementById("wrongEmail"); //div for wrong message 
  let emptyInput = document.getElementById("noEmail");
  //div for empty message
  let promo = document.getElementById("promoMessage");
  //div for msg that appears for code
  
  let mailPattern = /^(([^<>([\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zAZ]{2,}))$/;

    if (email == ""){
      showMsg(emptyInput);
      hideMsg(wrongInput);
      hideMsg(promoMessage);
    }

    else if (!mailPattern.test(email)){
      showMsg(wrongInput);
      hideMsg(emptyInput);
      hideMsg(promoMessage);
    }
  else {
    hideMsg(wrongInput);
    hideMsg(emptyInput);
    showMsg(promoMessage);
  }

}
