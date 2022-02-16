input.onGesture(Gesture.TiltRight, function () {
    sprite.move(1)
})
input.onGesture(Gesture.TiltLeft, function () {
    sprite.move(-1)
})
input.onGesture(Gesture.LogoDown, function () {
    sprite.change(LedSpriteProperty.Y, -1)
})
input.onGesture(Gesture.LogoUp, function () {
    sprite.change(LedSpriteProperty.Y, 1)
})
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 2)
let sprite2 = game.createSprite(randint(0, 4), randint(0, 4))
game.startCountdown(40000)
basic.forever(function () {
    if (sprite.isTouching(sprite2)) {
        game.addScore(1)
        sprite2.delete()
    }
    if (sprite2.isDeleted()) {
        sprite2 = game.createSprite(randint(0, 4), randint(0, 4))
    }
})
