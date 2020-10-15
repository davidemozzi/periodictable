const TAVOLA = new Tavola()

function setup() {
  createCanvas(windowWidth - 50, windowHeight - 50)
}

function draw() {
  background(255)
  let w, h
  if (width > height * 15 / 9) {
    w = min(width * 3 / 4, 2 * height)
  } else {
    w = width
  }
  h = w / 2
  TAVOLA.draw(0, 0, w, h)
}

function windowResized() {
  resizeCanvas(windowWidth - 50, windowHeight - 50)
}
