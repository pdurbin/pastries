var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
    preload: preload,
    create: create,
    update: update
});

var tapMessage;
var tapCount = 0;
var winnerMessage;
var debug;
var bday;
var cupcake;
var pie;
var gameover = 0;

function preload() {
    // to fit landscape on mobile
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;

    game.load.image('background', 'assets/white.png');
    game.load.image('cake', 'assets/cake.png');
    game.load.image('cupcake', 'assets/cupcake.png');
    game.load.image('pie', 'assets/pie.png');
    //game.load.image('finishLine', 'assets/blackpixel.png');
    game.load.image('finishLine', 'assets/rainbow.png');

}

function create() {

    var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'background');
    logo.anchor.setTo(0.5, 0.5);

    var instructions = game.add.text(0, 0, 'Tap the pastries!', {
        fill: 'black'
    });

    tapMessage = game.add.text(220, 0, '', {
        fill: 'black'
    });

    winnerMessage = game.add.text(540, 0, '', {
        fill: 'black'
    });

    debug = game.add.text(220, 220, '', {
        fill: 'black'
    });

    bday = game.add.sprite(0, 30, 'cake');
    bday.scale.setTo(0.2, 0.2);
    bday.inputEnabled = true;
    bday.events.onInputDown.add(onTap, this);
    game.physics.arcade.enable(bday);

    cupcake = game.add.sprite(0, 250, 'cupcake');
    cupcake.scale.setTo(0.2, 0.2);
    cupcake.inputEnabled = true;
    cupcake.events.onInputDown.add(onTap, this);
    game.physics.arcade.enable(cupcake);

    pie = game.add.sprite(0, 400, 'pie');
    pie.scale.setTo(0.2, 0.2);
    pie.inputEnabled = true;
    pie.events.onInputDown.add(onTap, this);
    game.physics.arcade.enable(pie);

    lines = game.add.group();
    lines.enableBody = true;

    var finishLine = lines.create(750, 0, 'finishLine');
    finishLine.scale.setTo(10, 800);

}

function update() {
    game.physics.arcade.collide(bday, lines);
    game.physics.arcade.collide(cupcake, lines);
    game.physics.arcade.collide(pie, lines);

    game.physics.arcade.overlap(bday, lines, reachFinish, null, this);
    game.physics.arcade.overlap(cupcake, lines, reachFinish, null, this);
    game.physics.arcade.overlap(pie, lines, reachFinish, null, this);
}

function reachFinish(pastry, lines) {
    if (gameover != 1) {
        winnerMessage.text = pastry.key.toUpperCase() + " wins!";
        gameover = 1;
    }
}

// http://phaser.io/docs/2.6.2/Phaser.Events.html#onInputDown
function onTap(pastry, pointer) {
    tapCount++;
    if (tapCount > 1) {
        tapMessage.text = "You've tapped " + tapCount + " times!";
    }
    else {
        tapMessage.text = "You've tapped " + tapCount + " time!";
    }
    if (gameover == 1) {
        return;
    }
    pastry.x += 10;
    //debug.text = pastry.frameName + " at " + pointer.position;
}
