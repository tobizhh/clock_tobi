//explain purpose of each hand//
const hourHand = document.querySelector('.hour-hand'); 
const minuteHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');


//function to sync hands with time//
function setDate() {
    const now = new Date(); //current date and time//
    //calculate seconds and their rotation in degres//
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90; //calculate to degrees and offset by 90 to align start position//
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`; //rotation of second-hand//
    
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

//intervall to update every second//
setInterval(setDate, 1000);

//call function//
setDate();
