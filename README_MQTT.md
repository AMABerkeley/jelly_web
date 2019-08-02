# jelly_web updates

The jelly robot publishes and subscribes to topics on a mosquitto mqtt broker hosted on the web server.
The web page exchanges send mode/status/command/calibrate messages directly with the broker allowing control of the robot from buttons on the webpage.

I added the front end paho mqtt client (using mqtt websockets back to a mosquitto broker running on the server) script reference into the index file. The license requires it to be externally referenced otherwise you must copyleft your project.

I created a script mqtt_client.js to deal with the web_page mqtt initialization.

I stripped out the rosbridge parts of script.js that handle command/mode/status/calibration and replaced them with mqtt code.

I have added mosquitto_setup.bash to detail the mosquitto broker setup on the server. 



# tf viewer updates

I have implemented a hacky workaround to get the 3D viewer working.

I would have liked to pass the /tf ros messages from the jelly robot straight through the mqtt_bridge to the paho-mqtt client (via mosquitto broker) to an adapted ROSLIB.TFClient that takes in /tf data taken from a js object. But this is a potentially very large and complex peice of work to the end of overall simplification.

My solution is to install ROS on the web server and implement another mqtt_bridge to get /tf messages from the jelly robot over mqtt but pass them onto the webpage via rosbridge websockets. 

The webpage sets up a ROS websocket connection back to the server (with its static hostname/ipaddress, also needed for the mqtt_bridge config) which is running a mqtt_bridge node as well as a tf2_web_publisher node. You will need to install ROS on the server (go for a lightweight version).

To test this, I used 1 ubuntu VM for the webserver another for the Jelly robot and viewed the webpage from my MacOS. It worked well.

You might notice with this implementation that I could have left script.js almost intact with all messages coming in via a ros websocket connection back to the server. But hopefully in the future someone makes an mqtt adapter for ROSLIB.TFClient and it gets completely untethered from rosbridge.

My Ubuntu updated Firefox to 68.0.1 causing errors with openGL preventing the 3D viewer from appearing.
Red hat people confirm that WebGL works ok after downgrade to firefox-59.0.2-1.fc28.x86_64 (no other packages changed). Thought you should know.













