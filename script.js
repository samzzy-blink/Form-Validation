const form = document.querySelector('.form');
// const namepattern = /^[a-zA-Z]{3,6}$/;
// const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
// const passPattern = /^[a-zA-Z0-9.$_%+-]{8,}$/

// console.log(form.querySelector('h1'));

form.addEventListener('submit',submitUserData);
form.addEventListener('keyup',getLiveFeedBack);




function submitUserData(e) {
    e.preventDefault();

    // This both works perfectly boss
    // console.log(e.target.email.value);
    // console.log(form.email.value);

    const user = {
        name: form.name.value,
        email: form.email.value,
        password: form.password.value,
        check: form.accept.checked
    }
    // console.log(user);

    const isFormValid = validateForm(user)
}




function validateForm(user) {
    console.log(user)
}


function getLiveFeedBack(e){
    // .id or .name does the same thing!!!
    // console.log(e.target.id);
    console.log(e.target.name);


function testValidation() {

    // console.log(e.target.parentNode)
    let small = e.target.parentNode.querySelector('.form__group-small');
   

    // console.log(pattern.test(e.target.value));
    small.textContent = pattern.test(e.target.value) ? 'valid' : 'invalid';


    switch (small.textContent) {
        case 'valid':
            e.target.style.border = 'green 1px solid'
            

            break;
            case 'invalid':
            e.target.style.border = 'red 1px solid'
            break;
    
        default:
            break;
    }
}

     //it can be  e.target.name === 'password' of 'email. note!!!!
    // it just to check the type of name attribute value i.e name,email or passsword
    if (e.target.name === 'name') {
        pattern = /^[a-zA-Z]{3,6}$/;
        testValidation();
    
    }else if(e.target.name === 'email') {
        pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        testValidation();

    }else if(e.target.name === 'password') {
        pattern = /^[a-zA-Z0-9.$_%+-]{8,}$/;

        testValidation();
        
    }
}

   
