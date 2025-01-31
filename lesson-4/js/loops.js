let courses = ['Intro to Web Programming', 'Client-Side JavaScript', 'Bitmap & Vector Graphics', 'Web UI Design with CSS', 'Relational Database'];
let courseList = 'My courses this term are: ';
const msg = document.querySelector('#courses');
/* STEP 1a: A simple FOR loop
A simple loop of this structure needs an initializer (counter variable), an exit conditional, and and incrementor/decrementor */
for (let i = 0; i < courses.length; i ++) {
	// Check to see if we are on the last course in the list
	if (i === courses.length - 1) {
		// Finish the sentence properly
		courseList += `and ${courses[i]}.`;
	} else {
		// Add each course to the sentence
		courseList += `${courses[i]}, `;
	}
};
msg.textContent = courseList;
// STEP 1b: Add a conditional for the last item in the array so we can finish the sentence with a period.

/* STEP 2: Exit a loop with break */
let cities = ['Toronto', 'Montreal', 'Ottawa', 'Vancouver', 'Halifax'];
const result = document.querySelector('#searchResult');
const input = document.querySelector('input');
const btn = document.querySelector('button#cities');

btn.addEventListener('click', function() {
	let searchName = input.value;
	// console.log(searchName);
	input.value = '';
	input.focus();
	/* STEP 2a: Create a FOR loop to iterate through the cities array */
	for (let i = 0; i < cities.length; i ++) {
		// console.log(cities[i]);
		/* STEP 2b: Build an IF/ELSE conditional that compares searchName with cities[i] */
		if (searchName === cities[i]) {
			// Message that the city in the search was in the array
			result.textContent = `${searchName} is in the cities array.`;
			// We found the city, so stop looking and exit the loop
			break;
		} else {
			result.textContent = `${searchName} is NOT the cities array.`;
		};
	};
});


/* STEP 3: Skip a loop interation with continue */
const numberList = document.querySelector('#numberList');
let num = 50;
for (let i = 1; i <= num; i ++) {
	let sqRoot = Math.sqrt(i);
	/* STEP 3a: Build an IF statement that checks whether the square root of the number is NOT an integer */
	if (Math.floor(sqRoot) !== sqRoot) {
		/* STEP 3b: If the square root of the number is not an integer, we don't want to output it to the paragraph, so skip the rest of the instructions inside this loop and go back up to the FOR, using 'continue' */
		continue;
	};
	numberList.textContent += i + ' ';
}

/* STEP 4: WHILE and DO/WHILE loops */

let j = 0;
let outputWhile = '';
/* STEP 4a: WHILE loop to iterate through the cities array (created above in STEP 2) */
while (j < cities.length) {
	outputWhile += cities[j];
	j ++;
};
console.log(outputWhile);

let k = cities.length - 1;
var outputDo = '';
/* STEP 4b: DO/WHILE loop - grab the above IF/ELSE and the 'i++', then create the very same output with DO/WHILE (uncomment the above 'i = 0', first) */
do {
	outputDo += cities[k];
	k --;
} while (k >= 0);

console.log(outputDo);
/* …now try to loop through the same array backwards! */

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code
