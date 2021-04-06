
//variables created from html classes
var currentDay = $("#currentDay")
var saveBtn = $(".saveBtn")


//makes current day be displayed at the top of the screen in the appropriate format
$(currentDay).text(moment().format("dddd, MMMM Do"));

//assigning time to each of the variables
nine = moment("9 AM" , "H A")
ten = moment("10 AM" , "H A")
eleven = moment("11 AM" , "H A")
twelve = moment("12 PM" , "H A")
one = moment("1 PM" , "H A")
two= moment("2 PM" , "H A")
three = moment("3 PM" , "H A")
four = moment("4 PM" , "H A")
five= moment("5 PM" , "H A")

//if else statements that determine if a specific time is before,after or is currently the time, a specific class is added.

var currentHour = parseInt(moment().format("H"));
console.log(currentHour)
if (9 < currentHour) {
    $('.nine').addClass("past")
}else if (9 > currentHour) {
    $('.nine').addClass("future")
}else {$('.nine').addClass("present")}


if (10 < currentHour) {
    $('.ten').addClass("past")
}else if (10 > currentHour) {
    $('.ten').addClass("future")
}else {$('.ten').addClass("present")}

if (11 < currentHour) {
    $('.eleven').addClass("past")
}else if (11 > currentHour) {
    $('.eleven').addClass("future")
}else {$('.eleven').addClass("present")}

if (12 < currentHour) {
    $('.twelve').addClass("past")
}else if (12 > currentHour){
    $('.twelve').addClass("future")
}else {$('.twelve').addClass("present")}

if (13 < currentHour) {
    $('.one').addClass("past")
}else if (13 > currentHour){
    $('.one').addClass("future")
}else {$('.one').addClass("present")}

if (14 < currentHour){
    $('.two').addClass("past")
}else if (14 > currentHour) {
    $('.two').addClass("future")
}else {$('.two').addClass("present")}

if (15 < currentHour) {
    $('.three').addClass("past")
}else if (15 > currentHour) {
    $('.three').addClass("future")
}else {$('.three').addClass("present")}

if (16 < currentHour) {
    $('.four').addClass("past")
}else if (16 > currentHour) {
    $('.four').addClass("future")
}else {$('.four').addClass("present")}

if (17 < currentHour) {
    $('.five').addClass("past")
}else if (17 > currentHour) { 
    $('.five').addClass("future")
}else {$('.five').addClass("present")}

//created on click event for savebutton, save to local storage.
$('.saveBtn').click( function(event){

    var dataNum= event.target.dataset.number
    var myText = document.getElementById(dataNum).value
  
    localStorage.setItem(dataNum,myText);
    var savedText = localStorage.getItem(dataNum,myText);
  
});

//places the corresponding information from local Storage in the input

$("#nine").val(localStorage.getItem("nine"));
$("#ten").val(localStorage.getItem("ten"));
$("#eleven").val(localStorage.getItem("eleven"));
$("#twelve").val(localStorage.getItem("twelve"));
$("#one").val(localStorage.getItem("one"));
$("#two").val(localStorage.getItem("two"));
$("#three").val(localStorage.getItem("three"));
$("#four").val(localStorage.getItem("four"));
$("#five").val(localStorage.getItem("five"));
