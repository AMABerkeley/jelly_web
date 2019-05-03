var command = "roll_stop";
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


    var ros = new ROSLIB.Ros();

    // If there is an error on the backend, an 'error' emit will be emitted.
    ros.on('error', function(error) {
        console.log(error);
    });
    // Find out exactly when we made a connection.
    ros.on('connection', function() {
        console.log('Connection made!');
    });
    ros.on('close', function() {
        console.log('Connection closed.');
    });
    // Create a connection to the rosbridge WebSocket server.
    ros.connect('ws://localhost:9090');

    var control = new ROSLIB.Topic({
        ros : ros,
        name : '/jelly',
        messageType : 'std_msgs/String'
    });


    $(".control i").on("click", function() {
        command = $(this).attr("id");
        console.log(command);
        var message = new ROSLIB.Message({
            data : command
        });
        control.publish(message);
    });

});


