let username = document.getElementById("username");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let password = document.getElementById("password");
let cpassword = document.getElementById("cpassword");
let name_error = document.getElementById("name_error");
let email_error = document.getElementById("email_error");
let phone_error = document.getElementById("phone_error");
let passwd_error = document.getElementById("passwd_error");
let cpasswd_error = document.getElementById("cpasswd_error");



function validate_name(){
    var regex = /([a-zA-Z\s][^\n])$/;
    if(regex.test(username.value.trim())){
        name_error.innerText = "Valid";
        name_error.style.color = "green";
        return true;
    }
    else{
        name_error.innerText = "Enter a Valid Name";
        name_error.style.color = "red";
        return false;
    }
}

function validate_phone(){
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(phoneno.test(phone.value.trim())){
        phone_error.innerText = "Valid";
        phone_error.style.color = "green";
        return true;
    }
    else{
        phone_error.innerText = "Enter a Valid format (xxx-xxx-xxxx/xxx.xxx.xxxx/xxx xxx xxxx) and Must contain 10 Numbers";
        phone_error.style.color = "red";
        return false;
    }
}

function validateEmail(email_id){
    //var regExEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    //var regExEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regex_pattern =      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //if(regExEmail.test(email.value.trim())){
        if (regex_pattern.test(email_id)) {
        email_error.innerText = "Valid";
        email_error.style.color = "green";
        return true;
    }
    else{
        email_error.innerText = "Enter a Valid email";
        email_error.style.color = "red";
        return false;
    }
}
    /*function ValidateEmail() 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

}*/
     // if(email.value.trim() ==''){
    //     email_error.innerText = 'Email cant blank';
    //     email_error.style.color ="red";
    //     return false;

    // } 

    // else
//     if (!email.value.match(regExEmail)){
//         email_error.innerText = 'Email is not in proper format';
//         email_error.style.color ="red";
//         // alert('this is a test');

//         return false;
//     }

//     else{
//         email_error.innerText = '<p style= color:green> Validate</p>';
//         return true;
//         // alert('this is a test');
//     }

// }
function RegValid()
{
    alert("registration success")
}
function lvalidate()
{
    alert("Login success")
}

function validatePass(password){
    var regExPass =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/; 
    passwd_error.innerText = password;
     if(!password.match(regExPass) || password.length<=8){
        passwd_error.innerText = 'poor : Password must 8 charecters,one uppercase one lower case ,must contain  at least one num';
        passwd_error.style.color="red";
        return false;
     }
     else
     {
        passwd_error.innerText = 'ok';
     }

        if (password ==""){
        passwd_error.innerText = 'Password cant blank';
        passwd_error.style.color="red";
        return false;
        }


    // else if(password.length<=8){
    //     passwd_error.innerText = 'Poor';
    //     passwd_error.style.color="red";
    //     return false;

    //  }
    else if(password.length>=9 && password.length <=11){
         passwd_error.innerText = 'Medium';
        passwd_error.style.color="orange";
        return true;

    }

   else{
        passwd_error.innerText = 'Strong';
        passwd_error.style.color="green";
        return true;
    }

}
function validate_cpasswd(cpassword,pass1){
    //alert(pass1);
   //cpasswd_error.innerText = password.value;
   if(cpassword!=pass1)
    {
        cpasswd_error.innerText = 'Password Doesnt Match!!';
        cpasswd_error.style.color ='red';
       // alert("HI")
    }
    else{
        cpasswd_error.innerText = 'Password Match';
        cpasswd_error.style.color ='Green';
    }
}

// function strength(password){
    
//     let i=0;
//     if(passsword.length >8){
//         i++;
//     }
//     if(passsword.length >= 12){
//         i++;
//     }
//     if(/[A-Z]/.test(passsword)){
//         i++;
//     }
//     if(/[A-Za-z0-8]/.test(passsword)){
//         i++;
//     }
//     if(/[0-9]/.test(passsword)){
//         i++;
//     }
//     return i;
//     }
//     let container = document.querySelector('.sign-up-htm');
//     document.addEventListener("keyup",function(e){
//         let passsword = document.querySelector('#password').value;

//         let strength = strength(password);
//         if(strength <= 2){
//             container.classList.add('weak');
//             container.classList.remove('medium');
//             container.classList.remove('strong');
//         } 
//         else if(strength >= 2 && strength <= 4){
//             container.classList.remove('weak');
//             container.classList.add('medium');
//             container.classList.remove('strong');
//         } 
//         else {
//             container.classList.remove('weak');
//             container.classList.remove('medium');
//             container.classList.add('strong');
//         } 
//     })
    // else{
    //     passwd_error.innerText = "Password must Contain Minimum 8 characters, at least one uppercase, and one lower case, must contain at least one number";
    //     passwd_error.style.color = "red";
    //     return false;
    // }// var paswd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    // if(paswd.test(paswd.value.trim())){
    //     passwd_error.innerText = "Valid";
    //     passwd_error.style.color = "green";
    //     return true;
// }
