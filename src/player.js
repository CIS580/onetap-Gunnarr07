var x = 380;
var y = 480;
var image = new Image();
image.onload = function () {
    y = y - image.height;
    x = x - image.width/8;
}
image.src = '';

export function init() {}

export function update(elapsedTime) {}

export function render(elapsedTime) {

}
