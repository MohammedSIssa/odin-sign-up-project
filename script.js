const pswrd1 = document.querySelector('#password1'),
      pswrd2 = document.querySelector('#password2'),
      errorMsg = document.querySelector('.error')

pswrd1.addEventListener('input', checkPassword)
pswrd2.addEventListener('input', checkPassword)

function checkPassword(){
  let p1 = document.querySelector('#password1').value
  let p2 = document.querySelector('#password2').value

  if(p1 == p2){
    errorMsg.textContent = ""
    matched()
  }
  else{
    errorMsg.textContent = "* Passwords do not match"
    notMatched()
  }
}

function notMatched(){
  pswrd1.setAttribute("not-matched", "true")
  pswrd2.setAttribute("not-matched", "true")
}

function matched(){
  pswrd1.setAttribute("not-matched", "false")
  pswrd2.setAttribute("not-matched", "false")
}