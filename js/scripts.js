//Back-end
function Pizza() {
  this.pizzaSizeModifier = 1;
  this.pizzaToppings = [1,2,3];
}

function Salad() {
  this.saladType = false;
  this.saladPrice = 0;
}

function Side() {
  this.sideType = false;
  this.sidePrice = 0;
}

function Dessert() {
  this.dessertType = false;
  this.dessertPrice = 0;
}

Pizza.prototype.pizzaTotal = function() {
  this.pizzaPrice = pizzaBase + this.pizzaToppings.length * 1.5;
  this.pizzaPrice *= this.pizzaSizeModifier;
}

var pizzaBase = 12;

//Front-end
$(function() {

  // newPizza.pizzaTotal();
});
