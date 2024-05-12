/* global Phaser */

// created by Adam
// created on May 12 2024

class SplashScene extends Phaser.Scene {
  constructor () {
    super({ key: 'splashScene'})
  }

  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload () {
    console.log('Splash Scene')
  }

  create (data) {
  }

  update (time, delta) {
    this.scene.switch('titleScene')
  }
}

export default SplashScene