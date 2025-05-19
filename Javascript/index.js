function updateTime(){

//losangeles
let losangelesDateElement =document.querySelector("#los-angeles .date");
if (losangelesDateElement){
losangelesDateElement.innerHTML= moment().format("MMM Do YYYY");
let losangelesTimeElement =document.querySelector("#los-angeles .time");
losangelesTime = moment().tz("America/Los_Angeles");
losangelesTimeElement.innerHTML= losangelesTime.format("h:mm:ss [<small>]A[</small>]");}

//shanghai
let shanghaiDateElement =document.querySelector("#Shanghai .date");
if (shanghaiDateElement){
shanghaiDateElement.innerHTML= moment().format("MMM Do YYYY");
let shanghaiTimeElement =document.querySelector("#Shanghai .time");
shanghaiTime = moment().tz("Asia/Shanghai");
shanghaiTimeElement.innerHTML= shanghaiTime.format("h:mm:ss [<small>]A[</small>]");}


//Kuala lumpur
let kualalumpurDateElement =document.querySelector("#kuala-lumpur .date");
if (kualalumpurDateElement){
kualalumpurDateElement.innerHTML= moment().format("MMM Do YYYY");
let kualalumpurTimeElement =document.querySelector("#kuala-lumpur .time");
kualalumpurTime = moment().tz("Asia/Kuala_Lumpur");
kualalumpurTimeElement.innerHTML= kualalumpurTime.format("h:mm:ss [<small>]A[</small>]");}

//Lisbon
let lisbonDateElement =document.querySelector("#lisbon .date");
if (lisbonDateElement){
lisbonDateElement.innerHTML= moment().format("MMM Do YYYY");
let lisbonTimeElement =document.querySelector("#lisbon .time");
lisbonTime = moment().tz("Europe/Lisbon");
lisbonTimeElement.innerHTML= lisbonTime.format("h:mm:ss [<small>]A[</small>]");}}


function changeTime(event){

let cityTimeZone = event.target.value;  
  if (cityTimeZone ==="current"){
  cityTimeZone = moment.tz.guess();
    }
let cityName =cityTimeZone.replace("_","").split("/")[1];
let cityTime= moment().tz(cityTimeZone);
let citiesElement = document.querySelector("#cities");
citiesElement.innerHTML = 
`<div class="city">
        <div>
        <h2>${cityName}</h2>
       
        <div class="date">${cityTime.format("MMM Do YYYY")}</div>
        </div>
        <div>
        <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
    </div>`;}
updateTime();
setInterval(updateTime, 1000);


let citiesSelectElement =document.querySelector("#city");
citiesSelectElement.addEventListener("change", changeTime);