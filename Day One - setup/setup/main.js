const game = new Phaser.Game(600, 600, Phaser.AUTO, '', { preload, create, update });

function preload() {
    game.load.image('sky', '../img/background-sky (2).png')
}

function create() {
   game.add.sprite(0,0,'sky')
}

function update() {

}