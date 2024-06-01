const lastUpdated = document.getElementById("modified");
const Year = document.getElementById("year");
const modeButton = document.getElementById("mode");
const body = document.getElementById("body");
const header = document.getElementById("header");
const nav = document.getElementById("nav");
const d = new Date();
let presentYear = d.getFullYear();
const section = document.getElementsByTagName("section");

let LastModif = new Date(document.lastModified);

lastUpdated.textContent = LastModif;

Year.textContent += presentYear;

const navigation = document.getElementById("nav");
const hamButton = document.getElementById('menu');

hamButton.addEventListener('click', () => {
    console.log("working")
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

modeButton.addEventListener('click', function () {


    body.classList.toggle('dark');
    header.classList.toggle('dark');
    nav.classList.toggle('dark')
    section.classList.toggle('dark')


})