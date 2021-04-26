//moment.js for date and time in header
var today = moment().format('dddd, MMMM Do YYYY, h:mm a');
var currentDay = document.getElementById('currentDay')
currentDay.textContent = today;

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