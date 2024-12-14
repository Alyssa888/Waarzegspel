console.log("Hallo")

// Selecteer knoppen
const liefdeKnop = document.getElementById('liefdeKnop');
const toekomstKnop = document.getElementById('toekomstKnop');
const drankjeKnop = document.getElementById('drankjeKnop');

// Selecteer afbeeldingen en berichten
const hartjes = document.getElementById('hartjes');
const sparkles = document.getElementById('sparkles');
const blauwdrankje = document.getElementById('blauwdrankje');

const liefdebericht = document.getElementById('liefdebericht');
const toekomstbericht = document.getElementById('toekomstbericht');
const drankjebericht = document.getElementById('drankjebericht');

// Verberg alles
function verbergAlles() {
    hartjes.classList.add('hidden');
    sparkles.classList.add('hidden');
    blauwdrankje.classList.add('hidden');

    liefdebericht.classList.add('hidden');
    toekomstbericht.classList.add('hidden');
    drankjebericht.classList.add('hidden');
}

// Functies voor knoppen
function toonHartjes() {
    verbergAlles();
    hartjes.classList.remove('hidden');
    liefdebericht.classList.remove('hidden');
}

function toonSparkles() {
    verbergAlles();
    sparkles.classList.remove('hidden');
    toekomstbericht.classList.remove('hidden');
}

function toonDrankje() {
    verbergAlles();
    blauwdrankje.classList.remove('hidden');
    drankjebericht.classList.remove('hidden');
}


// Voeg event listeners toe aan de knoppen
liefdeKnop.addEventListener('click', toonHartjes);
toekomstKnop.addEventListener('click', toonSparkles);
drankjeKnop.addEventListener('click', toonDrankje);


//* Ik heb ChatGPT gebruikt om een probleem op te lossen in mijn code, dit is de link: https://chatgpt.com/share/67574517-ef84-800e-b880-edab6103cbca


const audio = new Audio("images/magic_sound.mp3");
// Bron: https://pixabay.com/sound-effects/charming-twinkle-sound-for-fantasy-and-magic-250240/ ,audio
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        audio.play();
    });
});
// Bronnen: https://forum.freecodecamp.org/t/linking-an-eventlistener-to-multiple-buttons/333174 en https://dev.to/shantanu_jana/how-to-play-sound-on-button-click-in-javascript-3m48 (for each audio)


// Selecteer het afbeeldingselement
const timeImage = document.getElementById('timeImage');

// Haal het huidige uur op
const datum = new Date().getHours();

// Bepaal de tijd en verander de afbeelding
if (datum < 12) {
    console.log('ochtend');
    timeImage.src = 'images/ochtend.png';
    timeImage.alt = 'Een afbeelding van de ochtend';
} else if (datum >= 12 && datum < 18) {
    console.log('middag');
    timeImage.src = 'images/middag.png';
    timeImage.alt = 'Een afbeelding van de middag';
} else {
    console.log('avond');
    timeImage.src = 'images/nacht.png';
    timeImage.alt = 'Een afbeelding van de avond';
}

// Bron: Janno (if else met tijd) en https://chatgpt.com/share/675acb90-e694-800e-a5ca-a4969fd86d86 (om de code verder aan te vullen)

// Afbeelding bronnen ramen
// Ochtend: https://freepngtransparent.com/wp-content/uploads/2023/03/Sun-Png-198.png

// Middag: https://www.vecteezy.com/png/9302650-white-cloud-clipart-design-illustration

// Nacht: https://pngimg.com/image/25381

// Raam: https://clipart-library.com/clipart/1973165.htm
