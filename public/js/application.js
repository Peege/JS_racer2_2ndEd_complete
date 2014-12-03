$(document).ready(function() {
  $(document).on('keyup', function(e) {
    // Detect which key was pressed and call the appropriate function
    // Google "jquery keyup what key was pressed" if you don't know how
    if ( e.keyCode == 81 ) {
      update_position(1)
    }
    if (e.keyCode == 80 ) {
      update_position(2)
    }
  });
});

function update_position(player){
  $("#player" + player + "_strip td.active").removeClass("active").next().addClass("active");
  if ($("#player" + player + "_strip td:last").hasClass("active")) {
    alert("Player " + player + " won!");
  }
}