var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
    preload: preload,
    create: create
});

var tapMessage;
var tapCount = 0;
var debug;

function preload() {
    // to fit landscape on mobile
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;

    game.load.image('background', 'assets/white.png');
    game.load.image('bday', 'assets/cake.png');
    game.load.image('cupcake', 'assets/cupcake.png');
    game.load.image('pie', 'assets/pie.png');
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

    debug = game.add.text(220, 220, '', {
        fill: 'black'
    });

    var bday = game.add.sprite(0, 30, 'bday');
    bday.scale.setTo(0.2, 0.2);
    bday.inputEnabled = true;
    bday.events.onInputDown.add(onTap, this);

    var cupcake = game.add.sprite(0, 250, 'cupcake');
    cupcake.scale.setTo(0.2, 0.2);
    cupcake.inputEnabled = true;
    cupcake.events.onInputDown.add(onTap, this);

    var pie = game.add.sprite(0, 400, 'pie');
    pie.scale.setTo(0.2, 0.2);
    pie.inputEnabled = true;
    pie.events.onInputDown.add(onTap, this);

}

// http://phaser.io/docs/2.6.2/Phaser.Events.html#onInputDown
function onTap(pastry, pointer) {
    pastry.x += 10;
    tapCount++;
    if (tapCount > 1) {
        tapMessage.text = "You've tapped " + tapCount + " times!";
    }
    else {
        tapMessage.text = "You've tapped " + tapCount + " time!";
    }
    //debug.text = pastry.frameName + " at " + pointer.position;
}
