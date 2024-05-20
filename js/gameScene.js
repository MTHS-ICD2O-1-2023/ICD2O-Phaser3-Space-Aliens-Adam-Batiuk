/* global Phaser */

// created by Adam
// created on May 12 2024

class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'gameScene' })

    this.background = null
    this.ship = null
  }

  init(data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload() {
    console.log('Game Scene')

    this.load.image('starBackground', 'assets/starBackground.png')
    this.load.image('ship', 'assets/spaceShip.png')
  }

  create(data) {
    this.background = this.add.image(0, 0, 'starBackground').setScale(2.0)
    this.background.setOrigin(0, 0)

    this.ship = this.physics.add.sprite(1920 / 2, 1080 - 100, 'ship')
  }

  update(time, delta) {
  }
}

export default GameScene