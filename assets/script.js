$(document).ready(function() {
    $("#rolling_button").on("click", function() {
        console.log("clicked rolling button");
        if ($(this).hasClass("button-primary")) {
            console.log("already active");
        } else {
            $("#rolling_panel").show();
            $("#walking_panel").hide();
            $(this).toggleClass("button-primary");
            $("#walking_button").toggleClass("button-primary");
        }
    });
    $("#walking_button").on("click", function() {
        console.log("clicked walking button");
        if ($(this).hasClass("button-primary")) {

        } else {
            $("#rolling_panel").hide();
            $("#walking_panel").show();
            $(this).toggleClass("button-primary");
            $("#rolling_button").toggleClass("button-primary");
        }
    });

});
