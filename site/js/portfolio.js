const avatar = document.querySelector('.avatar img');
avatar.addEventListener('click', () => {
    avatar.src = 'image/avatar.svg'
})

const button = document.querySelector('.button');
const developerName = document.getElementById('name');
const descriptionContainer = document.querySelector('.description');
const pinkElements = document.querySelectorAll('.pink-text');
const links = document.querySelectorAll('a');
button.addEventListener('click', () => {

    let changeLinksColor = prompt("Choose a color for links:");
    for (let el of links) {
        el.style.color = changeLinksColor;
    }

    let changePink = prompt("Choose a color instead of pink text:");
    for (let el of pinkElements) {
        el.style.color = changePink;
    }
    descriptionContainer.style.backgroundColor = prompt("Choose a color of background:");
    developerName.innerHTML = prompt("Enter your name:");
    developerName.style.color = "white";



})
const listToModify = document.querySelectorAll('#front-dev-tools li');
const button1 = document.querySelector('.button1');
const tech = ['VSCode', 'Terminal', 'JAvaScript'];

button1.addEventListener('click', () => {
    for (let i = 0; i < listToModify.length; i++) {
        listToModify[i].innerHTML = tech[i];
    }
})

const newElementField = document.querySelector('.newElement');
const skills = document.querySelector('.skill ul');
const button2 = document.querySelector('.button2');
button2.addEventListener('click', () => {
    const newElement = document.createElement('li');
    newElement.innerHTML = newElementField.value;
    skills.append(newElement);
})


