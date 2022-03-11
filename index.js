$('#frmValidate').submit(function(e){
  e.preventDefault();
     var em=$('#email').val().toLowerCase();
   if(validateEmail(em)!==true){
    alert("Enter a valid email");
  }


  var pass=$('#pass').val();
  var confirmPass=$('#confirmPass').val();


  console.log(validatePassword(pass));

  validateConfirmPass(pass,confirmPass);
  if(validatePassword(pass)!==true){
    alert("password must be atleast 8 characters");
    return;
  }
  var username=$('#username').val();
  if(validateUser(username) !==true ){
    alert("Username must be alphabets")
    return;
  }

  alert("You have Successfully Signed up");

  
});

//validate pass

function validatePassword(pass){
  var passwReg= /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;

  if(passwReg.test(pass)){
    return(true);
  }
  else{
    return (false);
  }
}

//validate email
function validateEmail(email){
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if(email.match(regex)){

    return (true);
  }
  else {

    return (false);
    // alert("Enter a valid email");
  }

}
//confirm Password
function validateConfirmPass(pass,confirmPass){
  if(pass!==confirmPass){
    alert("Confirm Password and Password do not match");
  }
//validate usernae

}
function validateUser(username){
  var nameReg= /^[a-zA-Z]*$/;
  if(nameReg.test(username)){
    return (true);
  }
  else{
    return (false);
  }

}