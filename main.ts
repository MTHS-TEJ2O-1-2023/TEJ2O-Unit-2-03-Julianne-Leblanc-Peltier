/* Copyright (c) 2023 MTHS All rights reserved
 *
 * Created by: Julianne Leblanc-Peltier
 * Created on: Sep 2023
 * This program does basic math
*/

basic.clearScreen()
basic.pause(1000)

basic.showString('the area of a rectangle with 5cm x 3cm measurements is:' + (5 * 3).toString())
/* expected to print '15' as the area*/
basic.showString('cm.')
basic.showString('The perimeter is:' + (2 * 5 + 2 * 3).toString())
/* expected to print '16' as the perimeter */
basic.showString('cm')
