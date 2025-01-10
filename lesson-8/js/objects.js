const output = document.getElementById('output');

/* STEP 1: Create an object (looks a lot like declaring a variable, but with empty braces), then open this page in a browser and enter 'person' in the console */


/* STEP 2a: Add other data items to the above object, like name, age, gender, and interests */

/* STEP 2b: Enter the following directly into the console:
    person.name[0]
    person.age
    person.gender
    person.interests[0]
*/

/* STEP 3: Add a simple function (now called a method in this context) to the above object called "greeting" that creates an alert dialog, then type person.greeting() into the console */

/* STEP 4: Add a more complicated function to the object that describes the person, their age, gender, and interests in a string that is output to an alert dialog */

// The object above is called an 'object literal' - in that we build each part of the object manually, rather than instatiating it from a class (which we will cover later). Objects can be easier to work with than arrays, as you can name each element

/* STEP 5a: Dot syntax allows you to access the parts of an object - the first part is the namespace, and subsequent parts are used to access things encapsulated within the object. Access the first name, last name, and age of the person object, and put it inside the <p id="output"></p>. */


/* STEP 5b: Update the above greeting() function inside the person object to return the string, instead of the alert(). */


/* STEP 6a: An object can even contain another object - update object person above to include a name object. */

/* STEP 6b: Note how this breaks the greeting function - update the greeting function to use this sub-namespace */


/* STEP 7: You can also use bracket notation, just like an array - objects that are built this way are often referred to as associative arrays */


/* STEP 8a: You can also set members of an object - try changing the person's name, and age */

/* STEP 8b: Bracket notation allows you to dynamically refer to property names. Create a function below that accepts a property name as an argument, then console.log() that property value. Try it out! */


/* STEP 9a: It it also possible to add new members to an object. Type person.eyes = "YOUR_EYE_COLOUR_HERE" into the console - and then type person.eyes */


/* STEP 9b: Add a new function called 'goodbye' to the person object and try it by typing person.goodbye into the console */


/* STEP 10: We can also dynamically set both names and values for objects (using bracket syntax)… */


/* STEP 11a: 'this' is very useful - it allows us to refer to the object in question, specifically. This will become much clearer later in the course. Create two new objects, each with a name, and a function that outputs the name */


/* STEP 11b: Call up both person1.hello() and person2.hello() in the console to see how 'this' is specific to each object */

// You have already been using objects all along:
let myString = 'Words, words, words.'; // this creates an instance of the class String
const elem = document.getElementById('output'); // this accesses the Document object, which is created (instantiated) when the browser opens the HTML page

// Next, open up oop.html and we will delve a bit deeper into JavaScript objects.

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics
