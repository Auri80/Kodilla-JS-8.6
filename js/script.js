
 function getTriangleArea(a, h) {
	 if (a <=0  || h <=0) {
		 return 'Nieprawidłowe dane'
	}
	 else {
	 return a*h/2
	}	
}

console.log(getTriangleArea(10, 6))

var triangle1Area = getTriangleArea(8, 4);
var triangle2Area = getTriangleArea(12, 7);
var triangle3Area = getTriangleArea(9, 10);

console.log(getTriangleArea(8, 4));
console.log(getTriangleArea(12, 7));
console.log(getTriangleArea(9, 10));
