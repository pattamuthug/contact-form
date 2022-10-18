const form = document.getElementsByClassName("form");
const userName = document.getElementById("name");
const email = document.getElementById("mail");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const textarea = document.getElementById("textarea");
// const msg = document.querySelectorAll("info");
const btn = document.getElementById("btn");


const nameHandler = () => {
    const user = userName.value;
    let nameFilter = /^[A-Za-z0-9_\s]+$/;
    if (!(nameFilter.test(user) && user.length < 60)) {

        setError(userName, "Invalid name*")
    }
    else {
        setSuccess(userName)
    }
}

const mailHandler = () => {
    let mail = email.value;
    let emailfilter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9])+$/;

    if (!(emailfilter.test(mail))) {
        setError(email, "Invalid mail id*")

    } else {
        setSuccess(email)
    }
}
const numHandler = () => {
    let number = phone.value;
    let numFilter = /^([0-9]{10})+$/;
    if (!(numFilter.test(number))) {
        setError(phone, "Invalid phone number*")
    }
    else {

        setSuccess(phone)
    }
}
const subHandler = () => {
    const sub = subject.value;
    let subFilter = /^[A-Za-z0-9_\s]+$/;
    if (subFilter.test(sub) && sub.length < 40) {
        setSuccess(subject)
    }
    else {
        setError(subject, "Invalid subject*")
    }
}
const textHandler = () => {

    const text = textarea.value;
    const textFilter = /^[A-Za-z0-9_!@#$%^&*():""''?\s]+$/;
    if (textFilter.test(text)) {
        setSuccess(textarea)
    }
    else {
        setError(textarea, "Invalid message*")
    }
}

const validation = () => {
    const msg = document.querySelector("info");
    console.log("clicked");
    msg.className="infoerror";

}

btn.addEventListener("click", (event) => {
    event.preventDefault();
    validation();
})

function setError(input, message) {
    
    const parent = input.parentElement;
    // const small = parent.querySelector("span");
    parent.className = "box error";
    // small.innerText = message;
    return "false";
}

function setSuccess(input) {

    const parent = input.parentElement;
    parent.className = "box success";
    return "true";
}
