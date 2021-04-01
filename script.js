
//variables created from html classes
var currentDay = $("#currentDay")
var saveBtn = $(".saveBtn")
var planner = $('input[name="planner"]').val();
//makes current day be displayed at the top of the screen in the appropriate format
$(currentDay).text(moment().format("dddd, MMMM Do"));


//created on click event for savebutton
saveBtn.on('click', function(){
    
});