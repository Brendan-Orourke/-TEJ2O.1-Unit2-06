/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: XXX
 * Created on: Sep 2020
 * This program ...
*/

/* Copyright (c) 2025 MTHS All rights reserved
*
* Created by: Brendan O'Rourke
* Created on: Sep 2025
* This program turns an LED on and off.
*/


basic.clearScreen()
basic.showIcon(IconNames.Happy)


input.onButtonPressed(Button.A, function () {
    // turns pin 16 on
    basic.showIcon(IconNames.Yes)
    pins.digitalWritePin(DigitalPin.P16, 1)
})


input.onButtonPressed(Button.B, function () {
    // turns pin 16 off
    basic.showIcon(IconNames.No)
    pins.digitalWritePin(DigitalPin.P16, 0)
})