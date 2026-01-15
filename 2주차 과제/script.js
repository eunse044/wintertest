const timeText = document.getElementById('timeText');

setInterval(() => {
    const now = new Date();
    if (now.getSeconds() % 2 === 0) {
        timeText.style.color = '#222';
    } else {
        timeText.style.color = '#00d344';
    }
}, 1000);

const photo = document.getElementById('mainPhoto');
const captionTitle = photo.querySelector('h2'); 
let isBlack = false;

photo.addEventListener('click', () => {
    isBlack = !isBlack;
    
    if (isBlack) {
        photo.style.filter = "grayscale(100%)";
        captionTitle.innerText = "MY FAVORITE ARTIST"; 
    } else {
        photo.style.filter = "none";
        captionTitle.innerText = "N.Flying";
    }
});

const title = document.getElementById('mainTitle');

title.addEventListener('mouseenter', () => {
    title.style.color = '#00d344';
});

title.addEventListener('mouseleave', () => {
    title.style.color = '#222';
});