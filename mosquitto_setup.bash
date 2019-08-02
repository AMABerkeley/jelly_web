#Install mosquitto
sudo apt-get install mosquitto

#Copy the config file into the right dir
sudo cp jelly_mosquitto.conf /etc/mosquitto/conf.d/jelly_mosquitto.conf

#You may need to restart mosquitto on account of port errors

#Start mosquitto using the following. But it should boot automatically at startup using the .conf file
mosquitto -c /etc/mosquitto/conf.d/jelly_mosquitto.conf -v

