//Backend Logic
var sIze;
var extraTopping;
var cost;
var newOrder;
var sizeText;

function Pizza(size, topping) {
  this.size = size;
  this.topping = topping;

};
Pizza.prototype.calculateTotal = function() {
  return sIze + extraTopping;
}
//User Interface

$(document).ready(function() {
  $(".formOne").submit(function(event) {
    $("#receipt").show();
    event.preventDefault()
    sIze = parseInt($("select#size").val());
    sizeText = $("select#size").val();
    extraTopping = parseInt($("select#topping").val());
    newOrder = new Pizza(sIze, extraTopping);
    cost = newOrder.calculateTotal();
    $("#totalPrice").text("Your total order price is:" + " " + "$" + cost);

    if (sIze === 0 && extraTopping === 0) {
      alert('Please select a size of pizza and topping');
    } else if (sIze === 20 || sIze === 15 || sIze === 10 && extraTopping === 0) {
      $("select#size").val();
    }
  })

});
