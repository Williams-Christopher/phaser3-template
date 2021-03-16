
export default class LoadScene extends Phaser.Scene {
    constructor() {
        super({ key: 'LoadScene' });
    }

    preload() {}

    create() {
        this.scene.start('MainScene');
    }
}
