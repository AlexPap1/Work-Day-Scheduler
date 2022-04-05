var currentDay = document.getElementById('currentDay');
var saveBtn = $(".saveBtn")

//display current date
currentDay.textContent=("Today's date is: " + moment().format('MMMM Do YYYY'));

//save button adds values to local storage
$(".saveBtn").on("click", function () {
    window.alert("Task saved!")
    var hour = $(this).siblings(".hour").text();
    var description = $(this).siblings(".description").val();
    console.log($(this).siblings(".hour").text());
    console.log($(this).siblings(".description").text());
    var save = localStorage.setItem(hour, description);
});

//retreives values from local storage on refresh
function saveRefresh() {
    $(".hour").each(function() {
        var specifiedHour = $(this).text();
        var specifiedDesc = localStorage.getItem(specifiedHour);

        console.log(specifiedDesc);

        if(specifiedDesc !== null) {
            $(this).siblings(".description").val(specifiedDesc);
        }
    });
}

//defines present value
var present = parseInt(moment().format('HH'));
console.log(present);

//sets color by comparing present to each time block
function color() {
    var time = moment().hours();
    console.log(time);

    $(".time-block").each(function() {
        var present = parseInt($(this).attr("id"));
        if (present > time) {
            $(this).addClass("future");}
        else if (present < time) {
            $(this).addClass("past");}
        else {
            $(this).addClass("present");}
    })
};

//calls functions
saveRefresh();
color();
