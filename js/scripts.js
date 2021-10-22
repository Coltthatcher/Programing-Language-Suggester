$(document).ready(function() {

  var question1 = document.survey.question1.value;
  var question2 = document.survey.question2.value;
  var question3 = document.survey.question3.value;
  var question4 = document.survey.question4.value;
  var question5 = document.survey.question5.value;

    if (question1 == "yes") {
      $("#ruby").show();
    } else if (question1 == "no") {
      $("#c#").show();
    }

    if (question2 == "yes") {
      $("#javaScript").show();
    } else if (question2 == "no") {
      $("#ruby").show();
  }



  event.preventDefault();
});


















