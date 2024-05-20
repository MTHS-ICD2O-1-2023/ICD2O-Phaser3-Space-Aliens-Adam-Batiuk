/* global Phaser */

// created by Adam
// created on May 12 2024

class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'gameScene' })
  }

  init(data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload() {
    console.log('Game Scene')
  }

  create(data) {
  }

  update(time, delta) {
  }
}

export default GameScene