function updateTime() {

let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment ().tz("America/Los_Angeles");
losAngelesDateElement.innerHTML = moment().tz("America/Los_Angeles").format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = moment().tz("America/Los_Angeles").format("h:mm:ss [<small>]A[</small>]");    

let parisElement = document.querySelector("#paris");
let parisDateElement = parisElement.querySelector(".date");
let parisTimeElement = parisElement.querySelector(".time");
let parisTime = moment ().tz("Europe/Paris");
parisDateElement.innerHTML = moment().tz("Europe/Paris").format("MMMM Do YYYY");
parisTimeElement.innerHTML = moment().tz("Europe/Paris").format("h:mm:ss [<small>]A[</small>]");    

let sydneyElement = document.querySelector("#sydney");
let sydneyDateElement = sydneyElement.querySelector(".date");
let sydneyTimeElement = sydneyElement.querySelector(".time");
let sydneyTime = moment ().tz("Australia/Sydney");
sydneyDateElement.innerHTML = moment().tz("Australia/Sydney").format("MMMM Do YYYY");
sydneyTimeElement.innerHTML = moment().tz("Australia/Sydney").format("h:mm:ss [<small>]A[</small>]");    

let tokyoElement = document.querySelector("#tokyo");
let tokyoDateElement = tokyoElement.querySelector(".date");
let tokyoTimeElement = tokyoElement.querySelector(".time");
let tokyoTime = moment ().tz("Asia/Tokyo");
tokyoDateElement.innerHTML = moment().tz("Asia/Tokyo").format("MMMM Do YYYY");
tokyoTimeElement.innerHTML = moment().tz("Asia/Tokyo").format("h:mm:ss [<small>]A[</small>]");    


let torontoElement = document.querySelector("#toronto");
let torontoDateElement = torontoElement.querySelector(".date");
let torontoTimeElement = torontoElement.querySelector(".time");
let torontoTime = moment ().tz("America/Toronto");
torontoDateElement.innerHTML = moment().tz("America/Toronto").format("MMMM Do YYYY");
torontoTimeElement.innerHTML = moment().tz("America/Toronto").format("h:mm:ss [<small>]A[</small>]");  

//<a href="/">Back to all cities</a>

}

updateTime();
setInterval(updateTime, 1000);
