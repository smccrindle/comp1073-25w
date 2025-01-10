/*
STEP 1: Connect to the same wireless network as the Hue Bridge (SSID: HueNet / Password: Password01). Optionally you can connect your phone to the same network, and using the Philips Hue App, determine the IP address to the Hue Bridge)

STEP 2: Connect to the Web app on the Hue Bridge at http://192.168.1.41/debug/clip.html


STEP 3a: In the URL: field of the CLIP API Debugger form, type /api

STEP 3b: In the Message Body: field of the same form, type {"devicetype":"my_hue_app[studentnumber]"}, then click on the 'POST' button above

STEP 3c: You will get a message in the Command Response: field consisting of JSON - and it will ask you to go push the button on the Hue Bridge - please get up from your seat and push the button on the bridge once (or have your professor do it)

STEP 3d: Return to your seat, and click on the 'POST' button again - you will then get a JSON response in the Command Response: field containing your unique username - paste your username here (it is long):


STEP 4: Get information about your light

STEP 4a: Update the URL: field to read http://192.168.1.41/api/[your-user-name]/lights/[your-light-number]

STEP 4b: Clear out the Message Body: field and click on the 'GET' button - note the JSON response in the Command Response: field with information about your specific light


STEP 5: Controlling your light

STEP 5a: Update the URL: field to add the /state at the end of the URL

STEP 5b: Add the following JSON in the Message Body: field - {"on":false}

STEP 5c: Click on the 'PUT' button and watch your light turn off

STEP 5d: Add the following JSON in the Message Body: field - {"on":true, "sat":254, "bri":254,"hue":10000}

STEP 5e: Click on the 'PUT' button to see the effect

STEP 6: Try changing some of the JSON object values (saturation and brightness range from 0-254, and the hue value ranges from 0-65535), then click the 'PUT' button again
*/

// STEP 7: Open this file in a browser tab, then come back to this script and configure it to work for your particular light

// STEP 7a: Add the URL for the bridge
const bridge = "";
// STEP 7b: Add a constant for your specific username
const user = "";
// STEP 7c: Add another constant for your light number
const lightNum = "";
// STEP 7d: Just like the debugger app that runs on the bridge, we need to choose a method to use to interact with the API - use 'put'
let method = "";
// STEP 7e: Build out the URL for the RESTful call to the API, combining the bridge URL, user, and lightNum - building out the correct path in the format http://192.168.0.0/api/[username]/lights/[lightNum]/state

const html = document.querySelector('html');
const hueSlider = document.getElementById("hue");

// STEP 9a: Examine the below event listener for the range slider
hueSlider.addEventListener("change", function() {
	var newHue = this.value * 1000;
	updateScreenColor(newHue);
	var commands = '{ "hue" : ' + newHue + ', "sat" : 254, "bri" : 254, "on" : true }';
	// STEP 9b: Invoke the completed updateLight() function when the hueSlider value changes
	
}, false);

// Function that changes the page color based on the value of the slider
function updateScreenColor(newHue){
	cssHue = Math.round(newHue/48000 * 240); // "Both 0 and 65535 are red, 25500 is green and 46920 is blue." (https://developers.meethue.com/develop/hue-api/lights-api/)
	bgCSSValue = "hsl(" + cssHue + "deg, 100%, 50%)";
	console.log(bgCSSValue);
	html.style.backgroundColor = bgCSSValue;
}

// STEP 8: Function to update the hue light by passing JSON to the bridge

	// STEP 8a: Use the fetch() method
	
	// STEP 8b: Chain .then after the fetch(), and collect the response from the server (bridge)
	

// STEP 10: Look up the Philips Hue API to learn about other ways to work with the Hue lighting products - I hope you had fun!
