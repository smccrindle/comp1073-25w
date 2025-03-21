/* STEP 2: Reference the HEADER and the SECTION elements with variables */
const header = document.querySelector("header");
const section = document.querySelector("section");

// STEP 3a: Create the asynchronous function populate()
async function populate() {
    // Introducing JavaScript Object Notation (JSON): https://json.org/
    // STEP 4: Store the URL of a JSON file in a variable */
    const requestURL = "https://smccrindle.github.io/comp1073lesson10/js/i-scream.json";
    // STEP 5: Use the new URL to create a new request object
    const request = new Request(requestURL);
    // STEP 6: Make a network request with the fetch() function, which returns a Response object
    const response = await fetch(request);
    // STEP 7: Capture the returned Response object and covert to a JSON object using json()
    const iScream = await response.json();
    // STEP 8: Output the iScream JSON object to the console 
    console.log(iScream);
    // STEP 9a: Invoke the populateHeader function here, then build it below
    populateHeader(iScream);
    // STEP 10a: Invoke the showTopFlavors function here, then build it below
    showTopFlavors(iScream);
};

// STEP 3b: Call the populate() function
populate();

/* STEP 9b: Build out the populateHeader() function */
function populateHeader(jsonObj) {
    // Create the H1 element
    let headerH1 = document.createElement("h1");
    // Grab the company name from the JSON object and use it for the text node
    headerH1.textContent = jsonObj.companyName;
    // Inject the complete H1 element into the DOM, inside the HEADER
    header.appendChild(headerH1);
};
/* STEP 10b: Assemble the showTopFlavors() function */
function showTopFlavors(jsonObj) {
    // STEP 10c: Attache the JSON topFlavors object to a variable
    let topFlavors = jsonObj.topFlavors;
    // STEP 10d: Loop through the topFlavors object
    for (let i = 0; i < topFlavors.length; i ++) {
        // STEP 10e: build HTML elements for the content
        let article = document.createElement("article");
        let h2 = document.createElement("h2");
        let img = document.createElement("img");
        let ul = document.createElement("ul");

        // STEP 10f: Set the textContent property for each of the above elements (except the UL), based on the JSON content
        h2.textContent = topFlavors[i]["name"];
        img.setAttribute("src", `images/${topFlavors[i]["image"]}`);
        // STEP 10g: Build a loop for the ingredients array in the JSON
        let ingredients = topFlavors[i]["ingredients"];
        for (let j = 0; j < ingredients.length; j ++) {
            let listItem = document.createElement("li");
            listItem.textContent = ingredients[j];
            // add the ingredient to the UL
            ul.appendChild(listItem);
        };
        // STEP 10h: Append each of the above HTML elements to the ARTICLE element
        article.appendChild(h2);
        article.appendChild(img);
        article.appendChild(ul);
        // STEP 10i: Append each complete ARTICLE element to the SECTION element
        section.appendChild(article);
    };
};
// STEP 11: The instructor will edit the JSON file - refresh your page to see the updated content

// STEP 12: Change the URL in STEP 3 to point to the JSON file in the local /js folder in order to prepare for today's lab

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON

// A special thanks to https://openclipart.org/detail/285225/ice-cream-cones for the awesome ice cream cone illustrations
