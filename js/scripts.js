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
  this.pizzaPrice = this.pizzaPrice.toFixed(2);
}

var pizzaBase = 12;
var orderTotal = 0;
var orderSideBar = false;

//Front-end
$(function() {
  //Why can't this submit when selecting form ID?
  $("form#topping-form").submit(function(event) {
    event.preventDefault();

    var sizeInput = $("#custom-size").val();
    var customPizza = new Pizza(sizeInput);
    $("input:checkbox[name=custom]:checked").each(function() {
      customPizza.pizzaToppings.push($(this).val());
    })
    customPizza.pizzaTotal();
    orderTotal += parseFloat(customPizza.pizzaPrice);
    $("#empty").hide();
    $("#price-output").text(customPizza.pizzaPrice);
    $("#order-items").append("<li>");
    customPizza.pizzaToppings.forEach(function(topping) {
      $("#order-items li").last().append(topping + " ");
    })
    $("#order-items li").last().append(" <br>  for: $" + customPizza.pizzaPrice + "</li>");
    $("#price-output").text("Order Total: $" + parseFloat(orderTotal).toFixed(2));
    $("#order-listing-total").text("Order Total: $" +  parseFloat(orderTotal).toFixed(2));

    $("#clear-button").click(function() {
      $("#order-items").html("<li id=\"empty\">Empty!</li>");
      orderTotal = 0;
      $("#price-output").text("Order Total: $0.00");
      $("#order-listing-total").text("Order Total: $0.00");
    });
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
  })
  // newPizza.pizzaTotal();
});
