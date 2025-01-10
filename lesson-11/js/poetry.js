// STEP 1: Grab the HTML elements we need for the interaction


// STEP 2: Build out the event handler for the SELECT element


// STEP 3: Construct updateDisplay() function

    // STEP 4: Declare and initialize URL to point to text file(s)
    

    // STEP 5: Build fetch() with promises
    // STEP 5a: Use fetch and pass in the URL
    
    // STEP 5b: The fetch() will return a promise - which when received from the server, the promise's then() event handler is called using the response
    
        // STEP 5c: If the response is not okay, throw an error containing the HTTP status
        
        
        
        // STEP 5d: If the response is okay, the handler fetches the response and returns it as text with response.text()
        
    
    // STEP 5e: Once response.text() has returned a value, the then() handler can pass in the text string to the textContent property of the poemDisplay element
    
    // STEP 5f: Finish the chain with a catch() to grab any errors that may have been thrown by the promise, and display them on the page


// STEP 6: Initialize the app with Verse 1

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data

