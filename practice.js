const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
//show input error message 
showError = (input,message) =>{
    const formControl = input.parentElement;
    formControl.classList.add('error'); 
    const small = formControl.querySelector('small'); 
    small.innerText = message;
}
showSuccess = (input) =>{
    const formControl = input.parentElement;
    formControl.classList.add('success'); 
}

checkRequired = (inputArr) =>{
    inputArr.forEach((input)=>{
        if(input.value.trim()===''){
            showError(input,`${getFieldName(input)} is required`)
        }else {
            showSuccess(input)
        }
    })
}
checkLength = (input,min,max) =>{
    if(input.value.length < min){
        showError(input,`${getFieldName(input)} must be at least ${min} characters`)
    } else if (input.value.length > max){
        showError(input,`${getFieldName(input)} must be at less than  ${max} characters`)
    } else {
        showSucess(input)
    }
}
checkPasswordsMatch = (input1,input2) =>{
if(input1.value !== input2.value){
    showError(input2,'Password is not correct')
}
}
getFieldName = (input) =>{
    return input.id.charAt(0).toUpperCase()+input.id.slice(1)
}
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkRequired([username,email,password1,password2]);
    checkLength(username,3,20);
    checkLength(password,6,25);
    checkEmail(email);
    checkPasswordsMatch(password,password2)

})