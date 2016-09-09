"use strict;"

var oldTime;
var paused;


export Game {

  /**
   * @constructor Game
   * Creates a new game object
   * @param {canvasDOMElement} screen canvas object to draw into
   * @param {function} updateFunction function to update the game
   * @param {function} renderFunction function to render the game
   */
  constructor(screen, updateFunction, renderFunction) {
    this.update = updateFunction;
    this.render = renderFunction;

    // Set up buffers
    this.frontBuffer = screen;
    this.frontCtx = screen.getContext('2d');
    this.backBuffer = document.createElement('canvas');
    this.backBuffer.width = screen.width;
    this.backBuffer.height = screen.height;
    this.backCtx = this.backBuffer.getContext('2d');

    // Start the game loop
    oldTime = performance.now();
    paused = false;
    window.requestAnimationFrame(this.loop);
  }

  /**
   * @function pause
   * Pause or unpause the game
   * @param {bool} pause true to pause, false to start
   */
  pause(flag) {
    paused = (flag == true);
  }

  /**
   * @function loop
   * The main game loop.
   * @param{time} the current time as a DOMHighResTimeStamp
   */
  loop(newTime) {
    var elapsedTime = newTime - this.oldTime;
    oldTime = newTime;

    if(!this.paused) this.update(elapsedTime);
    this.render(elapsedTime, this.frontCtx);

    // Flip the back buffer
    frontCtx.drawImage(backBuffer, 0, 0);

    // Run the next loop
    window.requestAnimationFrame(this.loop);
  }

}
