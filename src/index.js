import Phaser from 'phaser';

import LoadScene from './scenes/LoadScene';
import MainScene from './scenes/MainScene';

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-game',
    width: 800,
    height: 600,
    scene: [
        LoadScene,
        MainScene,
    ],
};

const game = new Phaser.Game(config);

console.log('Game: ', game);
