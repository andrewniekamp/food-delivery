//Back-end
function Pizza() {
  this.pizzaSize = false;
  this.pizzaToppings = {
    cheese: true,
    pepperoni: false,
    sausage: false,
    mushroom: false,
    onion: false,
    olive: false,
    ham: false,
    pineapple: false,
    greenPepper: false,
  };
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
  var price = 0;
  $.each(this.pizzaToppings, function(topping, existence) {
    if (existence === true) {
      price += 1.5;
    }
  })
  this.pizzaPrice = price;
}

//Front-end
$(function() {

  // newPizza.pizzaTotal();
});
