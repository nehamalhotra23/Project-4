//Backend Logic
var sIze;
var extraTopping;
var newOrder = new Pizza();
var toppingsText;

function Pizza() {
  this.size = sIze;
  this.price = 0;
};
Pizza.prototype.calculateTotal = function() {
  this.price += 0;
  return this.price;

}
//User Interface

$(document).ready(function() {
  $("#placeOrder").click(function(event) {
    event.preventDefault()
    sIze = $("#size").val();
    extraTopping = $("#topping").val();
    this.sIze = size;

    if (extraTopping === "Cheese" || extraTopping === "Pepperoni" || extraTopping === "Artichoke" && sIze === "Large") {
      this.price = 10;
      $("#totalprice").text(sIze + " " + extraTopping + " " + "$" + this.price);
    } else if (extraTopping === "Pepperoni" || extraTopping === "Artichoke" || extraTopping === "Cheese" && sIze === "Medium") {
      this.price = 15;
      $("#totalprice").text(sIze + " " + extraTopping + " " + "$" + this.price);
    } else if (extraTopping === "Pepperoni" || extraTopping === "Artichoke" || extraTopping === "Cheese" && sIze === "Regular") {
      this.price = 20;
      $("#totalprice").text(sIze + " " + extraTopping + " " + "$" + this.price);
    }
    return this.price;

  });

});
