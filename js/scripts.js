//Back-end
function Pizza(size) {
  this.pizzaSizeModifier = size;
  this.pizzaToppings = [];
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
  //Why can't this submit when selecting form ID?
  $("form").submit(function(event) {
    event.preventDefault();
    
    var sizeInput = $("#custom-size").val();
    var customPizza = new Pizza(sizeInput);
    $("input:checkbox[name=custom]:checked").each(function() {
      customPizza.pizzaToppings.push($(this).val());
    })
    customPizza.pizzaTotal();
    console.log(customPizza.pizzaPrice);
  });
  // newPizza.pizzaTotal();
});
