input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    basic.showLeds(`
        # . . # #
        . . # . .
        . . # . .
        . . # . .
        . . . # #
        `)
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.temperature() * (1.8 + 32))
    basic.showLeds(`
        # . # # #
        . . # . .
        . . # # .
        . . # . .
        . . # . .
        `)
    basic.pause(1000)
    basic.clearScreen()
})
