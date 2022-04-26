let st_url = window.location.href;

let r = st_url.split("=")[1].split("%26");
console.log(r);

let lawcha;
let gooevi;

if(r[0]<=-5){
  lawcha = "Choatic";
}
else if(-5< r[0] < 5){
  lawcha = "Nuetral";
}
else{
  lawcha = "Lawful";
}

if(r[1]<=-5){
  gooevi = "Evil";
}
else if(-5< r[1] < 5){
  gooevi = "Nuetral";
}
else{
  gooevi = "Good";
}

console.log("Final result: "+ lawcha+ gooevi);

document.querySelector("#finalResult").innerHTML =
  "<p id=resultText> Final result: " +lawcha+" "+ gooevi + "</p>";


