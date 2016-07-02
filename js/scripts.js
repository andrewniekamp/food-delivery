//Back-end
function Pizza(size) {
  this.pizzaSizeModifier = size;
  this.pizzaToppings = ["Custom: "];
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
  this.pizzaPrice = this.pizzaPrice.toFixed(2);
}

var pizzaBase = 12;
var orderTotal = 0;
var orderSideBar = false;

//Front-end
function addPizza(pizza) {
  orderTotal += parseFloat(pizza.pizzaPrice);
  $("#empty").hide();
  $("#price-output").text(pizza.pizzaPrice);
  $("#order-items").append("<li>");
  pizza.pizzaToppings.forEach(function(topping) {
    $("#order-items li").last().append(topping + " ");
  })
  $("#order-items li").last().append(" <br>  for: $" + pizza.pizzaPrice + "</li>");
  $("#price-output").text("Order Total: $" + parseFloat(orderTotal).toFixed(2));
  $("#order-listing-total").text("Order Total: $" +  parseFloat(orderTotal).toFixed(2));

  $("#clear-button").click(function() {
    $("#order-items").html("<li id=\"empty\">Empty!</li>");
    orderTotal = 0;
    $("#price-output").text("Order Total: $0.00");
    $("#order-listing-total").text("Order Total: $0.00");
  });
}

$(function() {
  //Why can't this submit when selecting form ID?
  $("#add-alfredo").click(function() {
    var alfredo = new Pizza();
    alfredo.pizzaToppings = ["Alfredo Special"]
    alfredo.pizzaPrice = 18.99;
    addPizza(alfredo);
  });

  $("#add-pepperoni").click(function() {
    var pepperoni = new Pizza();
    pepperoni.pizzaToppings = ["Classic Pepperoni"]
    pepperoni.pizzaPrice = 15.52;
    addPizza(pepperoni);
  });

  $("#add-supreme").click(function() {
    var supreme = new Pizza();
    supreme.pizzaToppings = ["Supreme"]
    supreme.pizzaPrice = 19.99;
    addPizza(supreme);
  });

  $("form#topping-form").submit(function(event) {
    event.preventDefault();
    var sizeInput = $("#custom-size").val();
    var customPizza = new Pizza(sizeInput);
    $("input:checkbox[name=custom]:checked").each(function() {
      customPizza.pizzaToppings.push($(this).val());
    })
    customPizza.pizzaTotal();
    addPizza(customPizza);
  });

  $("#vertical-text").click(function() {
    if (orderSideBar === false) {
      console.log(orderSideBar);
      $("#sidebar").animate({
        left: 0,
      });
      orderSideBar = true;
      console.log(orderSideBar);
    } else {
      console.log(orderSideBar);
      $("#sidebar").animate({
        left: -205,
      });
      orderSideBar = false;
      console.log(orderSideBar);
    }
  });
});
