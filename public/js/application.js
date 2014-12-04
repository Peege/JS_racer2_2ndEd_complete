$(document).ready(function() {
  var time = 0;
  var started = false;
  var finished = false;

  $(document).on('keyup', function(e) {
    // Detect which key was pressed and call the appropriate function
    // Google "jquery keyup what key was pressed" if you don't know how
    if ( e.keyCode == 81 ) {
      if (!finished) {
        if (!started) {
          starttimer();
          started = true;
        }
        update_position(1);
      }
    }
    if (e.keyCode == 80 ) {
      if (!finished) {
        if (!started) {
          starttimer();
          started = true;
        }
        update_position(2);
      }
    }
  });

  function starttimer() {
    if (!finished) {
      time += 0.01;
      setTimeout(starttimer, 10);
      $("#stopwatch").html(time.toFixed(2));
    }
  }

  function update_position(player) {
    $("#player" + player + "_strip td.active").removeClass("active").next().addClass("active");
    if ($("#player" + player + "_strip td:last").hasClass("active")) {
      finished = true;
      finish(document.getElementById("p" + player + "_name").innerHTML, document.getElementById("gameid").innerHTML);
    }
  }

  function finish(player_name, g_id) {
    alert(player_name + " won!");
    $.ajax({
      url: "/finish",
      type: "POST",
      data: {winner: player_name, time: time.toFixed(2), game_id: g_id},
      success: function(data) {
        $("#announce").html(data)
      }
    });
  }
});