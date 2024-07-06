const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");
const printSections = document.getElementById("print");
const section = document.querySelector("section");
const menu = document.getElementById("menu");
const url = "https://marisabeltrejo.github.io/wdd230/chamber/data/members.json"
const nav = document.getElementById("nav");
const member = document.getElementById("member");
const modeButton = document.getElementById("mode");
const main = document.querySelector("main");
const header = document.querySelector("header");
const body = document.querySelector("body");
const footer = document.querySelector("footer");
const title = document.querySelectorAll("h2");
const visits = document.getElementById("visits");
const hidden = document.getElementById("hidden");

//Dark mode
modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes(":dark_sunglasses:")) {
        main.style.background = "#000000";
        header.style.background = "#000000";
        footer.style.background = "#000000";
        section.style.background = "#FFFFFF";
        section.style.border = "2px solid white";
        body.style.color = "#FFFFFF";
        modeButton.textContent = ":high_brightness:";
    } else {
        main.style.background = "#FFFFFF";
        header.style.background = "#FFFFFF";
        footer.style.background = "#FFFFFF";
        section.style.background = "#eee"
        body.style.color = "#000000";
        modeButton.textContent = ":dark_sunglasses:";
    }
});
// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.
gridbutton.addEventListener("click", () => {
    // example using arrow function
    display.classList.add("grid");
    display.classList.remove("list");
});
listbutton.addEventListener("click", showList); // example using defined function
function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}
fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(1)
        data.buisness.forEach((repo) => {
            console.log(2)
            let section = `<section class="medium2 large2">
                <h2 class="heading">${repo.name}</h2>
                <div>
                    <img class="bussimage" src="images/${repo.image}">
                    <p>${repo.adresses}</p>
                    <p>${repo.phone}</p>
                    <p>${repo.website}</p>
                    <p>${repo.membership}</p>
                </div>
            </section>`
            display.innerHTML += section;
        });
    })
// event listener for menu button
const navigation = document.getElementById("nav");
const hamButton = document.getElementById('menu');

hamButton.addEventListener('click', () => {
    console.log("working")
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});
