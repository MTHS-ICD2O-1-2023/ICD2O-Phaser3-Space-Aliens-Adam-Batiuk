/* global Phaser */

// created by Adam
// created on May 12 2024

class TitleScene extends Phaser.Scene {
  constructor() {
    super({ key: 'titleScene' })
  }

  init(data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload() {
    console.log('Title Scene')
  }

  create(data) {
  }

  update(time, delta) {
  }
}

export default TitleScene