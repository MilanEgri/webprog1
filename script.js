function register(event) {
  event.preventDefault();
  let registerStatus = false;
  const fullName = document.getElementById("full-name").value;
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const birthDate = document.getElementById("birth-date").value;
  const password = document.getElementById("psw").value;
  const pswConfirm = document.getElementById("psw-confirm").value;

  if (password === pswConfirm) {
   alert("Succesfull Registration");
   registerStatus = true;
  }
  else{
    alert("Password and Confirm Paswword don't match")
    registerStatus = false
  }
  const registerPageText = document.getElementById("register-page-text")
  if(registerStatus){
      registerPageText.innerText = `Dear ${fullName}!
         
      You had a succesfull registration with the following data:
      username: ${username}
      e-mail: ${email}
      Birth Date: ${birthDate}
     
      Welcome,
      Milan` 
  }
  else{
    registerPageText.innerText = "Register Here" 
  }
}
