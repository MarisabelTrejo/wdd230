const lastUpdated = document.getElementById("modified");
const Year = document.getElementById("year");

const d = new Date();
let presentYear = d.getFullYear();

let LastModif = new Date(document.lastModified);

lastUpdated.textContent = LastModif;

Year.textContent += presentYear;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});