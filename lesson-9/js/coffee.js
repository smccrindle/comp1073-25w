const output = document.querySelector('#output');

/* STEP 1: Instead of a constructor function, let's try a JavaScript class called 'Coffee' */
class Coffee {
    // Class properties
    size;
    isDecaf;
    // Class constructor
    constructor(size, isDecaf) {
        this.size = size;
        this.isDecaf = isDecaf;
    };
    // Class methods
    serveIt() {
        // Create an IMG element
        const cup = document.createElement("img");
        // Set image path
        let cupImage = "images/coffee-cup.svg";
        // Determine if coffee is decaf
        let decaf;
        if(this.isDecaf === true) {
            // Grab the green coffee cup image instead
            cupImage = "images/coffee-cup-green.svg";
            decaf = "decaffeinated";
        } else {
            decaf = "caffeinated";
        }
        // Set src attribute
        cup.setAttribute("src", cupImage);
        // Set the size of the IMG according to coffee size
        let cupSize;
        switch (this.size) {
            case "small":
                cupSize = "100";
                break;
            case "medium":
                cupSize = "125";
                break;
            case "large":
                cupSize = "150";
                break;
            case "extralarge":
                cupSize = "200";
                break;
            default:
                cupSize = "125";
        };
        cup.setAttribute("height", cupSize);
        // Set the title of the IMG element to be a description
        let description = `A ${this.size} ${decaf} coffee`;
        cup.setAttribute("title", description);
        // Insert IMG of coffee cup into page
        output.appendChild(cup);
    }
};

/* STEP 2: Instantiate a coffee based on the above constructor function */
let scottsCoffee = new Coffee("large", true);
let karensCoffee = new Coffee("extralarge", false);
let stevesCoffee = new Coffee("small", false);

/* STEP 3: Add a method to the Coffee class called serveIt() */

/* STEP 4: Call up the serveIt() method */

/* STEP 5: Define a subclass of the Coffee class */
class Latte extends Coffee {
    // Class properties
    milkType;
    // Class constructor
    constructor(size, isDecaf, milkType) {
        super(size, isDecaf);
        this.milkType = milkType;
    };
    // Class methods
    latteDesc() {
        alert(`A ${this.size} ${this.isDecaf ? "decaffeinated" : "caffeinated"} latte with steamed ${this.milkType} milk.`);
    };
};
/* STEP 6: Create a new instance of the Latte object */
let scottsLatte = new Latte("medium", false, "almond");

/* STEP 7: Call up the latteDesc() method for the above created Latte instance */

/* STEP 8: Create yet another instance of Latte using the console, and try the latteDesc() method from the subclass, as well as the serveIt() method from the parent class */

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript

// Special thanks to https://openclipart.org/detail/293550/coffee-to-go for the very cool coffee cup SVG
