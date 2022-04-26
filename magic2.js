let st_url = window.location.href;

let r =  st_url.split("=")[1].split("%26");
console.log(r);

let lawcha;
let gooevi;

let lawchaRes = Number.parseInt(r[0]);
let gooeviRes = Number.parseInt(r[1]); 

if(lawchaRes<=-5){
  lawcha = "Chaotic";
}
else if((-5 < lawchaRes) && (lawchaRes <= 5)){
  console.log(typeof (lawchaRes));
  lawcha = "Neutral";
}
else{
  lawcha = "Lawful";
}

if(gooeviRes<=-5){
  gooevi = "Evil";
}
else if((-5< gooeviRes)&&( gooeviRes < 5)){
  gooevi = "Neutral";
}
else{
  gooevi = "Good";
}

console.log("Final result: "+ lawcha+ gooevi);

document.querySelector("#finalResult").innerHTML =
  "<p id=resultText> Final result: " +lawcha+" "+ gooevi + "</p>";


