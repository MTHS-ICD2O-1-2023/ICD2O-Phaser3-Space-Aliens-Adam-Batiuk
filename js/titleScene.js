/* global Phaser */

// Created by Adam Batiuk
// Created on April 17 2023
// This is a Title Scene

/**
 * This class is the Titlt Scene.
 */
class TitleScene extends Phaser.Scene {
  /**
   * This method is the construtor
   */
  constructor() {
    super({ key: "titleScene"})

    this.titleSceneBackgroundImage = null
    this.titleSceneText = null
    this.titleSceneTextStyle = {
      font: "200px Times",
      fill: "#fde4B9",
      align: "center",
    }
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
    console.log("Title Scene")
    this.preload.image("titleSceneBackground", "assets/aliens_screen_image.jpg")
  }

  /**
   * Can be defined on own Scenes.
   * Use to create game opjects.
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start()
   */
  create(data) {
    this.titleSceneBackgroundImage = this.add
      .sprite(0, 0, "titleSceneBackground")
      .setScale(2.75)
    this.titleSceneBackgroundImage.x = 1920 / 2
    this.titleSceneBackgroundImage.y = 1080 / 2

    this.titleSceneText = this.add
      .text(1920 / 2, 1080 / 2 + 350, "Space Aliens", this.titleSceneTextStyle)
      ,setOrigin(0.5)
  }

  /**
   * Should be overridden
   * This method is called once per game step
   * @param {number} time - The current time
   * @param {number} delta- The delta time since last frame (ms)
   */
  update(time, delta) {
    //pass
  }
}

export default TitleScene