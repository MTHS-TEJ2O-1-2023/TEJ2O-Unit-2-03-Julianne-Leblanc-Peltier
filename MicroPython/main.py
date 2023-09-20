"""
Created by: Julianne Leblanc-Peltier
Created on: Sep 2023
This module is a Micro:bit MicroPython program
"""

from microbit import *
from time import sleep


display.clear()
sleep(1)

display.scroll("the area of a rectangle with 5cm x 3cm measurements is: " + str(5 * 3))
display.scroll("cm.")
sleep(0.5)
display.clear()

display.scroll("The perimeter is: " + str(2 * 5 + 2 * 3))
display.scroll("cm.")
sleep(0.5)
display.clear()
