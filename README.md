# Jelly GUI
## Bringup
```
roslaunch jelly_bringup jelly_gui.launch
```
From [here](https://github.com/AMABerkeley/jelly_core/blob/master/jelly_bringup/launch/jelly_gui.launch)

## Published:
**Topic:** /jelly_gui/command
**Message:** /std_msgs/String

| Mode      | data               |
| ----------|--------------------|
| Rolling (default)  | "roll_forward", "roll_stop", "roll_back" | 
| Standing  | "stand_left", "stand_stop", "stand_right"|  
| Walking   | "walk_forward", "walk_left", "walk_stop", "walk_right", "walk_back"      | 

**Topic:** /jelly_controls/mode
**Message:** /std_msgs/String

| Mode      | data               |
| ----------|--------------------|
| Crab  | "crab" | 
| Normal  | "normal"|  
| Reverse Crab   | "reverse_crab      | 

## Subscribed:
**Topic:** /jelly_gui/status
**Message:** /std_msgs/String
