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
    var questionCount = 0;
    for (var j = 0; j < x.length; j++) {
      if (x[j].checked) {
        questionCount +=1;
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
  if (questionCount == 20){
  document.getElementById("finalResult").submit();}else{
    document.getElementById("errorMessage").innerHTML='<p class="errorText"> You have not answered all the questions</p>'
  }
}

submitButton.addEventListener("click", Clicker);
