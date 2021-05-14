class Color {			//capitalize, pattern for object
	constructor(r, g, b, name) {		//always adds in a constructor, it will execute whenever a new color is created
		this.r = r;		// always use 'this' to refer to the new object
		this.g = g;
		this.b = b;
		this.name = name;
	}
	greet() {			//this works like Color.prototype.greet = function (){}, but now we do not need that prototype now
		return `Hello from ${this.name}!`;		//white.greet()
	}
	innerRGB() {	
		const { r, g, b } = this;
		return `${r}, ${g}, ${b}`;		//'255, 255, 255'
	}
	rgb() {				//white.rgb()
		return `rgb(${this.innerRGB()})`;		//this.innerRGB() is a function
	}
	rgba(a = 1.0) {
		return `rgba(${this.innerRGB()}, ${a})`;
	}
	hex() {
		const { r, g, b } = this;
		return (
			'#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
		);
	}
}
const red = new Color(255, 67, 89, 'tomato');
const white = new Color(255, 255, 255, 'white');

 
  
