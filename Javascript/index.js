let losangelesDateElement =document.querySelector("#los-angeles .date");
losangelesDateElement.innerHTML= moment().format("MMM Do YYYY");
let losangelesTimeElement =document.querySelector("#los-angeles .time");
losangelesTime = moment().tz("America/Los_Angeles");
losangelesTimeElement.innerHTML= losangelesTime.format("h:mm:ss A");