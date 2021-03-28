const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    grettings = document.querySelector(".js-grettings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(name) {
    localStorage.setItem(USER_LS, name);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGretting(currentValue);
    saveName(currentValue);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}


function paintGretting(text) {
    form.classList.remove(SHOWING_CN);
    grettings.classList.add(SHOWING_CN);
    grettings.innerText = `Hello ${text}`;
}


function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser == null) {
        // she is not
        askForName();
    } else {
        // she is
        paintGretting(currentUser);
    }

}

function init() {
    loadName();
}

init();