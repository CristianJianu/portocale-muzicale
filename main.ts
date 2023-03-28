input.onButtonPressed(Button.A, function () {
    basic.showString("start!")
})
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P1)) {
        basic.showLeds(`
            . . . . .
            . # # # .
            # . . . #
            # . . . #
            . # # # .
            `)
        music.playTone(247, music.beat(BeatFraction.Half))
        music.playTone(294, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Half))
    }
    if (input.pinIsPressed(TouchPin.P2)) {
        basic.showLeds(`
            . . # # #
            . # # . .
            # . . # .
            # . . # .
            . # # . .
            `)
        music.playTone(587, music.beat(BeatFraction.Half))
        music.playTone(698, music.beat(BeatFraction.Half))
        music.playTone(880, music.beat(BeatFraction.Half))
    }
})
