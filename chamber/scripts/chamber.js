const lastUpdated = document.getElementById("modified");
const Year = document.getElementById("year");

const d = new Date();
let presentYear = d.getFullYear();

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

