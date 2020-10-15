class Elemento {
  constructor(simbolo, nome, numeroAtomico, mostra = true) {
    this.simbolo = simbolo
    this.nome = nome
    this.numeroAtomico = numeroAtomico
    this.mostra = mostra
  }
}

class Tavola {
  constructor(mostra = true) {
    this.elementi = Array(7).fill(null)
    for (let k in this.elementi) {
      this.elementi[k] = Array(18)
    }
    this.elementi[0][0] = new Elemento('H', 'Idrogeno', 1, mostra)
    this.elementi[0][17] = new Elemento('He', 'Elio', 2, mostra)
    this.elementi[1][0] = new Elemento('Li', 'Litio', 3, mostra)
    this.elementi[1][1] = new Elemento('Be', 'Berillio', 4, mostra)
    this.elementi[1][12] = new Elemento('B', 'Boro', 5, mostra)
    this.elementi[1][13] = new Elemento('C', 'Carbonio', 6, mostra)
    this.elementi[1][14] = new Elemento('N', 'Azoto', 7, mostra)
    this.elementi[1][15] = new Elemento('O', 'Ossigeno', 8, mostra)
    this.elementi[1][16] = new Elemento('F', 'Fluoro', 9, mostra)
    this.elementi[1][17] = new Elemento('Ne', 'Neon', 10, mostra)
    this.elementi[2][0] = new Elemento('Na', 'Sodio', 11, mostra)
    this.elementi[2][1] = new Elemento('Mg', 'Magnesio', 12, mostra)
    this.elementi[2][12] = new Elemento('Al', 'Alluminio', 13, mostra)
    this.elementi[2][13] = new Elemento('Si', 'Silicio', 14, mostra)
    this.elementi[2][14] = new Elemento('P', 'Fosforo', 15, mostra)
    this.elementi[2][15] = new Elemento('S', 'Zolfo', 16, mostra)
    this.elementi[2][16] = new Elemento('Cl', 'Cloro', 17, mostra)
    this.elementi[2][17] = new Elemento('Ar', 'Argon', 18, mostra)
    this.elementi[3][0] = new Elemento('K', 'Potassio', 19, mostra)
    this.elementi[3][1] = new Elemento('Ca', 'Calcio', 20, mostra)
    this.elementi[3][2] = new Elemento('Sc', 'Scandio', 21, mostra)
    this.elementi[3][3] = new Elemento('Ti', 'Titanio', 22, mostra)
    this.elementi[3][4] = new Elemento('V', 'Vanadio', 23, mostra)
    this.elementi[3][5] = new Elemento('Cr', 'Cromo', 24, mostra)
    this.elementi[3][6] = new Elemento('Mn', 'Manganese', 25, mostra)
    this.elementi[3][7] = new Elemento('Fe', 'Ferro', 26, mostra)
    this.elementi[3][8] = new Elemento('Co', 'Cobalto', 27, mostra)
    this.elementi[3][9] = new Elemento('Ni', 'Nichel', 28, mostra)
    this.elementi[3][10] = new Elemento('Cu', 'Rame', 29, mostra)
    this.elementi[3][11] = new Elemento('Zn', 'Zinco', 30, mostra)
    this.elementi[3][12] = new Elemento('Ga', 'Gallio', 31, mostra)
    this.elementi[3][13] = new Elemento('Ge', 'Germanio', 32, mostra)
    this.elementi[3][14] = new Elemento('As', 'Arsenico', 33, mostra)
    this.elementi[3][15] = new Elemento('Se', 'Selenio', 34, mostra)
    this.elementi[3][16] = new Elemento('Br', 'Bromo', 35, mostra)
    this.elementi[3][17] = new Elemento('Kr', 'Kripton', 36, mostra)
    this.elementi[4][0] = new Elemento('Rb', 'Rubidio', 37, mostra)
    this.elementi[4][1] = new Elemento('Sr', 'Stronzio', 38, mostra)
    this.elementi[4][2] = new Elemento('Y', 'Ittrio', 39, mostra)
    this.elementi[4][3] = new Elemento('Zr', 'Zirconio', 40, mostra)
    this.elementi[4][4] = new Elemento('Nb', 'Niobio', 41, mostra)
    this.elementi[4][5] = new Elemento('Mo', 'Molibdeno', 42, mostra)
    this.elementi[4][6] = new Elemento('Tc', 'Tecnezio', 43, mostra)
    this.elementi[4][7] = new Elemento('Ru', 'Rutenio', 44, mostra)
    this.elementi[4][8] = new Elemento('Rh', 'Rodio', 45, mostra)
    this.elementi[4][9] = new Elemento('Pd', 'Palladio', 46, mostra)
    this.elementi[4][10] = new Elemento('Ag', 'Argento', 47, mostra)
    this.elementi[4][11] = new Elemento('Cd', 'Cadmio', 48, mostra)
    this.elementi[4][12] = new Elemento('In', 'Indio', 49, mostra)
    this.elementi[4][13] = new Elemento('Sn', 'Stagno', 50, mostra)
    this.elementi[4][14] = new Elemento('Sb', 'Antimonio', 51, mostra)
    this.elementi[4][15] = new Elemento('Te', 'Tellurio', 52, mostra)
    this.elementi[4][16] = new Elemento('I', 'Iodio', 53, mostra)
    this.elementi[4][17] = new Elemento('Xe', 'Xeno', 54, mostra)
    this.elementi[5][0] = new Elemento('Cs', 'Cesio', 55, mostra)
    this.elementi[5][1] = new Elemento('Ba', 'Bario', 56, mostra)
    this.elementi[5][2] = new Elemento('', 'Lantanidi', '57-71', mostra)
    this.elementi[5][3] = new Elemento('Hf', 'Afnio', 72, mostra)
    this.elementi[5][4] = new Elemento('Ta', 'Tantalio', 73, mostra)
    this.elementi[5][5] = new Elemento('W', 'Tungsteno', 74, mostra)
    this.elementi[5][6] = new Elemento('Re', 'Renio', 75, mostra)
    this.elementi[5][7] = new Elemento('Os', 'Osmio', 76, mostra)
    this.elementi[5][8] = new Elemento('Ir', 'Iridio', 77, mostra)
    this.elementi[5][9] = new Elemento('Pt', 'Platino', 78, mostra)
    this.elementi[5][10] = new Elemento('Au', 'Oro', 79, mostra)
    this.elementi[5][11] = new Elemento('Hg', 'Mercurio', 80, mostra)
    this.elementi[5][12] = new Elemento('Tl', 'Tallio', 81, mostra)
    this.elementi[5][13] = new Elemento('Pb', 'Piombo', 82, mostra)
    this.elementi[5][14] = new Elemento('Bi', 'Bismuto', 83, mostra)
    this.elementi[5][15] = new Elemento('Po', 'Polonio', 84, mostra)
    this.elementi[5][16] = new Elemento('At', 'Astato', 85, mostra)
    this.elementi[5][17] = new Elemento('Rn', 'Radon', 86, mostra)
    this.elementi[6][0] = new Elemento('Fr', 'Francio', 87, mostra)
    this.elementi[6][1] = new Elemento('Ra', 'Radio', 88, mostra)
    this.elementi[6][2] = new Elemento('', 'Attinidi', '89-103', mostra)
    this.elementi[6][3] = null
    this.elementi[6][4] = null
    this.elementi[6][5] = null
    this.elementi[6][6] = null
    this.elementi[6][7] = null
    this.elementi[6][8] = null
    this.elementi[6][9] = null
    this.elementi[6][10] = null
    this.elementi[6][11] = null
    this.elementi[6][12] = null
    this.elementi[6][13] = null
    this.elementi[6][14] = null
    this.elementi[6][15] = null
    this.elementi[6][16] = null
    this.elementi[6][17] = null
  }
  draw(x, y, w, h) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    let elW = w / 18
    let elH = h / 7
    for (let i in this.elementi) {
      for (let j in this.elementi[i]) {
        let el = this.elementi[i][j]
        let elX = x + elW * j
        let elY = y + elH * i
        if (el === null) {
          fill(160)
          rect(elX + 2, elY + 2, elW - 4, elH - 4)
        } else if (el.mostra == false) {
          fill(200)
          rect(elX + 2, elY + 2, elW - 4, elH - 4)
        } else {
          if (j == 0) {
            if (i == 0) {
              fill(240)
            } else {
              fill(250, 165, 0)
            }
          } else if (j == 1) {
            fill(255, 220, 0)
          } else if (j < 12) {
            fill(250, 120, 130)
          } else if (j == 17) {
            fill(120, 240, 240)
          } else if (j < 16 && i > j - 11) {
            fill(120, 160, 205)
          } else {
            fill(90, 200, 90)
          }
          rect(elX + 2, elY + 2, elW - 4, elH - 4)
          textAlign(CENTER, CENTER)
          fill(0)
          textSize(elW / 2)
          text(el.simbolo, elX + elW / 2, elY + elH / 3)
          textSize(elW / 5)
          text(el.nome, elX + elW / 2, elY + elH * 5 / 9)
          text(el.numeroAtomico, elX + elW / 2, elY + elH * 7 / 9)
        }
      }
    }
  }
  prova(x, y, el) {
    x -= this.x
    y -= this.y
    let elW = this.w / 18
    let elH = this.h / 7
    let i = floor(y / elH)
    let j = floor(x / elW)
    if (i in this.elementi && j in this.elementi[i] && this.elementi[i][j] != undefined) {
      let elT = this.elementi[i][j].simbolo + ' - ' + this.elementi[i][j].nome
      if (elT == el) {
        this.elementi[i][j].mostra = true
        return true
      } else if (this.elementi[i][j].mostra == false) {
        return false
      }
    } else {
      return null
    }
  }
}
