function Pizza(size, topping) {
  this.size = size;
  this.topping = topping;
  this.total = 0;
};
Pizza.prototype.calculateTotal = function() {
  this.total = this.size + this.topping;
}
//User Interface

$(document).ready(function() {
  $(".formOne").submit(function(event) {
    $("#receipt").show();
    event.preventDefault()
    var sIze = parseInt($("select#size").val());
    var sizeText = $("select#size").val();
    var extraTopping = parseInt($("select#topping").val());
    var newOrder = new Pizza(sIze, extraTopping);
    newOrder.calculateTotal();
    $("#totalPrice").text("Your total order price is:" + " " + "$" + newOrder.total);

    if (sIze === 0 && extraTopping === 0) {
      alert('Please select a size of pizza and topping');
    } else if (sIze === 20 || sIze === 15 || sIze === 10 && extraTopping === 0) {
      $("select#size").val();
    }
  })

});
