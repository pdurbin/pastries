var msg;
var counter = 0;
var bday;
var cupcake;
var pie;
var debug;

window.onload = function() {

    var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
        preload: preload,
        create: create
    });

    function preload() {

        game.load.image('background', 'assets/white.png');
        game.load.image('bday', 'assets/cake.png');
        game.load.image('cupcake', 'assets/cupcake.png');
        game.load.image('pie', 'assets/pie.png');

    }

    function create() {

        var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'background');
        logo.anchor.setTo(0.5, 0.5);

        var header = game.add.text(0, 0, 'Tap the pastries.', {
            fill: 'black'
        });

        msg = game.add.text(220, 0, '', {
            fill: 'black'
        });

        debug = game.add.text(220, 220, '', {
            fill: 'black'
        });

        bday = game.add.sprite(0, 30, 'bday');
        bday.scale.setTo(.2, .2);
        bday.inputEnabled = true;
        bday.events.onInputDown.add(onTap, this);

        cupcake = game.add.sprite(0, 250, 'cupcake');
        cupcake.scale.setTo(.2, .2);
        cupcake.inputEnabled = true;
        cupcake.events.onInputDown.add(onTap, this);

        pie = game.add.sprite(0, 400, 'pie');
        pie.scale.setTo(.2, .2);
        pie.inputEnabled = true;
        pie.events.onInputDown.add(onTap, this);
    }

};

// http://phaser.io/docs/2.6.2/Phaser.Events.html#onInputDown
function onTap(pastry, pointer) {
    pastry.x += 10;
    counter++;
    if (counter > 1) {
        msg.text = "You've tapped " + counter + " times!";
    }
    else {
        msg.text = "You've tapped " + counter + " time!";
    }
    //debug.text = pastry.frameName + " at " + pointer.position;
}