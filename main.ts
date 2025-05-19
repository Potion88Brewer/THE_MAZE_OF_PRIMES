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
        . . . 3 3 . . . . 3 3 . . . . . 
        . . . . . 3 3 3 3 . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . . 3 . . . . . . . 
        . . . . . . . . . 3 . . . . . . 
        . . . . . 3 . . . 3 . . . . . . 
        . . . . . 3 . . . . 3 . . . . . 
        . . . . . 3 . . . . 3 . . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
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
game.setDialogFrame(img`
    ffff.....ff....fff....ff.ff....fff....fff...ffff
    f899ff..f98f..f898f..f89f98f..f898f..f89f.ff998f
    f98998f.f999ff89898ff999f999ff89898ff999ff89989f
    f998998f89899f99899f998989899f99899f9989f899899f
    .f99f98889989f99899f989989989f99899f9899f89f99f.
    .f899f88f8988f89898f8898f8988f89898f889888f998f.
    ..f888f8ff898ff8f8ff898fff898ff8f8ff898f8f888f..
    .fff888ffffffffffffffffffffffffffffffffff888ff..
    f99998ff99999999999999999999999999999999fff88ff.
    f898998f99999999999999999999999999999999ff89999f
    .f99889f99999999999999999999999999999999f899898f
    ..f9988f99999999999999999999999999999999f988998.
    ..ffffff99999999999999999999999999999999f8899f..
    .f8998ff99999999999999999999999999999999ffffff..
    f899998f99999999999999999999999999999999ff8998f.
    f98888ff99999999999999999999999999999999f899998f
    f899998f99999999999999999999999999999999ff88889f
    .f8998ff99999999999999999999999999999999f899998f
    ..ffffff99999999999999999999999999999999ff8998f.
    ..f998ff99999999999999999999999999999999ffffff..
    .f99889f99999999999999999999999999999999f8899f..
    f898998f99999999999999999999999999999999f98899f.
    f99998ff99999999999999999999999999999999f899898f
    .ff88fff99999999999999999999999999999999ff89999f
    f99998ff99999999999999999999999999999999fff88ff.
    f898998f99999999999999999999999999999999ff89999f
    .f99889f99999999999999999999999999999999f899898f
    ..f9988f99999999999999999999999999999999f98899f.
    ..ffffff99999999999999999999999999999999f8899f..
    .f8998ff99999999999999999999999999999999ffffff..
    f899998f99999999999999999999999999999999ff8998f.
    f98888ff99999999999999999999999999999999f899998f
    f899998f99999999999999999999999999999999ff88889f
    .f8998ff99999999999999999999999999999999f899998f
    ..ffffff99999999999999999999999999999999ff8998f.
    ..f9988f99999999999999999999999999999999ffffff..
    .f99889f99999999999999999999999999999999f8899f..
    f898998f99999999999999999999999999999999f98899f.
    f99998ff99999999999999999999999999999999f999898f
    .ff88fff99999999999999999999999999999999ff89999f
    ..ff888ffffffffffffffffffffffffffffffffff888fff.
    ..f888f8f898ff8f8ff898fff898ff8f8ff898ff8f888f..
    .f899f888988f89898f8898f8988f89898f8898f88f998f.
    .f99f98f9989f99899f989989989f99899f98998889f99f.
    f998998f9899f99899f998989899f99899f99898f899899f
    f98998ff999ff89898ff999f999ff89898ff999f.f89989f
    f899ff.f98f..f898f..f89f98f..f898f..f89f..ff998f
    ffff...fff....fff....ff.ff....fff....ff.....ffff
    `)
game.showLongText("Get out of this maze, and collect as many prime numbers as possible! Non-primes will take your points and health. A is the spacebar. Press B to reset. Good luck!", DialogLayout.Full)
game.showLongText("There are evil ones, which is the opposite of the kind one. It says, 'I AM THE EVIL ONE! I WILL PUT YOU AT THE START!' at you, and put you at the start.", DialogLayout.Full)
game.showLongText("There is a kind one, which is the opposite of the evil one. It says, 'I AM THE KIND ONE! I WILL PUT YOU AT THE END!' at you, and put you at the end.", DialogLayout.Full)
info.setLife(3)
info.setScore(1)
tiles.setCurrentTilemap(tilemap`Level 1 of The Maze of Primes`)
scene.setBackgroundColor(0)
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f e e e e e e e e f f . . 
    . . f e e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile25`)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 100, 100)
