const TAVOLA = new Tavola(false)
let wait = false
let elemento
let daIndovinare = []
let errori = 0
let vittoria = false

function setup() {
  createCanvas(windowWidth - 40, windowHeight - 20)
  let parametri = window.getURLParams()
  for (let i in TAVOLA.elementi) {
    for (let j in TAVOLA.elementi[i]) {
      let el = TAVOLA.elementi[i][j]
      if (el != null) {
        let isS = 's' in parametri && (j < 2 || j == 17 && i == 0)
        let isP = 'p' in parametri && j > 11 && i != 0
        let isD = 'd' in parametri && j >= 2 && j <= 11
        if (isS || isP || isD) {
          daIndovinare.push(el.simbolo + ' - ' + el.nome)
        } else {
          el.mostra = true
        }
      }
    }
  }
}

function draw() {
  background(255)
  let w, h
  let vertical = true
  if (width > height * 15 / 9) {
    w = min(width * 3 / 4, 2 * height)
    vertical = false
  } else {
    w = width
  }
  h = w / 2
  TAVOLA.draw(0, 0, w, h)
  let tx, ty
  if (vertical) {
    textAlign(CENTER, TOP)
    tx = width / 2
    ty = h + 50
  } else {
    textAlign(LEFT, CENTER)
    tx = w + 50
    ty = h / 2
  }
  if (wait == false && vittoria == false) {
    elemento = random(daIndovinare)
    wait = true
  }
  if (vittoria == true) {
    elemento = 'Hai vinto!!'
    fill(0, 180, 0)
  } else {
    fill(0)
  }
  textSize(width / 36)
  text(elemento, tx, ty)
  if (errori > 0) {
    if (vittoria == true) {
      fill(0)
    } else {
      fill(240, 0, 0)
    }
    text('Errori: ' + errori, tx, ty + width / 18)
  }
}

function windowResized() {
  resizeCanvas(windowWidth - 40, windowHeight - 20)
}

function mouseClicked() {
  let risultato = TAVOLA.prova(mouseX, mouseY, elemento)
  if (risultato == true) {
    wait = false
    daIndovinare.splice(daIndovinare.indexOf(elemento), 1)
    if (daIndovinare.length == 0) {
      vittoria = true
      wait = true
    }
  } else if (risultato == false) {
    errori++
  }
}
