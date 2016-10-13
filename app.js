	
	// Function Name : calculateArea, where argument is r
	function calculateArea(r) {
		var PI = 3.14;
		var c_area = PI*r**2;
		// To display the value of area of circle, if the radius is equal to 7
		console.log("Area of Circle, if Radius is 7 = " + Math.round(c_area));
		return c_area;
	}
	calculateArea(7);
