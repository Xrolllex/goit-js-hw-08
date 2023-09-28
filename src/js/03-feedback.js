import throttle from 'lodash.throttle';

const form = document.querySelector("form");
const email = document.querySelector("input");
const message = document.querySelector("textarea");
const submit = document.querySelector("button");

const textBox = throttle(event => {
    if (event.target.nodeName === "INPUT") {
        email.value = event.target.value;
    } else {
        message.value = event.target.value;
    }
    const userBox = {
        email: email.value,
        message: message.value
    };
    localStorage.setItem("feedback", JSON.stringify(userBox));
}, 500, { leading: false });

if (localStorage.feedback === undefined) {
    email.value = "";
    message.value = "";
} else {
    email.value = JSON.parse(localStorage.feedback).email;
    message.value = JSON.parse(localStorage.feedback).message;
}

const onLoad = () => {
    const userBox = {
        email: email.value,
        message: message.value
    };
    console.log(userBox);
};

const clearBox = (event) => {
    event.preventDefault();
    if (!email.value || !message.value) {
        alert("Please, complete the application fields");
    } else {
        onLoad();
        localStorage.clear();
        email.value = "";
        message.value = "";
    }
};

form.addEventListener("input", textBox);
submit.addEventListener("click", clearBox);
