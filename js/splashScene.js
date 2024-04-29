/* global Phaser */

// Created by Adam Batiuk
// Created on April 17 2023
// This is a Splash Scene

/**
 * This class is the Splash Scene.
 */
class SplashScene extends Phaser.Scene {
  /**
   * This method is the construtor
   */
  constructor() {
    super({ key: "splashScene"})

    this.splashScemeBackgroundImage = nill
  }

  /**
   * Can be defined on own Scenes.
   * This method is call by the Scence Manager when starts,
   *   before preload() and create()
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  init(data) {
    this.cameras.main.setBackgroundColor("ffffff")
  }

  /**
   * Can be defined on own Scenes.
   * Use to load assets.
   */
  preload() {
    console.log("splash Scene")
    this.preload.image("splashSceneBackground", "./assets/splashSceneImage.png")
  }

  /**
   * Can be defined on own Scenes.
   * Use to create game opjects.
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start()
   */
  create(data) {
    this.splashScemeBackgroundImage = this.add.sprite(
      0,
      0,
      "splashSceneBackground"
    )
    this.splashScemeBackgroundImage.x = 1920 / 2
    this.splashScemeBackgroundImage.y = 1080 / 2
  }

  /**
   * Should be overridden
   * This method is called once per game step
   * @param {number} time - The current time
   * @param {number} delta- The delta time since last frame (ms)
   */
  update(time, delta) {
    if (time > 3000) {
      this.scene.switch("titleScene")
    }
  }
}

export default SplashScene