$(document).ready(function() {
  // Function to set the date to today's date all html pages
  var date = 'Today is: ' + new Date($.now());
  $('#date').html(date);
  // Function to update the character count on /reservations.html
  $('#comments').keyup(updateCount);
  $('#comments').keydown(updateCount);
  function updateCount() {
      var cs = $(this).val().length;
      if((64-cs>=0) && (cs < 0)){
            $('#countchars').text("Message limit 64 characters").css("color", "green")
            $("#comments").attr("disabled", false);
      }
      if((64-cs>=0) && (cs > 0)){
            $('#countchars').text(64-cs + " of 64 characters left").css("color", "green");
            $("#comments").attr("disabled", false);
      }
      if((64-cs<0)){
            $('#countchars').text("0 of 64 characters left").css("color", "red");
            $("#comments").attr("disabled", true);
      }
  }
  // Functions to handle .hover color changes on /menu.html
  $("tr:nth-of-type(even) td").hover(
  function() {
    $(this).css('background-color', 'yellow');
    $(this).css('color', 'red');
  },
  function() {
    $(this).css('background-color', '#A9A9A9');
    $(this).css('color', '#191970');
  }
);
  $("tr:nth-of-type(odd) td").hover(
  function() {
    $(this).css('background-color', 'yellow');
    $(this).css('color', 'red');
  },
  function() {
    $(this).css('background-color', '#00BFFF');
    $(this).css('color', '#191970');
  }
  );
});
