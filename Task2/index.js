const form = document.getElementById('form');
const password = document.getElementById('password').value;
const confirm = document.getElementById('confirm').value;

function verifyPassword() {
  if(password !== confirm){
    alert("Passwords didn't match");
  }
}

function verifyNumber(){
  const num = Number(document.getElementById('integer').value);
  Number.isInteger(num) ?
    document.getElementById("messageNumber").innerHTML = "It is integer" :
    document.getElementById("messageNumber").innerHTML = "It is float";
}
form.addEventListener('submit',(e)=>{
  e.preventDefault()
  verifyNumber();
  verifyPassword();
})