//losangeles
let losangelesDateElement =document.querySelector("#los-angeles .date");
losangelesDateElement.innerHTML= moment().format("MMM Do YYYY");
let losangelesTimeElement =document.querySelector("#los-angeles .time");
losangelesTime = moment().tz("America/Los_Angeles");
losangelesTimeElement.innerHTML= losangelesTime.format("h:mm:ss [<small>]A[</small>]");

//shanghai
let shanghaiDateElement =document.querySelector("#Shanghai .date");
shanghaiDateElement.innerHTML= moment().format("MMM Do YYYY");
let shanghaiTimeElement =document.querySelector("#Shanghai .time");
shanghaiTime = moment().tz("Asia/Shanghai");
shanghaiTimeElement.innerHTML= shanghaiTime.format("h:mm:ss [<small>]A[</small>]");


//Kuala lumpur
let kualalumpurDateElement =document.querySelector("#kuala-lumpur .date");
kualalumpurDateElement.innerHTML= moment().format("MMM Do YYYY");
let kualalumpurTimeElement =document.querySelector("#kuala-lumpur .time");
kualalumpurTime = moment().tz("Asia/Kuala_Lumpur");
kualalumpurTimeElement.innerHTML= kualalumpurTime.format("h:mm:ss [<small>]A[</small>]");

//Lisbon
let lisbonDateElement =document.querySelector("#lisbon .date");
lisbonDateElement.innerHTML= moment().format("MMM Do YYYY");
let lisbonTimeElement =document.querySelector("#lisbon .time");
lisbonTime = moment().tz("Europe/Lisbon");
lisbonTimeElement.innerHTML= lisbonTime.format("h:mm:ss [<small>]A[</small>]");