/* global Phaser */

// Created by Adam Batiuk
// Created on April 17 2023
// game config

// scene import
import SplashScene from "./splashScene.js"

// create the new scenes
const splashScene = new SplashScene()

/**
 * Start Phaser Game.
 */
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: {
    default: "arcade",
    arcade: {
      debug: true,
    },
  },
  //set background color
  backgroundColor: 0x5f6e7a,
  scale: {
    made: Phaser.Scale.FIT,
    // place in middle
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
}

const game = new Phaser.Game(config)
// console.log(game)

// load scenes
game.scene.add("splashScene", splashScene)

// the star scene
game.scene.start("splashScene")
