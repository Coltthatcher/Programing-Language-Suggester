$(document).ready(function() {
  $("#survey").submit(function(event) {
    event.preventDefault();
    const question1 = document.survey.question1.value;
    const question2 = document.survey.question2.value;
    const question3 = document.survey.question3.value;
    const question4 = document.survey.question4.value;
    const question5 = document.survey.question5.value;

    let final = (question1 + question2 + question3 + question4 + question5);

  

    if (final <= 12 && final >= 8) {
      $("#result").text("ruby")
      $(".result").show();
    } else if (final <= 7 && final >=4) {
      $("#result").text("c#")
      $(".result").show();
    } else if (final <= 3 && final >=3) {
      $("#result").text("javaScript")
      $(".result").show();
    }

      $(".result").show();
    
  });
});

















