const rootDiv = document.getElementById("root");
const clockDiv = document.createElement("div");
const nrDiv = document.createElement("div")
const h1 = document.createElement("h1");
const h2 = document.createElement("h2");

rootDiv.appendChild(h1);
rootDiv.appendChild(clockDiv);

clockDiv.appendChild(nrDiv);

clockDiv.id = "clockDiv";
nrDiv.id = "nrDiv";

function time(){
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  
  h = ("0" + h).slice(-2);
  m = ("0" + m).slice(-2);
  s = ("0" + s).slice(-2);

  let showTime = h + ":" + m + ":" + s;
  
  nrDiv.innerText = showTime; 
  nrDiv.textContent = showTime;
}

setInterval(time, 1000);