//moment.js for date and time in header
var today = moment().format('dddd, MMMM Do YYYY, h:mm a');
var currentDay = document.getElementById('currentDay')
currentDay.textContent = today;

//Function to change css of time-blocks as time changes
function scheduleUpdate() {
    var currentTime = moment().hours();
    console.log('hours', currentTime);

    for (let i = 6; i < 20; i++) {
        var textArea = $('#timeSlot-'+i)
        if (currentTime > i){
            $(textArea).addClass('past');
        }else if (currentTime === i){
            $(textArea).addClass('present');
        }else {
            $(textArea).addClass('future');
        }
    }
}
scheduleUpdate();

//Save entered text to local storage
var save = document.querySelector("#svButton");
save.addEventListener("click", function(event){
    event.preventDefault();
    //This is working, but how can it be constructed so I don't have to create one for every
    var input = document.querySelector("#timeSlot-9").value;

    localStorage.setItem("input",JSON.stringify(input));
});




//Load text from local storage on page load
