input.onButtonPressed(Button.A, function () {
    player.move(-1)
})
input.onButtonPressed(Button.B, function () {
    player.move(1)
})
let fruit: game.LedSprite = null
let player: game.LedSprite = null
let speed = 500
player = game.createSprite(2, 4)
game.setScore(0)
basic.forever(function () {
    fruit = game.createSprite(randint(0, 4), 0)
    basic.pause(300)
    while (fruit.get(LedSpriteProperty.Y) < 4) {
        fruit.change(LedSpriteProperty.Y, 1)
        basic.pause(speed)
    }
    if (player.isTouching(fruit)) {
        game.addScore(1)
        fruit.delete()
    } else {
        game.gameOver()
    }
})
basic.forever(function () {
    if (game.score() > 5) {
        speed = 100
    }
})
