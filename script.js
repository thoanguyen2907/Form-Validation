const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
//show input error message
showError =(input,message)=>{
const formControl = input.parentElement;
formControl.className = 'form-control error';
const small = formControl.querySelector('small');
small.innerText = message; 
}
showSuccess = (input)=> {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';

}
//check email is valid 
checkEmail = (input) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())){
      showSuccess(input)
    } else {
      showError(input,'Email is not valid')
    }
}
//checkRequired 
checkRequired =(inputArr) => {
  inputArr.forEach((input)=>{
   if(input.value.trim() === ''){
     showError(input,`${getFieldName(input)} is required`)
   } else {
    showSuccess(input)
   }
  })
}
//checkLength input 
checkLength = (input,min,max) => {
if(input.value.length < min){
showError(input,`${getFieldName(input)} must ne at least ${min} characters`)
} else if (input.value.length > max){
  showError(input,`${getFieldName(input)} must ne less than ${max} characters`)
} else {
  showSuccess(input)
}
}
//check password match 
checkPasswordsMatch = (input1,input2)=> {
  if(input1.value !== input2.value){
    showError(input2, 'Passwords is not correct')
  }
}
//get getFieldName
getFieldName = (input) =>{
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
//Event listeners 
form.addEventListener('submit',(e)=>{
e.preventDefault();
checkRequired([username,email,password,password2]);
checkLength(username,3,20);
checkLength(password,6,25); 
checkEmail(email)
checkPasswordsMatch(password,password2)
})
