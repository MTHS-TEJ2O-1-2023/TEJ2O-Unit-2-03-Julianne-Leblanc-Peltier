/* Copyright (c) 2023 MTHS All rights reserved
 *
 * Created by: Julianne Leblanc-Peltier
 * Created on: Sep 2023
 * This program does basic math
*/

basic.clearScreen()
basic.pause(1000)

basic.showString('the area of a rectangle with 5cm x 3cm measurements is:' + (5 * 3).toString() + ('cm^2.'))
/* expected to print '15cm^2' as the area*/
basic.pause(500)
basic.clearScreen()

basic.showString('The perimeter is:' + (2 * 5 + 2 * 3).toString())
/* expected to print '16' as the perimeter */
basic.showString('cm')
basic.pause(500)
basic.clearScreen()

basic.showIcon(IconNames.Happy)
basic.pause(500)
basic.clearScreen()
