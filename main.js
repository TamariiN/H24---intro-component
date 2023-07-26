let nameinp = document.querySelector("#nameinp")
let nameError = document.querySelector(".nameError")
let lastnameinp = document.querySelector("#lastnameinp")
let lastnameError = document.querySelector(".lastnameError")
let emailinp = document.querySelector("#emailinp")
let emailError = document.querySelector(".emailError")
let passinp = document.querySelector("#passinp")
let passError = document.querySelector(".passError")
let submitButton = document.querySelector("button")
let form = document.querySelector("form")


form.addEventListener("submit", (e)=> {
    addData(e)
})

const nameRegex = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
const surnameRegex = /^[A-Za-z]+(?:-[A-Za-z]+)*$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;



function addData(e){
    e.preventDefault();
    
    if(nameinp.value === ""){
        nameError.style.display = "block"
        nameinp.classList.add("err")
        return
    }

    if(!nameRegex.test(nameinp.value)){
        nameError.style.display = "block"
        nameinp.classList.add("err")
        return
    }

        nameinp.classList.remove("err")
        nameError.innerHTML = ""

    if(!surnameRegex.test(lastnameinp.value)){
        lastnameError.style.display = "block"
        lastnameinp.classList.add("err")
        return
    }

    lastnameinp.classList.remove("err")
    lastnameError.innerHTML = ""


    if(!emailRegex.test(emailinp.value)){
        emailError.style.display = "block"
        emailinp.classList.add("err")
        return
    }

    emailinp.classList.remove("err")
    emailError.innerHTML = ""

    if(passinp.value === ""){
        passError.style.display = "block"
        passinp.classList.add("err")
        return
    }

    passinp.classList.remove("err")
    passError.innerHTML = ""

    console.log(e)
}