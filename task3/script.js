const trafficLightEl = document.querySelector('#trafficLight1');
const trafficLightE2 = document.querySelector('#trafficLight2');
const trafficLightE3 = document.querySelector('#trafficLight3');

function makeGreen() {
    trafficLightEl.style.background = ('green');
    trafficLightE2.style.background = ('black');
    trafficLightE3.style.background = ('black');
}

trafficLightEl.addEventListener('click', makeGreen);

function makeYellow() {
    trafficLightE2.style.background = ('yellow');
    trafficLightEl.style.background = ('black');
    trafficLightE3.style.background = ('black');
}

trafficLightE2.addEventListener('click', makeYellow);

function makeRed() {
    trafficLightE3.style.background = ('red');
    trafficLightE2.style.background = ('black');
    trafficLightEl.style.background = ('black');
}

trafficLightE3.addEventListener('click', makeRed);