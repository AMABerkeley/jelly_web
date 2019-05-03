var command = "roll_stop";
$(document).ready(function() {
    $("#rolling_button").on("click", function() {
        console.log("clicked rolling button");
        if ($(this).hasClass("button-primary")) {
        } else {
            $("#rolling_panel").show();
            $("#standing_panel").hide();
            $("#walking_panel").hide();
            $(this).addClass("button-primary");
            $("#standing_button").removeClass("button-primary");
            $("#walking_button").removeClass("button-primary");
        }
    });
    $("#standing_button").on("click", function() {
        console.log("clicked standing button");
        if ($(this).hasClass("button-primary")) {
        } else {
            $("#rolling_panel").hide();
            $("#standing_panel").show();
            $("#walking_panel").hide();
            $("#rolling_button").removeClass("button-primary");
            $(this).addClass("button-primary");
            $("#walking_button").removeClass("button-primary");
        }
    });

    $("#walking_button").on("click", function() {
        console.log("clicked walking button");
        if ($(this).hasClass("button-primary")) {

        } else {
            $("#rolling_panel").hide();
            $("#standing_panel").hide();
            $("#walking_panel").show();
            $("#rolling_button").removeClass("button-primary");
            $("#standing_button").removeClass("button-primary");
            $(this).addClass("button-primary");
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
    ros.on('close', function(e) {
        console.log('Connection closed.');
        console.log(e);
    });
    // Create a connection to the rosbridge WebSocket server.
    ros.connect('ws://localhost:9090');

    setInterval(function() {
        var control = new ROSLIB.Topic({
            ros : ros,
            name : '/jelly_gui/command',
            messageType : 'std_msgs/String'
        });
        var message = new ROSLIB.Message({
            data : command
        });

        $(".control i").on("click", function() {
            command = $(this).attr("id");
            console.log(command);
        });
        control.publish(message);
    }, 100);

    // Create the main viewer.
    var viewer = new ROS3D.Viewer({
        divID : 'urdf',
        width : 800,
        height : 600,
        antialias : true
    });

    // Add a grid
    viewer.addObject(new ROS3D.Grid());

    // Setup a client to listen to TFs.
    var tfClient = new ROSLIB.TFClient({
        ros : ros,
        angularThres : 0.01,
        transThres : 0.01,
        rate : 10.0
    });

    // Setup the URDF client.
    var urdfClient = new ROS3D.UrdfClient({
        ros : ros,
        tfClient : tfClient,
        // path : 'https://raw.githubusercontent.com/AMABerkeley/jelly_descriptions/master/',
        path : 'http://localhost:8080/jelly_descriptions/',
        rootObject : viewer.scene,
        loader : ROS3D.COLLADA_LOADER_2
    });

});


