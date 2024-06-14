const pwd = document.querySelector("#pwd");
const confirmPwd = document.querySelector("#confirmPwd");

confirmPwd.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
    if (pwd.value !== confirmPwd.value) {
        message.textContent = "❗Key Phrases DO NOT MATCH!";
        message.style.visibility = "show";
        confirmPwd.style.backgroundColor = "#fff0f3";
        confirmPwd.value = "";
        confirmPwd.focus();
    } else {
        message.style.display = "none";
        confirmPwd.style.backgroundColor = "#fff";
        confirmPwd.style.color = "#000";
    }
}
