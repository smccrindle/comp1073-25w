// STEP 1: Initialize and declare variables


/* STEP 2: Loop 5 times to create the <img> elements */

		/* STEP 3a: Create a new DOM node - an image element */

		/* STEP 3b: Set the src attribute to be the path of one of the images inside the images folder, using setAttribute() */

		/* Append the new image element to the thumbBar div, named in STEP 1 */

		/* STEP 3c: Build event handler for each <img> */


/* STEP 4: Function to change the src of the main <img> */

	// Rewrite the src attribute of the .displayed-img element


/* STEP 5: Event Delegation
Instead of adding event handlers for each image, how about event delegation? Build a click handler on the parent element, and capture each target (and its attributes) from the event object */

	// event.target is the element that was clicked

		// grab the src attribute of the element that was clicked

		// change the main image
		


// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Image_gallery and https://davidwalsh.name/event-delegate
