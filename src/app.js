"use strict";

/* Classes */
const Game = require('./game');
const EntityManager = require('./entity-manager');
const Player = require('./player');
const Snake = require('./snake');

/* Global variables */
var canvas = document.getElementById('screen');
var game = new Game(canvas, update, render);
var entities = new EntityManager(canvas.width, canvas.height, 128);

// Create the player
var player = new Player({x: 382, y: 440});
entities.addEntity(player);

// Create some snakes
var snakes = [];
for(var i=0; i < 20; i++) {
  var snake = new Snake({
    x: Math.random() * 760,
    y: Math.random() * 40 + 100,
  });
  snakes.push(snake);
  entities.addEntity(snake);
}
snakes.sort(function(s1, s2) {return s1.y - s2.y;});


/**
 * @function masterLoop
 * Advances the game in sync with the refresh rate of the screen
 * @param {DOMHighResTimeStamp} timestamp the current time
 */
var masterLoop = function(timestamp) {
  game.loop(timestamp);
  window.requestAnimationFrame(masterLoop);
}
masterLoop(performance.now());


/**
 * @function update
 * Updates the game state, moving
 * game objects and handling interactions
 * between them.
 * @param {DOMHighResTimeStamp} elapsedTime indicates
 * the number of milliseconds passed since the last frame.
 */
function update(elapsedTime) {
  player.update(elapsedTime);
  entities.updateEntity(player);
  snakes.forEach(function(snake) {
    snake.update(elapsedTime);
    entities.updateEntity(snake);
  });
  // TODO: Update the game objects

  entities.collide(function(entity1, entity2) {
    entity1.color = '#ff0000';
    entity2.color = '#00ff00';
  });
}

/**
  * @function render
  * Renders the current game state into a back buffer.
  * @param {DOMHighResTimeStamp} elapsedTime indicates
  * the number of milliseconds passed since the last frame.
  * @param {CanvasRenderingContext2D} ctx the context to render to
  */
function render(elapsedTime, ctx) {
  ctx.fillStyle = "lightblue";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  entities.renderCells(ctx);
  snakes.forEach(function(snake){snake.render(elapsedTime, ctx);});
  player.render(elapsedTime, ctx);
}
