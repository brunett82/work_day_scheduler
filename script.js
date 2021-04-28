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
$(document).ready(function () {
    $('.saveBtn').on('click', function () {
        var input = $(this).siblings('.description').val();
        var tod = $(this).parent().attr('id');
        localStorage.setItem(tod, input);
    })
})

//Load text from local storage on page load
$('#block0 .description').val(localStorage.getItem('block0'));
$('#block1 .description').val(localStorage.getItem('block1'));
$('#block2 .description').val(localStorage.getItem('block2'));
$('#block3 .description').val(localStorage.getItem('block3'));
$('#block4 .description').val(localStorage.getItem('block4'));
$('#block5 .description').val(localStorage.getItem('block5'));
$('#block6 .description').val(localStorage.getItem('block6'));
$('#block7 .description').val(localStorage.getItem('block7'));
$('#block8 .description').val(localStorage.getItem('block8'));
$('#block9 .description').val(localStorage.getItem('block9'));
$('#block10 .description').val(localStorage.getItem('block10'));
$('#block11 .description').val(localStorage.getItem('block11'));
$('#block12 .description').val(localStorage.getItem('block12'));

