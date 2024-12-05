input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("Quero brincar!")
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        # . # . .
        # # # . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Confused)
    music.play(music.createSoundExpression(WaveShape.Noise, 5000, 0, 255, 0, 2000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # # #
        # . . . #
        # # # # #
        # . . . .
        # . . . .
        `)
})
basic.showString("oi papai, faz tempo que eu não te vejo")
basic.showIcon(IconNames.Happy)
