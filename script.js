
//places currentday id into variable to be used in javascript
var currentDay = document.querySelector("#currentDay")

//makes current day be displayed at the top of the screen in the appropriate format
currentDay.textContent = moment().format("dddd, MMMM Do");

