// Declare and initialize variables
const elem = document.querySelector('p');

// Functions
function random(number) {
    return Math.floor(Math.random()*(number + 1));
}
/* STEP 1a: Event Objects
Modify the below function to allow it to accept the event as a parameter or argument (named "event" in this case), then change the background color of the event.target instead of the document body */
function bgChange() {
    var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndCol;
}
// The target property of the event is a reference to the element that the event was acted upon

/* STEP 1b: Change the element that features the click event listener by modifying the global const declaration at the top of the script to target the <h1> instead */

// Event Listeners/Handlers
elem.addEventListener('click', bgChange);

/* STEP 2a: Prevent Default Behavior
Examine the simple form above in the HTML, then review the following bindings: */

const form = document.querySelector('form');
const email = document.getElementById('email');
const submit = document.getElementById('submit');
const para = document.querySelector('#formErrors');

/* STEP 2b: Create a script to capture the onsubmit event using preventDefault() */

// Next, open up gallery.html...

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events
