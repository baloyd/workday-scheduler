
//variables created from html classes
var currentDay = $("#currentDay")
var saveBtn = $(".saveBtn")
var planner = $('input[name="planner"]').val();
var nine = $("#nine");
var ten = $("#ten");
var eleven = $("#eleven")
var twelve = $("#twelve");
var one = $("#one");
var two = $("#two");
var three = $("#three");
var four = $("#four");
var five = $("#five");

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

if (nine.isBefore(moment())) {
    $('.nine').addClass("past")
}else if (nine.isAfter(moment())) {
    $('.nine').addClass("future")
}else {$('.nine').addClass("present")}



console.log(nine.format("H A"))
//created on click event for savebutton
saveBtn.on('click', function(){
    localStorage.setItem("test", planner);
    
    alert(localStorage.getItem("test"));
});

	