// CONST - VARIABLES
const button = document.getElementById("btnSubmit");
const buttonClear = document.getElementById("btnClear");
const icons = document.querySelectorAll('i');
const password1Field = document.getElementById("password");
const password2Field = document.getElementById("password2");
const nameFields = document.querySelectorAll(".name");

const passwFields = document.querySelectorAll(".pasw-field");

const emailField = document.getElementById("email");

const fields = document.querySelectorAll("input");

// INPUT FIELDS ANIMATIONS
fields.forEach(field => {
    field.addEventListener("focus", function(){
        field.classList.add("active");
    })
});

fields.forEach(field => {
    field.addEventListener("blur", function(){
        field.classList.remove("active");
    })
});

// CLEAR ALL BUTTON
buttonClear.addEventListener("click", function(e){
    e.preventDefault();
    fields.forEach(field => {
        field.value = "";
    });
    passwFields.forEach(div => div.classList.remove("success", "error"));
});

// VARIFICATION CODE //
button.addEventListener("click", function(e){
    e.preventDefault();
    let passw1 = password1Field.value;
    let passw2 = password2Field.value;

    if(passw1 != passw2 || passw1 === "" || passw2 === ""){
        passwFields.forEach(field => {
        field.classList.add("error");
        }) 
    } else{
        passwFields.forEach(field => {
            field.classList.remove("error");
            field.classList.add("success");
        })
    }

    let emailText = emailField.value;
    if(emailText.includes("@")){
        emailField.classList.add("success");
    } else{
        emailField.classList.add("error");
    }

    nameFields.forEach(nameField => {
        let nameText = nameField.value;
        if(nameText === ""){
            nameField.classList.add("error");
        } else{
            nameField.classList.add("success");
        }
    })
});

// SEE THE PASSWORD

icons.forEach(icon => {
    icon.addEventListener("click", function(){
        if(password1Field.type === "password"){
            password1Field.type = "text";
            password2Field.type = "text";
        } else if(password1Field.type === "text"){
            password1Field.type = "password";
            password2Field.type = "password";
        }
    })
});

