const output = document.querySelector('#output');

/* STEP 1: Create an object (looks a lot like declaring a variable, but with empty braces), then open this page in a browser and enter 'Coffee' in the console */

/* STEP 2: Instatiate a coffee based on the above constructor function */

/* STEP 3: Refresh the page, and in the console, begin to call a method on scottsCoffee by typing 'scottsCoffee.' - look at all the members and methods */

/* STEP 4: Enter into the console, scottsCoffee.valueOf() and look at the result. scottsCoffee doesn't have such a method, and neither does the constructor function, 'Coffee'. But the 'Object' object does - so through inheritance, scottsCoffee has access to the method, valueOf(). */

/* STEP 5a: Each object has a prototype member that isn't really directly accessible, but it can be referenced using the deprecated '__proto__' - using a double underscore on either side of the word 'proto'. Try it - scottsCoffee.__proto__.__proto__ */

/* STEP 5b: The more modern way to do this is … Object.getPrototypeOf(scottsCoffee) - try THIS in the console */

/* STEP 5c: EVERYTHING is an object in JavaScript. Try accessing the prototype property of Coffee (which even though it is a constructor function it is still an object) with Coffee.prototype in the console. Then try Object.Prototype */

/* STEP 6a: Let's circle back to create() - use scottsCoffee to create a new object instance - one based on scottsCoffee. */

/* STEP 6b: See how this new object inherits from the prototype with richsCoffee.__proto__ in the console. */

/* STEP 7a: Each constructor function includes a prototype property with a value equal to an object that contains a constructor property. Try it out by typing scottsCoffee.constructor and richsCoffee.constructor */

/* STEP 7b: Since constructor is also a function, you can use it to create a new object instance - try it! */

/* STEP 7c: Attempt via the console to access the new object's properties - kathysCoffee.size, kathysCoffee.isDecaf, etc. */

/* STEP 7d: Now see if the new object can access the description() method… */

/* STEP 7e: The constructor has other features - try using it to discover the name of an instance's constructor by typing kathysCoffee.constructor.name into the console. */

/* STEP 8a: We can modify the prototype property of a constructor function - let's add another method to Coffee */

// What's really interesting about the above code is that every instance based on the Coffee constructor has been updated due to prototypical inheritance!

/* STEP 8b: Now let's call up this method on one or more of our Coffee instances from the console (scottsCoffee, richsCoffee, or kathysCoffee). */

// Next, open up coffee.html and we will see how to leverage object inheritance with JavaScript classes.

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes

// Special thanks to https://openclipart.org/detail/293550/coffee-to-go for the very cool coffee cup SVG