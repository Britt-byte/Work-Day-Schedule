$(document).ready(function() {
    $("#displayMoment").text(moment().format("LLL"));

    $(".saveBtn").on("click", function() {
        console.log(this);
        var text = $(this).siblings("description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    });

    $("#9 .descritption").val(localStorage.getItem("9"));
    $("#10 .descritption").val(localStorage.getItem("10"));
    $("#11 .descritption").val(localStorage.getItem("11"));
    $("#12 .descritption").val(localStorage.getItem("12"));
    $("#1 .descritption").val(localStorage.getItem("1"));
    $("#2 .descritption").val(localStorage.getItem("2"));
    $("#3 .descritption").val(localStorage.getItem("3"));
    $("#4 .descritption").val(localStorage.getItem("4"));
    $("#5 .descritption").val(localStorage.getItem("5"));

function tracker() {
    var currentHour = moment().hour();

    $(".time-block").each(function() {
        var block = parseInt($(this).attr("id").split("hour")[1]);
        console.log( block, currentHour )

        if (block < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present")
        }

        else if (block === currentHour) {
            $(this).addClass("present");
            $(this).removeClass("future");
            $(this).removeClass("past")
        }

        else {
            $(this).addClass("future");
            $(this).removeClass("past");
            $(this).removeClass("present")
        }
    });
};

hourTracker();

});
