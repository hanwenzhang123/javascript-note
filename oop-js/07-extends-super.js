//keyword: extends
//move the duplicated code to a seperate stand along class, here is the class Pet as the parent clas

//keyword: super()
//pass in the same constructor as parent class
//reference to the parent class, where we extends from, here is pet


class Pet {			//parent class
	constructor(name, age) {
		console.log('IN PET CONSTRUCTOR!');
		this.name = name;
		this.age = age;
	}
	eat() {
		return `${this.name} is eating!`;
	}
}

class Cat extends Pet {		//child relationship extends to Pet
	constructor(name, age, livesLeft = 9) {
		console.log('IN CAT CONSTRUCTOR!');
		super(name, age);		//reference to the super()
		this.livesLeft = livesLeft;
	}
	meow() {
		return 'MEOWWWW!!';
	}
}

class Dog extends Pet {		//child relationship extends to Pet
	bark() {
		return 'WOOOF!!';
	}
	eat() {
		return `${this.name} scarfs his food!`;		////child first then parent then prototype
	}
}

  
