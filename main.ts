namespace SpriteKind {
    export const Friend = SpriteKind.create()
    export const House = SpriteKind.create()
    export const Friend2 = SpriteKind.create()
    export const superFriend = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.superFriend, function (sprite, otherSprite) {
    otherSprite.say("Prrrrr!", 200)
    music.playTone(262, music.beat(BeatFraction.Quarter))
    info.changeScoreBy(1)
    otherSprite.setFlag(SpriteFlag.Ghost, true)
    otherSprite.setImage(img`
        . . . . e e e . . . . e e e 
        . . . . c d d c . . c d d c 
        . . . . c b d d f f d d b c 
        . . . . c 3 b d b d d b 3 c 
        . . . . f b 3 d d d d 3 b f 
        . . . . e d d d d d d d d e 
        b f b . e d f d d d d f d e 
        f d f . f d d f d d f d d f 
        f d f . f 2 d d b b d d b f 
        f d f f b b 2 2 2 2 2 2 f . 
        f b d b b d d d d d d b f . 
        . f f f d d b d d d d d f . 
        . . . f d f f d f f f d f . 
        . . . f f . . f f . . f f . 
        `)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile15`, function (sprite, location) {
    music.beamUp.playUntilDone()
    Home.destroy()
    Cat2.destroy()
    tiles.setTilemap(tilemap`level5`)
    for (let y = 0; y <= 9; y++) {
        for (let x = 0; x <= 9; x++) {
            Cat3 = sprites.create(img`
                e e e . . . . e e e . . . . 
                c d d c . . c d d c . . . . 
                c b d d f f d d b c . . . . 
                c 3 b d d b d b 3 c . . . . 
                f b 3 d d d d 3 b f . . . . 
                e d d d d d d d d e . . . . 
                e d f d d d d f d e . b f b 
                f d d f d d f d d f . f d f 
                f b d d b b d d 2 f . f d f 
                . f 2 2 2 2 2 2 b b f f d f 
                . f b d d d d d d b b d b f 
                . f d d d d d b d d f f f . 
                . f d f f f d f f d f . . . 
                . f f . . f f . . f f . . . 
                `, SpriteKind.superFriend)
            tiles.placeOnTile(Cat3, tiles.getTileLocation(x, y))
        }
    }
    tiles.placeOnTile(PC, tiles.getTileLocation(0, 0))
    info.startCountdown(20)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    tiles.setTilemap(tilemap`level3`)
    Cat1.destroy()
    Home = sprites.create(img`
        ....................e2e22e2e....................
        .................222eee22e2e222.................
        ..............222e22e2e22eee22e222..............
        ...........e22e22eeee2e22e2eeee22e22e...........
        ........eeee22e22e22e2e22e2e22e22e22eeee........
        .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
        ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
        4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
        6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
        46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
        46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
        4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
        6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
        4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
        6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
        46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
        6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
        46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
        46622e22e22e22eeecc6666666666cceee22e22e22e22664
        4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
        6c622e22eeecc66666cc64444446cc66666cceee22e226c6
        46622e22cc66666cc64444444444446cc66666cc22e22664
        46622cc6666ccc64444444444444444446ccc6666cc22664
        4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
        cccccccc6666666cb44444444444444bc6666666cccccccc
        64444444444446c444444444444444444c64444444444446
        66cb444444444cb411111111111111114bc444444444bc66
        666cccccccccccd166666666666666661dccccccccccc666
        6666444444444c116eeeeeeeeeeeeee611c4444444446666
        666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666
        666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
        666eddddddde4c66f4e4effffffe44ee66c4eddddddde666
        666edffdffde4c66f4effffffffff4ee66c4edffdffde666
        666edccdccde4c66f4effffffffffeee66c4edccdccde666
        666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666
        c66edffdffde4c66e4e44e44e44e44ee66c4edffdffde66c
        c66edccdccde4c66e4e44e44e44e44ee66c4edccdccde66c
        cc66666666664c66e4e44e44e44feeee66c46666666666cc
        .c66444444444c66e4e44e44e44ffffe66c44444444466c.
        ..c64eee4eee4c66f4e44e44e44f44fe66c4eee4eee46c..
        ...c4eee4eee4c66f4e44e44e44effee66c4eee4eee4c...
        ....644444444c66f4e44e44e44e44ee66c444444446....
        .....64eee444c66f4e44e44e44e44ee66c444eee46.....
        ......6ccc666c66e4e44e44e44e44ee66c666ccc6......
        `, SpriteKind.House)
    Cat2 = sprites.create(img`
        e e e . . . . e e e . . . . 
        c d d c . . c d d c . . . . 
        c b d d f f d d b c . . . . 
        c 3 b d d b d b 3 c . . . . 
        f b 3 d d d d 3 b f . . . . 
        e d d d d d d d d e . . . . 
        e d f d d d d f d e . b f b 
        f d d f d d f d d f . f d f 
        f b d d b b d d 2 f . f d f 
        . f 2 2 2 2 2 2 b b f f d f 
        . f b d d d d d d b b d b f 
        . f d d d d d b d d f f f . 
        . f d f f f d f f d f . . . 
        . f f . . f f . . f f . . . 
        `, SpriteKind.Friend)
    tiles.placeOnTile(Cat2, tiles.getTileLocation(6, 13))
    PC.x = 80
})
info.onCountdownEnd(function () {
    music.powerUp.play()
    effects.confetti.startScreenEffect()
    game.showLongText("So many friends! " + info.score() + " cats!", DialogLayout.Bottom)
    game.reset()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Friend, function (sprite, otherSprite) {
    otherSprite.say("Press A", 100)
    if (controller.A.isPressed()) {
        otherSprite.say("")
        if (otherSprite == Cat1) {
            game.showLongText("It is a beautiful day. Get outside!", DialogLayout.Bottom)
            music.knock.play()
            tiles.setWallAt(tiles.getTileLocation(4, 6), false)
            tiles.setTileAt(tiles.getTileLocation(4, 6), assets.tile`myTile9`)
        } else if (otherSprite == Cat2) {
            game.showLongText("Step into the portal.", DialogLayout.Bottom)
            music.magicWand.play()
            tiles.setTileAt(tiles.getTileLocation(5, 15), assets.tile`myTile15`)
        }
        otherSprite.setFlag(SpriteFlag.Ghost, true)
    }
})
let Cat3: Sprite = null
let Cat2: Sprite = null
let Home: Sprite = null
let Cat1: Sprite = null
let PC: Sprite = null
game.setDialogFrame(img`
    ..bbabbaabbaabbaabbbbb..
    .bddbaddbaddbaddbabbddb.
    addddbaddbaddbaddbadddda
    addddbbaabbaabbaabbdddda
    abddb11111111111111bddba
    bbab1111111111111111bbab
    babb1111111111111111badb
    abda1111111111111111adda
    adda1111111111111111adba
    bdab1111111111111111bbab
    babb1111111111111111badb
    abda1111111111111111adda
    adda1111111111111111adba
    bdab1111111111111111bbab
    babb1111111111111111badb
    abda1111111111111111adda
    adda1111111111111111adba
    bdab1111111111111111bbab
    babb1111111111111111babb
    abddb11111111111111bddba
    addddbbaabbaabbaabbdddda
    addddabddabddabddabdddda
    .addbbabddabddabddabdda.
    ..aaabbaabbaabbaabbaaa..
    `)
game.setDialogCursor(img`
    e e e . . . . e e e . . . . 
    c d d c . . c d d c . . . . 
    c b d d f f d d b c . . . . 
    c 3 b d d b d b 3 c . . . . 
    f b 3 d d d d 3 b f . . . . 
    e d d d d d d d d e . . . . 
    e d f d d d d f d e . b f b 
    f d d f d d f d d f . f d f 
    f b d d b b d d 2 f . f d f 
    . f 2 2 2 2 2 2 b b f f d f 
    . f b d d d d d d b b d b f 
    . f d d d d d b d d f f f . 
    . f d f f f d f f d f . . . 
    . f f . . f f . . f f . . . 
    `)
game.showLongText("100 cats for Mateo.    Explore the world to make lots of feline friends.", DialogLayout.Center)
color.startFade(color.Black, color.originalPalette, 500)
tiles.setTilemap(tilemap`level1`)
PC = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f f f c c f f f c . 
    f f f c f f f f f f f c . 
    c c c f f f e e f f c c . 
    f f f f f e e f f c c f . 
    f f f b f e e f b f f f . 
    . f 4 1 f 4 4 f 1 4 f . . 
    . f e 4 4 4 4 4 4 e f . . 
    . f f f e e e e f f f . . 
    f e f b 7 7 7 7 b f e f . 
    e 4 f 7 7 7 7 7 7 f 4 e . 
    e e f 6 6 6 6 6 6 f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(PC, tiles.getTileLocation(2, 2))
PC.z = 1
controller.moveSprite(PC, 75, 75)
scene.cameraFollowSprite(PC)
Cat1 = sprites.create(img`
    e e e . . . . e e e . . . . 
    c d d c . . c d d c . . . . 
    c b d d f f d d b c . . . . 
    c 3 b d d b d b 3 c . . . . 
    f b 3 d d d d 3 b f . . . . 
    e d d d d d d d d e . . . . 
    e d f d d d d f d e . b f b 
    f d d f d d f d d f . f d f 
    f b d d b b d d 2 f . f d f 
    . f 2 2 2 2 2 2 b b f f d f 
    . f b d d d d d d b b d b f 
    . f d d d d d b d d f f f . 
    . f d f f f d f f d f . . . 
    . f f . . f f . . f f . . . 
    `, SpriteKind.Friend)
tiles.placeOnTile(Cat1, tiles.getTileLocation(5, 4))
game.onUpdate(function () {
    if (controller.up.isPressed()) {
        PC.setImage(img`
            . . . . f f f f . . . . . 
            . . f f c c c c f f . . . 
            . f f c c c c c c f f . . 
            f f c c c c c c c c f f . 
            f f c c f c c c c c c f . 
            f f f f f c c c f c c f . 
            f f f f c c c f c c f f . 
            f f f f f f f f f f f f . 
            f f f f f f f f f f f f . 
            . f f f f f f f f f f . . 
            . f f f f f f f f f f . . 
            f e f f f f f f f f e f . 
            e 4 f 7 7 7 7 7 7 c 4 e . 
            e e f 6 6 6 6 6 6 f e e . 
            . . . f f f f f f . . . . 
            . . . f f . . f f . . . . 
            `)
    } else if (controller.down.isPressed()) {
        PC.setImage(img`
            . . . . f f f f . . . . . 
            . . f f f f f f f f . . . 
            . f f f f f f c f f f . . 
            f f f f f f c c f f f c . 
            f f f c f f f f f f f c . 
            c c c f f f e e f f c c . 
            f f f f f e e f f c c f . 
            f f f b f e e f b f f f . 
            . f 4 1 f 4 4 f 1 4 f . . 
            . f e 4 4 4 4 4 4 e f . . 
            . f f f e e e e f f f . . 
            f e f b 7 7 7 7 b f e f . 
            e 4 f 7 7 7 7 7 7 f 4 e . 
            e e f 6 6 6 6 6 6 f e e . 
            . . . f f f f f f . . . . 
            . . . f f . . f f . . . . 
            `)
    } else if (controller.left.isPressed()) {
        PC.setImage(img`
            . . . . . . . . . . . . . 
            . . . . f f f f f f . . . 
            . . . f f f f f f f f f . 
            . . f f f c f f f f f f . 
            . f f f c f f f c f f f f 
            f f c c f f f c c f f c f 
            f f f f f e f f f f c c f 
            . f f f e e f f f f f f f 
            . f f f e e f b f e e f f 
            . . f f 4 4 f 1 e 4 e f f 
            . . . f 4 4 4 4 e f f f . 
            . . . f f e e e e 4 4 4 . 
            . . . f 7 7 7 7 e 4 4 e . 
            . . f f 6 6 6 6 f e e f . 
            . . f f f f f f f f f f . 
            . . . f f f . . . f f . . 
            `)
    } else if (controller.right.isPressed()) {
        PC.setImage(img`
            . . . . . . . . . . . . . 
            . . . f f f f f f . . . . 
            . f f f f f f f f f . . . 
            . f f f f f f c f f f . . 
            f f f f c f f f c f f f . 
            f c f f c c f f f c c f f 
            f c c f f f f e f f f f f 
            f f f f f f f e e f f f . 
            f f e e f b f e e f f f . 
            f f e 4 e 1 f 4 4 f f . . 
            . f f f e 4 4 4 4 f . . . 
            . 4 4 4 e e e e f f . . . 
            . e 4 4 e 7 7 7 7 f . . . 
            . f e e f 6 6 6 6 f f . . 
            . f f f f f f f f f f . . 
            . . f f . . . f f f . . . 
            `)
    }
})
