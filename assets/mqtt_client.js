var reconnectTimeout = 2000;
var host="10.211.55.3"//change this to the address of the webserver
var port=1884;
var lastMsg;

function onFailure(message) {
  console.log("Connection Attempt to Host "+host+"Failed");
  setTimeout(MQTTconnect, reconnectTimeout);
}
function onMessageArrived(msg){
  out_msg="Message received "+msg.payloadString+" ";
  out_msg=out_msg+"Message received Topic "+msg.destinationName;
  console.log(out_msg);
  var element = "<p>" + msg.payloadString + "</p>";
  $("#debug").prepend(element);
}


function onConnect() {
  // Once a connection has been made, make a subscription to debug topic
  console.log("Connected ");
  $("#debug").text("Connected to mqtt broker");
  mqtt.subscribe("/jelly_gui/status");
}


console.log("connecting to "+ host +" "+ port);
mqtt = new Paho.MQTT.Client(host,port,"clientjs");
var options = {
    timeout: 3,
    //userName : "solace-cloud-client",
    //password : "241jlj7bcaj6mig77qt6bsk7kf",
    onSuccess: onConnect,
    onFailure: onFailure,
      };
mqtt.onMessageArrived = onMessageArrived;
mqtt.connect(options); //connect
    
