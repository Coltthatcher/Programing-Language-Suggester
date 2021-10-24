$(document).ready(function() {
  $("#survey").submit(function(event) {
    event.preventDefault();
    const question1 = parseInt($("select#question1").val());
    const question2 = parseInt($("select#question2").val());
    const question3 = parseInt($("select#question3").val());
    const question4 = parseInt($("select#question4").val());
    const question5 = parseInt($("select#question5").val());

    let final = (question1 + question2 + question3 + question4 + question5);

  

    if (final <= 12 && final >= 8) {
      $("#result").text("ruby")
      $(".result").show();
    } else if (final <= 7 && final >=4) {
      $("#result").text("c#")
      $(".result").show();
    } else {
      $("#result").text("javaScript")
      $(".result").show();
    }

      $(".result").show();
    
  });
});

















