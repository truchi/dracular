const ColorSpace = require('color-space')
const DeltaE     = require('delta-e')

const minIndex = (array) =>
  array.reduce((minIndex, el, i, arr) => el < arr[minIndex] ? i : minIndex, 0)

class Color {
  constructor({ L, A, B }) {
    this.lab = { L, A, B }
  }

  delta(color) {
    return DeltaE.getDeltaE00(this.lab, color.lab)
  }

  best(colors) {
    const scores = colors.map(color => this.delta(color))
    const index  = minIndex(scores)
    const score  = scores[index]

    return { index, score }
  }

  static rgb({ r, g, b }) {
    const [ L, A, B ] = ColorSpace.rgb.lab([ r, g, b ])

    return new Color({ L, A, B })
  }

  static hex(hex) {
    const re = /([0-9|a-f]{2})([0-9|a-f]{2})([0-9|a-f]{2})/i
    let [ match, r, g, b ] = hex.match(re)

    r = parseInt(r, 16)
    g = parseInt(g, 16)
    b = parseInt(b, 16)

    return Color.rgb({ r, g, b })
  }
}

Color.regexp = {
  hex: /([0-9|a-f]{6})/gi
}

module.exports = Color
