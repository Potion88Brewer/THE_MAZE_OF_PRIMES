scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    info.changeScoreBy(5)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite14, location14) {
    info.changeLifeBy(1)
    info.changeScoreBy(10)
    tiles.setTileAt(location14, assets.tile`myTile29`)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`Main Character Walk Front`,
    100,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile14`, function (sprite26, location26) {
    info.changeScoreBy(-5)
    info.changeLifeBy(-1)
    scene.cameraShake(5, 500)
    tiles.setTileAt(location26, assets.tile`myTile29`)
})
function EnemyRadiusAttack () {
    for (let value of sprites.allOfKind(SpriteKind.Player)) {
        if (myEnemy.x > mySprite.x - 5 || myEnemy.y > mySprite.y + 5) {
            value.follow(mySprite, 20)
        }
        if (!(myEnemy.x > mySprite.x - 5 || myEnemy.y > mySprite.y + 5)) {
            music.play(music.createSong(hex`
                                    0078000408020105001c000f0a006400f4010a0000040000000000000000000000000000000002730000000400021d2504000800021e2708000c0001220c001000031d202910001400012214001800021d2a18001c000220251c002000031e222a2000240003191d2924002800021e2728002c000219202c003000031b252a30003400021e24340038000319222a38003c0002192c3c004000022025
                                    `), music.PlaybackMode.UntilDone)
        }
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite24, location24) {
    info.changeScoreBy(-5)
    info.changeLifeBy(-1)
    scene.cameraShake(5, 500)
    tiles.setTileAt(location24, assets.tile`myTile29`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite21, location21) {
    info.changeScoreBy(-5)
    info.changeLifeBy(-1)
    scene.cameraShake(5, 500)
    tiles.setTileAt(location21, assets.tile`myTile29`)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.reset()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite12, location12) {
    info.changeScoreBy(5)
    tiles.setTileAt(location12, assets.tile`myTile29`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite5, location5) {
    game.splash("I AM THE EVIL ONE!", "I WILL PUT YOU AT THE START!")
    myEnemy = sprites.create(assets.image`Main Enemy`, SpriteKind.Player)
    animation.runImageAnimation(
    myEnemy,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    false
    )
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile34`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile19`, function (sprite3, location3) {
    info.changeScoreBy(-5)
    info.changeLifeBy(-1)
    scene.cameraShake(5, 500)
    tiles.setTileAt(location3, assets.tile`myTile29`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile24`, function (sprite8, location8) {
    game.gameOver(true)
    game.setGameOverPlayable(false, music.melodyPlayable(music.powerUp), true)
    game.setGameOverPlayable(false, music.melodyPlayable(music.jumpUp), true)
    game.setGameOverPlayable(false, music.melodyPlayable(music.baDing), true)
    game.setGameOverMessage(true, "YOU WON!")
    game.setGameOverEffect(true, effects.confetti)
    game.setGameOverScoringType(game.ScoringType.HighScore)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile20`, function (sprite19, location19) {
    info.changeScoreBy(-5)
    info.changeLifeBy(-1)
    scene.cameraShake(5, 500)
    tiles.setTileAt(location19, assets.tile`myTile29`)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`Main Character Walk Left`,
    100,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite22, location22) {
    info.changeScoreBy(-5)
    info.changeLifeBy(-1)
    scene.cameraShake(5, 500)
    tiles.setTileAt(location22, assets.tile`myTile29`)
})
function chooseCharacter () {
    scene.setBackgroundImage(assets.image`Dialog Box Frame`)
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`Main Character Walk Right`,
    100,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite4, location4) {
    info.changeScoreBy(-5)
    info.changeLifeBy(-1)
    scene.cameraShake(5, 500)
    tiles.setTileAt(location4, assets.tile`myTile29`)
})
info.onScore(0, function () {
    game.setGameOverEffect(false, effects.melt)
    game.gameOver(false)
    game.setGameOverPlayable(false, music.melodyPlayable(music.powerDown), true)
    game.setGameOverPlayable(false, music.melodyPlayable(music.jumpDown), true)
    game.setGameOverPlayable(false, music.melodyPlayable(music.wawawawaa), true)
    game.setGameOverMessage(false, "GAME OVER!")
    game.setGameOverScoringType(game.ScoringType.HighScore)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile21`, function (sprite17, location17) {
    info.changeScoreBy(-5)
    info.changeLifeBy(-1)
    scene.cameraShake(5, 500)
    tiles.setTileAt(location17, assets.tile`myTile29`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite2, location2) {
    info.changeScoreBy(2)
    tiles.setTileAt(location2, assets.tile`myTile29`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile23`, function (sprite25, location25) {
    info.changeScoreBy(-5)
    info.changeLifeBy(-1)
    scene.cameraShake(5, 500)
    tiles.setTileAt(location25, assets.tile`myTile29`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite18, location18) {
    info.changeLifeBy(1)
    info.changeScoreBy(10)
    tiles.setTileAt(location18, assets.tile`myTile29`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile32`, function (sprite9, location9) {
    game.splash("I AM THE KIND ONE!", "I WILL PUT YOU AT THE END!")
    pause(500)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile33`)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`Main Character Walk Front`,
    100,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite23, location23) {
    info.changeScoreBy(7)
    tiles.setTileAt(location23, assets.tile`myTile29`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile15`, function (sprite6, location6) {
    info.changeScoreBy(-5)
    info.changeLifeBy(-1)
    scene.cameraShake(5, 500)
    tiles.setTileAt(location6, assets.tile`myTile29`)
})
info.onLifeZero(function () {
    game.setGameOverEffect(false, effects.dissolve)
    game.gameOver(false)
    game.setGameOverPlayable(false, music.melodyPlayable(music.powerDown), true)
    game.setGameOverPlayable(false, music.melodyPlayable(music.jumpDown), true)
    game.setGameOverPlayable(false, music.melodyPlayable(music.wawawawaa), true)
    game.setGameOverMessage(false, "GAME OVER!")
    game.setGameOverScoringType(game.ScoringType.HighScore)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile13`, function (sprite10, location10) {
    info.changeScoreBy(-5)
    info.changeLifeBy(-1)
    scene.cameraShake(5, 500)
    tiles.setTileAt(location10, assets.tile`myTile29`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile12`, function (sprite13, location13) {
    info.changeScoreBy(10)
    info.changeLifeBy(1)
    tiles.setTileAt(location13, assets.tile`myTile29`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile22`, function (sprite7, location7) {
    info.changeLifeBy(1)
    info.changeScoreBy(10)
    tiles.setTileAt(location7, assets.tile`myTile29`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile17`, function (sprite20, location20) {
    info.changeScoreBy(-5)
    info.changeLifeBy(-1)
    scene.cameraShake(5, 500)
    tiles.setTileAt(location20, assets.tile`myTile29`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite15, location15) {
    info.changeScoreBy(-5)
    info.changeLifeBy(-1)
    scene.cameraShake(5, 500)
    tiles.setTileAt(location15, assets.tile`myTile29`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile18`, function (sprite16, location16) {
    info.changeLifeBy(1)
    info.changeScoreBy(10)
    tiles.setTileAt(location16, assets.tile`myTile29`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite11, location11) {
    info.changeScoreBy(9)
    tiles.setTileAt(location11, assets.tile`myTile29`)
})
let myEnemy: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(img`
    eeeee2222222222222222222222222222222222ee2222ee2222ee2222222eeeee2222222222222222222222222222222222ee22222eeee222ee2eeeee2222222222222222222222222222222222ee222
    222eeeee22222222222222222222222222222eee2222eeee2222ee222222222eeeee22222222222222222222222222222eee2222eeeee222ee22222eeeee22222222222222222222222222222eee2222
    222222eeeeeee222222222222222222222eeee22222eeeeee2222eee2222222222eeeeeee222222222222222222222eeee22222eeee2222ee222222222eeeeeee222222222222222222222eeee22222e
    222222222eeeeeeeeeeeeee2222222eeeee222222eeee22eee2222eeee22222222222eeeeeeeeeeeeee2222222eeeee222223eeee22222eeee22222222222eeeeeeeeeeeeee2222222eeeee222222eee
    e222222222222222222222222222eeee2222222eeee22222eef22222eeeee222222222222222222222222222eeee2333333eeee22222efe2eeeee222222222222222222222222222eeee2222222eeee2
    eeeeeeee22222222222222222222222222222eee2222222eeeefe222222eeeeeeeee22222222222222333333333333322eee2222222efe22222eeeeeeeee22222222222222222222222222222eee2222
    2222eeeeeeeee222222222222222222222eeee2222222eeeeeeeffe222222222eeeeeeeee222223333333333322222eeee2223322effeee222322222eeeeeeeee222222222222222222222eeee222222
    2223322222222222222222222222222eeee2222222eeeeeeee222efffe222222222222222222222222222222222eeee2233332efffe22eeeee233333222222222222222222222222222eeee2222222ee
    2222233332222222222222222222222222222222eeeeeeeee22222eefffe2222222222222222222222222222222233333332efffee22222eeeee2233333333333333333332222222222222222222eeee
    eeee22233333333333333332222222222222eeeeee222222222eeeee22ffffee22222222223333333333333333333332eeffff22eeeee22222eeeeee23333333333333222222222222222222eeeeeeee
    eeeeeeeeee233333333332222222222eeeeeee2222222222eeeee2222ffeefffffffee2222222222223333333332fffffffeeff2222eeeee222222eeeeeeee222222222222222222222eeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22eeeeeeee2222eee222222ffeeeeeeeeeeffffffffffffffffffffffffeeeeeeeeeeff222222eee2222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeee22222222222222ee22222222222222222222222222effeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffe22222222222222222222222222ee22222222222222eeeeeeeeeee
    eeeeeeeeee22222222222222222eeee2222222222222222222efffeeeeeeeeeeeeeeeeee2eeeeeeeeeeeeeeeeee2eeeeeeeeeeeeeefffe2222222222222222222eeee22222222222222222eeeeeeeeee
    eeeeeeeeee222222222222222222eeeeeeee222222222eeefffeeeeeeeeeeeeeeeeeeeee222222eeeeeeeeee2222eeeeeeeeeeeeeeeeefffeee222222222eeeeeeee222222222222222222eeeeeeeeee
    eeeeeeeee2222222222222222222eeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeee22222222222222222222ee2eeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeee2222222222222222222eeeeeeeee
    eeeeeeeee2222222222222222222ee2222effffffffffffeeeeeeeeeeeeeeeeeeeeeeeee22222222222222222222ee22eeeeeeeeeeeeeeeefffffffffffffe2222ee2222222222222222222eeeeeeeee
    eeeeeeee22e22222222222222222ee2222eeee2efffffffeeeeeeeeeeeeeeeeeeeee22ee22222222222222222222e222eeeeeeeeeeeeeeeeffffffffe2eeee2222ee22222222222222222e22eeeeeeee
    eeeeeeee2222222222222222222ee22222ee22eeffffffeeeeeeeeeeeeeeeeeeeeee22ee22222222222222222222e222eeeeeeeeeeeeeeeeffffffffee22ee22222ee2222222222222222222eeeeeeee
    eeeeeeee2e2222222222222222eee22222ee22efffffffeeeeeeeeeeeeeeeeeeeeee22ee22222222222222222222e222eeeeeeeeeeeeeeeefffffffffe22ee22222eee2222222222222222e2eeeeeeee
    eeeeeee22e2222222222222222ee222222e22eefffffffeeeeeeeeeeeeeeeeeeeeee22ee22222222222222222222e222eeeeeeeeeeeeeeeefffffffffee22e222222ee2222222222222222e22eeeeeee
    eeeeeee22e222222222222222ee222222ee22effffffffeeeeeeeeeeeeeeeeee2eee22ee22222222222222222222e222eeee2eeeeeeeeeeeefffffffffe22ee222222ee222222222222222e22eeeeeee
    eeeeee22e2222222222222222ee222222e22eeffffffffeeeeeeeeeeeeeeeeee2eee22ee22222222222222222222e2222eee2eeeeeeeeeeeefffffffffee22e222222ee2222222222222222e22eeeeee
    eeeeee22e222222222222222ee222222ee2eeeffffffffeeeeeeeeeeeeeeeeee2ee222e222222222222222222222e2222eee2eeeeeeeeeeeefffffffffe3e2ee222222ee222222222222222e22eeeeee
    eeeee22ee222222222222222ee22222ee22eefffffffffeeeeeeeeeeeeeeeeee2ee222e2222222222222222222222e222eee2eeeeeeeeeeeeffffffffffe322ee22222ee222222222222222ee22eeeee
    eeeee22e222222222222222ee222222ee2eeeffffffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e222eee2eeeeeeeeeeeeffffffffffe3e2ee222222ee222222222222222e22eeeee
    eeee22ee222222222222222e222222ee22eefffffffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e222eee22eeeeeeeeeeeeffffffffffe322ee222222e222222222222222ee22eeee
    eeee22ee22e22222222222ee22222ee22eeffffffffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e222eeee2eeeeeeeeeeeefffffffffff3322ee22222ee22222222222e22ee22eeee
    eeee2ee222222222222222e222222ee32eeffffffffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e2222eee2eeeeeeeeeeeefffffffffffe332ee222222e222222222222222ee2eeee
    eee22ee22e22222222222e222222ee32eeffffffeffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e2222eee2eeeeeeeeeeeeffffffffffff3322ee222222e22222222222e22ee22eee
    eee2ee222e22222222222e22222ee23eeeffffffeffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e2222eee2eeeeeeeeeeeeffffffffffffe3322ee22222e22222222222e222ee2eee
    ee22ee22e22222222222e222222ee32eefffffffefffeeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e2222eee2eeeeeeeeeeeeeffffffffffffe332ee222222e22222222222e22ee22ee
    ee2eee2ee2222222222e222222ee33eeefffffffefffeefeeeeeeeeeeeeeee222ee22ee2222222222222222222222e2222eee22eeeeeeeeeeeeffffffffffffe3322ee222222e2222222222ee2eee2ee
    eeeee22ee2222222222e22222ee33eeeffffffffffffeefeeeeeeeeeeeeeee22eee22ee2222222222222222222222e2222eee22eeeeeeeeeeeefffffffffffffe3322ee22222e2222222222ee22eeeee
    eeeee2ee2222222222222222eee33eeffffffffeffffeefeeeeeeeeeeeeeee22eee22ee2222222222222222222222e2222eee22eeeeeeeeeeeefeffffffffffffe332eee2222222222222222ee2eeeee
    eeee22ee2222222222222222ee33eeeffffffffeffffeefeeeeeeeeeeeeeee22ee222ee2222222222222222222222e2222eee22eeeeeeeeeeeefeffffefffffffe3332ee2222222222222222ee22eeee
    eeee2ee2222222222222222ee33eeefffffffffeffffeefeeeeeeeeeeeeeee22ee222e22222222222222222222222e2222eee22eeeeeeeeeeeeeeffffeffffffffe3322ee2222222222222222ee2eeee
    eeee2ee222222222222222ee333eeffffffffffefffeeeeeeeeeeeeeeeeeee22ee222e22222222222222222222222e2222eee22eeeeeeeeeeeeeeefffefffffffffe3322ee222222222222222ee2eeee
    eee2ee2222222222222222ee33eeeffffffffffefffeeeeeeeeeeeeeeeeeee22ee222e22222222222222222222222e22222ee22eeeeeeeeeeeeeeefffefffffffffee332ee2222222222222222ee2eee
    eee2ee222222222222222ee33eeefffffffffffefffeefeeeeeeeeeeeeeeee22ee222e22222222222222222222222ee2222eee2eeeeeeeeeeeeeeefffeffffffffffe3332ee222222222222222ee2eee
    ee2ee2222222222222222e33eeefffffffffffeefffeefeeeeeeeeeeeeeee222ee222e22222222222222222222222ee2222eee22eeeeeeeeeeeeeeffffeffffffffffe3322e2322222222222222ee2ee
    ee2ee222222222222232e333eeffffffffffffeefffeefeeeeeeeeeeeeeee22eee222e22222222222222222222222ee2222eee22eeeeeeeeeeeeeeefffefffffffffffe3322e322222222222222ee2ee
    e2ee2222222222222322e33eeeffffffffffffeefffeefeeeeeeeeeeeeeee22ee2222e22222222222222222222222ee2222eee22eeeeeeeeeeeeeeefffefffffffffffee332e2322222222222222ee2e
    e2ee222222222222332e33eeefffffffffffffeefffeefeeeeeeeeeeeeeee22ee2222e22222222222222222222222ee2222eee22eeeeeeeeeeeeeeefffeffffffffffffe3322e322222222222222ee2e
    eee222222222222332e33eeeffffffffffffffeeffeeeeeeeeeeeeeeeeeee22ee2222222222222222222222222222ee2222eee22eeeeeeeeeeeeeeefffefffffffffffffe3322e322222222222222eee
    eee222222222222322332eefffffffffffffffefffeefeeeeeeeeeeeeeeee22ee2222222222222222222222222222ee2222eee22eeeeeeeeeeeeeeeeffeefffffffffffffe3322322222222222222eee
    ee222222222222332333eeeffffffffffffffeefffeefeeeeeeeeeeeeeee222ee22222222222222222222222222222e2222eee22eeeeeeeeeeeeeeeeffeefffffffffffffee3223322222222222222ee
    ee22222222222332233eeefffffffffffffffeefffeefeeeeeeeeee2eeee222ee22222222222222222222222222222e2222eee22eeeeeeeeeeeeeeeeffeeffffffffffffffee322322222222222222ee
    e22222222222332233eeeffffffffffffffffeefffeefeeeeeeeeee2eeee22eee22222222222222222222222222222e2222eee22eeeeeeeeeeeeeeeefffefffffffffffffffe3323322222222222222e
    e22222222222332332eefffffffffffffffffeefffeefeeeeeeeeeeeeeee22eee22222222222222222222222222222e2222eeee2eeeeeeeeeeeeeeeefffeefffffffffffffffe322322222222222222e
    22222e22222332232eeefffffffffffffffffeefffeefeeeeeeeee2eeeee22ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeeffeefffffffffffffffeee23322222222e22222
    22222e2222332232eeeffffffffffffffffffeeffeefeeeeeeeeee2eeeee22ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeeffeeffffffffffffffffeee2322222222e22222
    222222222332222eeeffffffffffffffffffeefffeefeeeeeeeeee2eeee222ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeeffeefffffffffffffffffeee332222222222222
    2222e222233222eeefffffffffffffffffffeefffeefeeeeeeeeee2eeee222ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeefffeffffffffffffffffffeee322222222e2222
    2222e222332222eeefffffffffffffffffffeefffeefeeeeeeeeee2eeee222ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeefffeefffffffffffffffffeee332222222e2222
    222e222332222eeeffffffffffffffffffffeefffeefeeeeeeeee22eeee222ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeefffeeffffffffffffffffffeee322222222e222
    222e22232e22eeefffffffffffffffffffffeefffeefeeeeeeeee2eeeee22eee222222222222222222222222222222222222eee22eeeeeeeeeeeeeeeeeffeefffffffffffffffffffee332e22222e222
    222e22222e2eeeffffffffffffffffffffffeefffefeeeeeeeeee2eeeee22ee2222222222222222222222222222222222222eee22eeeeeeeeeeeeeeeeeffeeffffffffffffffffffffee32e22222e222
    22ee2222e2eeeffffffffffffffffffffffeeffffefeeeeeeeeee2eeee222ee2222222222222222222222222222222222222eee22eeeeeeeeeeeeeeeeefffefffffffffffffffffffffee32e2222ee22
    22e22222e2eeeffffffffffffffffffffffeeffffefeeeeeeeee22eeee222ee2222222222222222222222222222222222222eee222eeeeeeeeeeeeeeeefffeeffffffffffffffffffffee32e22222e22
    22e2222eeeeefffffffffffffffffffffffeefffeefeeeeeeeee22eeee222ee2222222222222222222222222222222222222eee222eeeeeeeeeeeeeeeefffeefffffffffffffffffffffeeeee2222e22
    2ee2222eeeeffffffffffffffffffffffffeefffeefeeeeeeeee22eeee222ee2222222222222222222222222222222222222eeee22e2eeeeeeeeeeeeeefffeeffffffffffffffffffffffeeee2222ee2
    2e2222eeeefffffffffffffffffffffffffeefffefeeeeeeeeee2eeeee222ee2222222222222222222222222222222222222eeee22eeeeeeeeeeeeeeeeeffeefffffffffffffffffffffffeeee2222e2
    2e222eee2effffffffffffffffffffffffeeefffefeeeeeeeeee2eeee222eee222e222222222222222222222222222222222eeee22ee2eeeeeeeeeeeeeefffeeffffffffffffffffffffffe2eee222e2
    2e222eee2effffffffffffffffffffffffeeffffefeeeeeeeee22eeee222ee2222e222222222222222222222222222222222eeee22ee2eeeeeeeeeeeeeefffeeffffffffffffffffffffffe2eee222e2
    ee22eeee2effffffffffffffffffffffffeeffffefeeeeeeeee22eeee222ee2222e2222222222222222222222222222e22222eee22ee2eeeeeeeeeeeeeefffeeffffffffffffffffffffffe2eeee22ee
    ee22eee22effffffffffffffffffffffffeeffffefeeeeeeeee22eeee222ee2222e2222222222222222222222222222e22222eee22ee2eeeeeeeeeeeeeefffeeffffffffffffffffffffffe22eee22ee
    eeeeee22eeffffffffffffffffffffffffeeffffeeeeeeeeeee22eeee222ee2222e2222222222222222222222222222e22222eee22ee2eeeeeeeeeeeeeeeffeeffffffffffffffffffffffee22eeeeee
    eeeee222efffffffffffffffffffffffffeeffffeeeeeeeeeee2eeeee222ee2222e2222222222222222222222222222e22222eee222e22eeeeeeeeeeeeeefffeeffffffffffffffffffffffe222eeeee
    2222222eeffffffffffffffffffffffffeeefffeeeeeeeeeee22eeee2222ee2222e2222222222222222222222222222e22222eee222e22eeeeeeeeeeeeeefffeeffffffffffffffffffffffee2222222
    222222eefffffffffffffffffffffffffeeffffeeeeeeeeeee22eeee2222e22222e2222222222222222222222222222e22222eee222ee2eeeeeeeeeeeeeefffeefffffffffffffffffffffffee222222
    22222eeefffffffffffffffffffffffffeeffffeeeeeeeeeee22eeee222ee22222e2222222222222222222222222222e22222eeee22ee2eeeeeeeeeeeeeeeffeefffffffffffffffffffffffeee22222
    222eeeeefffffffffffffffffffffffffeeffffeeeeeeeeeee22eeee222ee22222e2222222222222222222222222222e22222eeee22ee2eeeeeeeeeeeeeeefffeeffffffffffffffffffffffeeeee222
    eeee2eeeeffffffffffffffffffffffffeeffffeeeeeeeeee22eeeee222ee2222ee2222222222222222222222222222e22222eeee22ee2eeeeeeeeeeeeeeefffeefffffffffffffffffffffeeee2eeee
    222e2ee2effffffffffffffffffffffffeeffffeeeeeeeeee22eeee2222ee2222ee2222222222222222222222222222e22222eeee22ee22eeeeeeeeeeeeeefffeefffffffffffffffffffffe2ee2e222
    222e2ee2efffffffffffffffffffffffeeeffffeeeeeeeeee22eeee2222ee2222ee2222222222222222222222222222e22222eeee22ee22eeeeeeeeeeeeeefffeefffffffffffffffffffffe2ee2e222
    222e2ee2efffffffffffffffffffffffeefffffeeeeeeeeee22eeee2222ee2222ee2222222222222222222222222222e22222eeee222e22eeeeeeeeeeeeeeffffeeffffffffffffffffffffe2ee2e222
    222e2ee2efffffffffffffffffffffffeefffffeeeeeeeee22eeeee2222ee2222ee2222222222222222222222222222e22222eeee222e22eeeeeeeeeeeeefffffeeffffffffffffffffffffe2ee2e222
    222e2ee22effffffffffffffffffffffeefffffeeeeeeeee22eeee22222e22222ee2222222222222222222222222222ee2222eeee222ee2eeeeeeeeeeeeeeffffeefffffffffffffffffffe22ee2e222
    222e2ee22effffffffffffffffffffffeeffffeeeeeeeeee22eeee22222e22222ee2222222222222222222222222222ee2222eeeee22ee2eeeeeeeeeeeeeefffffefffffffffffffffffffe22ee2e222
    222e2eee2effffffffffffffffffffffeeffffeeeeeeeeee22eeee22222e22222ee2222222222222222222222222222ee2222eeeee22ee22eeeeeeeeeeeeefffffefffffffffffffffffffe2eee2e222
    222e22ee2eefffffffffffffffffffffefffffeeeeeeeee222eee22222ee22222ee2222222222222222222222222222ee2222eeeee22ee22eeeeeeeeeeeeeffffffffffffffffffffffffee2ee22e222
    222e22ee22efffffffffffffffffffffefffffeeeeeeeee22eeee22222ee22222ee2222222222222222222222222222ee2222eeeee22ee22eeeeeeeeeeeeeefffffffffffffffffffffffe22ee22e222
    222e22ee22efffffffffffffffffffffefffffeeeeeeeee22eeee22222ee22222e22222222222222222222222222222ee2222eeeee22ee22eeeeeeeeeeeeeefffffffffffffffffffffffe22ee22e222
    222e22ee22efffffffffffffffffffffffffffeeeeeeeee22eee222222ee22222e22222222222222222222222222222ee22222eeee222e22eeeeeeeeeeeeeefffffffffffffffffffffffe22ee22e222
    222e22ee222effffffffffffffffffffffffffeeeeeeeee22eee222222ee22222e22222222222222222222222222222ee22222eeee222ee2eeeeeeeeeeeeeeefffffffffffffffffffffe222ee22e222
    222e22eee22effffffffffffffffffffffffffeeeeeeee22eeee222222e222222e22222222222222222222222222222ee22222eeee222ee22eeeeeeeeeeeeeefffffffffffffffffffffe22eee22e222
    222e222ee22effffffffffffffffffffffffffeeeeeeee22eeee222222e222222e22222222222222222222222222222ee22222eeee222ee22eeeeeeeeeeeefffffffffffffffffffffffe22ee222e222
    222e222ee22eeffffffffffffffffffffffffeeeeeeeee22eee2222222e222222ee22222eeee222eeee222eeee22222ee222222eeee22222eeeeeeeeeeeeeffffffffffffffffffffffee22ee222e222
    222e222ee222efffffffbffffffffbbbfffffbbeeeeebeeeeeeee222eebeeeeeeddeeeeeeedeeeeeeeeeeeedeeeeeeeddeeeeeebeee22eeeeeeeebeeeeebbfffffbbbffffffffbfffffe222ee222e222
    222e222ee222ebbfffbbbbbfffffbbbbbbbbbbbbbbbbbbeebbbbeeeeedddeeeedddddeeeddddeeeeddeeeeddddeeedddddeeeedbbbbeeebbbbeebbbbbbbbbbbbbbbbbbfffffbbbbbfffe222ee222e222
    222ee22ee222eebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbee222ee22ee222
    222ee22ee2222ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe2222ee22ee222
    2222e222e2222eebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbee2222e222e2222
    2222e222ee2222ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe2222ee222e2222
    2222e222ee2222ebbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbe2222ee222e2222
    2222e222ee2222eebbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbee2222ee222e2222
    2222e2222e22e22ebbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbe22e22e2222e2222
    222222222e22e22eebbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbee22e22e222222222
    222222222e22e222ebbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbe222e22e222222222
    2222222222e22e22eebbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbee22e22e2222222222
    222222e222e22e222ebbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbe222e22e222e222222
    222222e222222e222eebbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbee222e222222e222222
    222222e2222222e222ebbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbe222e2222222e222222
    222222ee222222e222eebbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbee222e222222ee222222
    2222222e222222e2222ebbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbe2222e222222e2222222
    22222e2e2222222e222eebbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbee222e2222222e2e22222
    22222e2e2222222e222eebbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbee222e2222222e2e22222
    22222e2e22222222e22ebbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbe22e22222222e2e22222
    22222e2ee2222222e22ebbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbe22e2222222ee2e22222
    22222e2ee2222222eeeebbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbeeee2222222ee2e22222
    22222e22e2222222eeebbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbeee2222222e22e22222
    22222ee2e2222222eebbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbee2222222e2ee22222
    22222ee2e222222eebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbee222222e2ee22222
    222222e2ee22222ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe22222ee2e222222
    222222e22e2222eebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbee2222e22e222222
    222222e22e22eeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeee22e22e222222
    222222e2eeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeee2e222222
    222222e2ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe2e222222
    222222eeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeee222222
    `)
game.setDialogFrame(assets.image`Dialog Box Frame`)
game.splash("Choose your character!")
let ChosenSprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 6 9 6 . . . . . . 
    . . . . . . 8 6 9 6 8 . . . . . 
    . . . . 6 6 8 9 8 9 8 6 6 . . . 
    . . . . 6 9 9 9 1 9 9 9 6 . . . 
    . . . 8 8 9 9 9 1 9 9 9 8 8 . . 
    . . 6 6 9 9 9 1 1 1 9 9 9 6 6 . 
    . . 9 9 8 1 1 1 8 1 1 1 8 9 9 . 
    . . 6 6 9 9 9 1 1 1 9 9 9 6 6 . 
    . . . 8 8 9 9 9 1 9 9 9 8 8 . . 
    . . . . 6 9 9 9 1 9 9 9 6 . . . 
    . . . . 6 6 8 9 8 9 8 6 6 . . . 
    . . . . . . 8 6 9 6 8 . . . . . 
    . . . . . . . 6 9 6 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(ChosenSprite)
ChosenSprite.z = 100
game.showLongText("Get out of this maze, and collect as many prime numbers as possible! Non-primes will take your points and health. A is the spacebar. Press B to reset. Good luck!", DialogLayout.Full)
game.showLongText("There are evil ones, which is the opposite of the kind one. It says, 'I AM THE EVIL ONE! I WILL PUT YOU AT THE START!' at you, and put you at the start.", DialogLayout.Full)
game.showLongText("There is a kind one, which is the opposite of the evil one. It says, 'I AM THE KIND ONE! I WILL PUT YOU AT THE END!' at you, and put you at the end.", DialogLayout.Full)
info.setLife(3)
info.setScore(1)
tiles.setCurrentTilemap(tilemap`Level 1 of The Maze of Primes`)
scene.setBackgroundColor(0)
mySprite = sprites.create(assets.image`Main Character Stand`, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile25`)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 100, 100)
