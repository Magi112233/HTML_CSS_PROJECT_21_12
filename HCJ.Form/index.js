const form = document.querySelector('#form');
const username = document.querySelector('#usernsme');
const email = document.querySelector('#email');
const password =document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');

form.addEventListener('submit',(e)=>){
    e.preventDefault();    //error
    validateInputs();     //
}

function validateInputs(){
    const usernameVal = username.value.trim() ;  //enptyspace
    const emailVal= email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();

    if(usernameVal)===''{
        setError(username,'username is required')
    }else{
        setSuccess(username)        
    }

    if(email)===''{
        setError(email.'')
    }

    
    


}
//element - password,msg-pas is reqd
function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('error')

    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')

}

function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = element.querySelector('error')

    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}

const validateEmail = (email)=>{
    return String (email)
    .toLowerCase()
    .match(
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    );
};
    