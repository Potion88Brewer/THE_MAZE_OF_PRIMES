def on_overlap_tile(sprite, location):
    info.change_score_by(-5)
    info.change_life_by(-1)
    scene.camera_shake(5, 500)
    tiles.set_tile_at(location, assets.tile("""
        transparency16
        """))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile0
        """),
    on_overlap_tile)

def on_overlap_tile2(sprite2, location2):
    info.change_score_by(2)
    tiles.set_tile_at(location2, assets.tile("""
        transparency16
        """))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile1
        """),
    on_overlap_tile2)

def on_overlap_tile3(sprite3, location3):
    info.change_score_by(-5)
    info.change_life_by(-1)
    scene.camera_shake(5, 500)
    tiles.set_tile_at(location3, assets.tile("""
        transparency16
        """))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile19
        """),
    on_overlap_tile3)

def on_up_pressed():
    animation.run_image_animation(mySprite,
        assets.animation("""
            Main Character Walk Front
            """),
        100,
        True)
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_overlap_tile4(sprite4, location4):
    info.change_score_by(-5)
    info.change_life_by(-1)
    scene.camera_shake(5, 500)
    tiles.set_tile_at(location4, assets.tile("""
        transparency16
        """))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile6
        """),
    on_overlap_tile4)

def EnemyRadiusAttack():
    for value in sprites.all_of_kind(SpriteKind.player):
        if myEnemy.x > mySprite.x - 5 or myEnemy.y > mySprite.y + 5:
            value.follow(mySprite, 20)
        if not (myEnemy.x > mySprite.x - 5 or myEnemy.y > mySprite.y + 5):
            music.play(music.create_song(hex("""
                    0078000408020105001c000f0a006400f4010a0000040000000000000000000000000000000002730000000400021d2504000800021e2708000c0001220c001000031d202910001400012214001800021d2a18001c000220251c002000031e222a2000240003191d2924002800021e2728002c000219202c003000031b252a30003400021e24340038000319222a38003c0002192c3c004000022025
                    """)),
                music.PlaybackMode.UNTIL_DONE)

def on_b_pressed():
    game.reset()
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

def on_overlap_tile5(sprite5, location5):
    global myEnemy
    game.splash("I AM THE EVIL ONE!", "I WILL PUT YOU AT THE START!")
    myEnemy = sprites.create(assets.image("""
        Main Enemy
        """), SpriteKind.player)
    animation.run_image_animation(myEnemy,
        [img("""
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
            """)],
        500,
        False)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile
        """),
    on_overlap_tile5)

def on_overlap_tile6(sprite6, location6):
    info.change_score_by(-5)
    info.change_life_by(-1)
    scene.camera_shake(5, 500)
    tiles.set_tile_at(location6, assets.tile("""
        transparency16
        """))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile15
        """),
    on_overlap_tile6)

def on_overlap_tile7(sprite7, location7):
    info.change_life_by(1)
    info.change_score_by(10)
    tiles.set_tile_at(location7, assets.tile("""
        transparency16
        """))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile22
        """),
    on_overlap_tile7)

def on_overlap_tile8(sprite8, location8):
    game.game_over(True)
    game.set_game_over_playable(False, music.melody_playable(music.power_up), True)
    game.set_game_over_playable(False, music.melody_playable(music.jump_up), True)
    game.set_game_over_playable(False, music.melody_playable(music.ba_ding), True)
    game.set_game_over_message(True, "YOU WON!")
    game.set_game_over_effect(True, effects.confetti)
    game.set_game_over_scoring_type(game.ScoringType.HIGH_SCORE)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile24
        """),
    on_overlap_tile8)

def on_overlap_tile9(sprite9, location9):
    game.splash("I AM THE KIND ONE!", "I WILL PUT YOU AT THE END!")
    pause(500)
    tiles.place_on_random_tile(mySprite, assets.tile("""
        myTile33
        """))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile32
        """),
    on_overlap_tile9)

def on_overlap_tile10(sprite10, location10):
    info.change_score_by(-5)
    info.change_life_by(-1)
    scene.camera_shake(5, 500)
    tiles.set_tile_at(location10, assets.tile("""
        transparency16
        """))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile13
        """),
    on_overlap_tile10)

def on_overlap_tile11(sprite11, location11):
    info.change_score_by(9)
    tiles.set_tile_at(location11, assets.tile("""
        transparency16
        """))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile7
        """),
    on_overlap_tile11)

def on_overlap_tile12(sprite12, location12):
    info.change_score_by(5)
    tiles.set_tile_at(location12, assets.tile("""
        transparency16
        """))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile4
        """),
    on_overlap_tile12)

def on_overlap_tile13(sprite13, location13):
    info.change_score_by(10)
    info.change_life_by(1)
    tiles.set_tile_at(location13, assets.tile("""
        transparency16
        """))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile12
        """),
    on_overlap_tile13)

def on_left_pressed():
    animation.run_image_animation(mySprite,
        assets.animation("""
            Main Character Walk Left
            """),
        100,
        True)
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_overlap_tile14(sprite14, location14):
    info.change_life_by(1)
    info.change_score_by(10)
    tiles.set_tile_at(location14, assets.tile("""
        transparency16
        """))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile9
        """),
    on_overlap_tile14)

def on_overlap_tile15(sprite15, location15):
    info.change_score_by(-5)
    info.change_life_by(-1)
    scene.camera_shake(5, 500)
    tiles.set_tile_at(location15, assets.tile("""
        transparency16
        """))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile3
        """),
    on_overlap_tile15)

def on_overlap_tile16(sprite16, location16):
    info.change_life_by(1)
    info.change_score_by(10)
    tiles.set_tile_at(location16, assets.tile("""
        transparency16
        """))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile18
        """),
    on_overlap_tile16)

def on_overlap_tile17(sprite17, location17):
    info.change_score_by(-5)
    info.change_life_by(-1)
    scene.camera_shake(5, 500)
    tiles.set_tile_at(location17, assets.tile("""
        transparency16
        """))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile21
        """),
    on_overlap_tile17)

def on_overlap_tile18(sprite18, location18):
    info.change_life_by(1)
    info.change_score_by(10)
    tiles.set_tile_at(location18, assets.tile("""
        transparency16
        """))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile16
        """),
    on_overlap_tile18)

def on_overlap_tile19(sprite19, location19):
    info.change_score_by(-5)
    info.change_life_by(-1)
    scene.camera_shake(5, 500)
    tiles.set_tile_at(location19, assets.tile("""
        transparency16
        """))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile20
        """),
    on_overlap_tile19)

def on_right_pressed():
    animation.run_image_animation(mySprite,
        assets.animation("""
            Main Character Walk Right
            """),
        100,
        True)
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_overlap_tile20(sprite20, location20):
    info.change_score_by(-5)
    info.change_life_by(-1)
    scene.camera_shake(5, 500)
    tiles.set_tile_at(location20, assets.tile("""
        transparency16
        """))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile17
        """),
    on_overlap_tile20)

def on_on_score():
    game.set_game_over_effect(False, effects.melt)
    game.game_over(False)
    game.set_game_over_playable(False, music.melody_playable(music.power_down), True)
    game.set_game_over_playable(False, music.melody_playable(music.jump_down), True)
    game.set_game_over_playable(False, music.melody_playable(music.wawawawaa), True)
    game.set_game_over_message(False, "GAME OVER!")
    game.set_game_over_scoring_type(game.ScoringType.HIGH_SCORE)
info.on_score(0, on_on_score)

def on_overlap_tile21(sprite21, location21):
    info.change_score_by(-5)
    info.change_life_by(-1)
    scene.camera_shake(5, 500)
    tiles.set_tile_at(location21, assets.tile("""
        transparency16
        """))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile8
        """),
    on_overlap_tile21)

def on_down_pressed():
    animation.run_image_animation(mySprite,
        assets.animation("""
            Main Character Walk Front
            """),
        100,
        True)
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def on_overlap_tile22(sprite22, location22):
    info.change_score_by(-5)
    info.change_life_by(-1)
    scene.camera_shake(5, 500)
    tiles.set_tile_at(location22, assets.tile("""
        transparency16
        """))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile2
        """),
    on_overlap_tile22)

def on_overlap_tile23(sprite23, location23):
    info.change_score_by(7)
    tiles.set_tile_at(location23, assets.tile("""
        transparency16
        """))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile5
        """),
    on_overlap_tile23)

def on_life_zero():
    game.set_game_over_effect(False, effects.dissolve)
    game.game_over(False)
    game.set_game_over_playable(False, music.melody_playable(music.power_down), True)
    game.set_game_over_playable(False, music.melody_playable(music.jump_down), True)
    game.set_game_over_playable(False, music.melody_playable(music.wawawawaa), True)
    game.set_game_over_message(False, "GAME OVER!")
    game.set_game_over_scoring_type(game.ScoringType.HIGH_SCORE)
info.on_life_zero(on_life_zero)

def on_overlap_tile24(sprite24, location24):
    info.change_score_by(-5)
    info.change_life_by(-1)
    scene.camera_shake(5, 500)
    tiles.set_tile_at(location24, assets.tile("""
        transparency16
        """))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile10
        """),
    on_overlap_tile24)

def on_overlap_tile25(sprite25, location25):
    info.change_score_by(-5)
    info.change_life_by(-1)
    scene.camera_shake(5, 500)
    tiles.set_tile_at(location25, assets.tile("""
        transparency16
        """))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile23
        """),
    on_overlap_tile25)

def on_overlap_tile26(sprite26, location26):
    info.change_score_by(-5)
    info.change_life_by(-1)
    scene.camera_shake(5, 500)
    tiles.set_tile_at(location26, assets.tile("""
        transparency16
        """))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile14
        """),
    on_overlap_tile26)

myEnemy: Sprite = None
mySprite: Sprite = None
game.set_dialog_frame(img("""
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
    """))
game.show_long_text("Get out of this maze, and collect as many prime numbers as possible! Non-primes will take your points and health. A is the spacebar. Press B to reset. Good luck!",
    DialogLayout.FULL)
game.show_long_text("There are evil ones, which is the opposite of the kind one. It says, 'I AM THE EVIL ONE! I WILL PUT YOU AT THE START!' at you, and put you at the start.",
    DialogLayout.FULL)
game.show_long_text("There is a kind one, which is the opposite of the evil one. It says, 'I AM THE KIND ONE! I WILL PUT YOU AT THE END!' at you, and put you at the end.",
    DialogLayout.FULL)
info.set_life(3)
info.set_score(1)
tiles.set_current_tilemap(tilemap("""
    Level 1 of The Maze of Primes
    """))
mySprite = sprites.create(img("""
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
        """),
    SpriteKind.player)
tiles.place_on_random_tile(mySprite, assets.tile("""
    myTile25
    """))
scene.camera_follow_sprite(mySprite)
controller.move_sprite(mySprite, 100, 100)