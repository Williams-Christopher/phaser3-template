// The 'official' project template shows importing the logo even though the docs discourage it:
// import logoImg from '../assets/logo.png';

export default class MainScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MainScene' });
    }

    preload () {
        // The local path is relative to _the project_ not the file...
        // Though if the image were 'imported' (see above) the path would be relative to the file
        this.load.image('logo', 'src/assets/logo.png');
    }

    create () {
        const logo = this.add.image(400, 150, 'logo');
      
        this.tweens.add({
            targets: logo,
            y: 450,
            duration: 2000,
            ease: "Power2",
            yoyo: true,
            loop: -1
        });
    }
}
