/* global Phaser */

// created by Adam
// created on May 12 2024

import SplashScene from './splashScene.js'

// out game scene
const splashScene = new SplashScene()

const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: 'arcade',
    arcade: {
      debug: true
    }
  },
  // set beckground color
  backgroundColor: 0x5f6e7a,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
}

const game = new Phaser.Game(config)

// load scenes
// 'key' can not be reused
game.scene.add('splashScene', splashScene)

// start title
game.scene.start('splashScene')