var submitButton = document.querySelector(".submitButton");
var questiontype = document.querySelector(".questionBlock").getAttribute("id");

let lawcharesult = 0;
let gooeviresult = 0;

function Clicker() {
  var allQuestions = document.getElementsByClassName("questionBlock");

  for (var i = 1; i < allQuestions.length + 1; i++) {
    var questiontype = allQuestions[i - 1].getAttribute("id");
    var nam = "question" + i.toString();
    var x = document.getElementsByName(nam);

    for (var j = 0; j < x.length; j++) {
      if (x[j].checked) {
        if (questiontype == "lawcha") {
          lawcharesult =
            lawcharesult + Number.parseInt(x[j].getAttribute("value"));
        } else {
          gooeviresult =
            gooeviresult + Number.parseInt(x[j].getAttribute("value"));
        }
      }
    }
  }

  document.getElementById("finalResult").innerHTML =
    '<input type="hidden" id= "fetchResult" name="res" value="' +
    lawcharesult +
    "&" +
    gooeviresult +
    '"/>';

  document.getElementById("finalResult").submit();
}

submitButton.addEventListener("click", Clicker);