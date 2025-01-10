// STEP 1: Declare and initialize variables
// STEP 1a: Grab the parts of the DOM that we need to build the invoice

// STEP 1b: Build the products array in the format 'Product Name:0.00'

// STEP 1c: Set up invoiceTotal variable - start at zero

// STEP 1d: Declare the itemRow and the itemDetail array;

// STEP 2: Build a loop to iterate through the products array

	// STEP 3: Break apart the product name from the price for each item with split()

	// STEP 4: Now we have an array as an element of an array - set the second array element to the product price (as type number)

	// STEP 5: Add the price of this product to the invoice total

	// STEP 6: Capture each product name and price as variables 

	// STEP 7: Create a TR element for this product and price in the invoice table

	// STEP 8: Build the string that contains two TD elements each containing one of the item description, and the item price

	// STEP 9: Set the above string as the innerHTML of the new TR element, and then append the new element to the table body (var productList)

// STEP 10: Set the total cost of the invoice as the textContent of the TD in the TFOOT (var totalData), rounding the number to two decimal places
