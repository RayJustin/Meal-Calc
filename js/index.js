// Customer object
var Diner = function(name) {
	this.name = name;
	this.food = [];
}

	Diner.prototype.addDish = function(name) {
		this.food.push(name);
	}

var Dish = function(type, price) {
	this.name = type;
	this.price = price;
}

var Meal = function() {
	this.diners = [];
	this.tip = 0.15;
	this.tax = 0.08;
	this.subtotal = 0
	this.total = 0
}

	Meal.prototype.addDiner = function(name) {
		this.diners.push(name);
	}

	Meal.prototype.calcTotal = function() {
		for (var i = 0; i < this.diners.length; i++) {
			console.log(this.diners[i].name + " ordered:");
			for (var j = 0; j < this.diners[i].food.length; j++) {
				meal.subtotal += this.diners[i].food[j].price
				console.log("  " + this.diners[i].food[j].name + ": " + this.diners[i].food[j].price);
			}
		}
		tax = this.tax * this.subtotal;
		tip = this.tip * this.subtotal;
		this.total = this.subtotal + tax + tip;
	}

// Create a Meal object to use //
var meal = new Meal();

// Creates new diners
var bruce = new Diner("Bruce");
var tony = new Diner("Tony");
var thor = new Diner("Thor");

// Creates new dish objects //
var dish1 = new Dish("Spaghetti", 12.99);
var dish2 = new Dish("Chicken Alfredo", 10.79);
var dish3 = new Dish("Salad", 2.99);
var dish4 = new Dish("Drink", 1.89)

// Adds dishes to each diner //
bruce.addDish(dish1);
bruce.addDish(dish3);
bruce.addDish(dish4);

tony.addDish(dish2);
tony.addDish(dish4);

thor.addDish(dish1);
thor.addDish(dish3);

// Adds diners to the meal object //
meal.addDiner(bruce);
meal.addDiner(thor);
meal.addDiner(tony);

// Calculates the total bill
meal.calcTotal();


// Logs the total bill //
console.log("Subtotal: $" + meal.subtotal);
console.log("Total: $" + meal.total);

// Splits the total by the number of diners //
var splitBill = (meal.total / meal.diners.length);
console.log("Each diner owes: $" + splitBill.toFixed(2));



