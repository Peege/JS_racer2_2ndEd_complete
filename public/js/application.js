$(document).ready(function() {

  var time = 0;
  var started = false;
  var finished = false;

  $(document).on('keyup', function(e) {
    // Detect which key was pressed and call the appropriate function
    // Google "jquery keyup what key was pressed" if you don't know how
    if ( e.keyCode == 81 ) {
      if (!started) {
        starttimer();
        started = true;
      }
      update_position(1);
    }
    if (e.keyCode == 80 ) {
      if (!started) {
        starttimer();
        started = true;
      }
      update_position(2);
    }
  });

  function starttimer() {
    if (!finished) {
      time += 1;
      setTimeout(starttimer, 100);
      $("#stopwatch").html(time);
    }
  }

  function update_position(player){
    $("#player" + player + "_strip td.active").removeClass("active").next().addClass("active");
    if ($("#player" + player + "_strip td:last").hasClass("active")) {
      alert("Player " + player + " won!");
      finished = true;
    }
  }
});