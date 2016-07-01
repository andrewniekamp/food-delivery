//Back-end
function Pizza() {
  this.pizzaSize = false;
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

Pizza.prototype.price = function() {
  this.pizzaPrice = this.pizzaToppings.length * 1.5;
  return this.pizzaPrice;
}

//Front-end
$(function() {

});
