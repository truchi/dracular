const ColorSpace = require('color-space')

const palette = [
  {
    "name": "Background",
    "hex" : "282a36",
    "r"   : 40,
    "g"   : 42,
    "b"   : 54,
    "h"   : 231,
    "s"   : 15,
    "l"   : 18
  },
  {
    "name": "Current Line",
    "hex" : "44475a",
    "r"   : 68,
    "g"   : 71,
    "b"   : 90,
    "h"   : 232,
    "s"   : 14,
    "l"   : 31
  },
  {
    "name": "Selection",
    "hex" : "44475a",
    "r"   : 68,
    "g"   : 71,
    "b"   : 90,
    "h"   : 232,
    "s"   : 14,
    "l"   : 31
  },
  {
    "name": "Foreground",
    "hex" : "f8f8f2",
    "r"   : 248,
    "g"   : 248,
    "b"   : 242,
    "h"   : 60,
    "s"   : 30,
    "l"   : 96
  },
  {
    "name": "Comment",
    "hex" : "6272a4",
    "r"   : 98,
    "g"   : 114,
    "b"   : 164,
    "h"   : 225,
    "s"   : 27,
    "l"   : 51
  },
  {
    "name": "Cyan",
    "hex" : "8be9fd",
    "r"   : 139,
    "g"   : 233,
    "b"   : 253,
    "h"   : 191,
    "s"   : 97,
    "l"   : 77
  },
  {
    "name": "Green",
    "hex" : "50fa7b",
    "r"   : 80,
    "g"   : 250,
    "b"   : 123,
    "h"   : 135,
    "s"   : 94,
    "l"   : 65
  },
  {
    "name": "Orange",
    "hex" : "ffb86c",
    "r"   : 255,
    "g"   : 184,
    "b"   : 108,
    "h"   : 31,
    "s"   : 100,
    "l"   : 71
  },
  {
    "name": "Pink",
    "hex" : "ff79c6",
    "r"   : 255,
    "g"   : 121,
    "b"   : 198,
    "h"   : 326,
    "s"   : 100,
    "l"   : 74
  },
  {
    "name": "Purple",
    "hex" : "bd93f9",
    "r"   : 189,
    "g"   : 147,
    "b"   : 249,
    "h"   : 265,
    "s"   : 89,
    "l"   : 78
  },
  {
    "name": "Red",
    "hex" : "ff5555",
    "r"   : 255,
    "g"   : 85,
    "b"   : 85,
    "h"   : 0,
    "s"   : 100,
    "l"   : 67
  },
  {
    "name": "Yellow",
    "hex" : "f1fa8c",
    "r"   : 241,
    "g"   : 250,
    "b"   : 140,
    "h"   : 65,
    "s"   : 92,
    "l"   : 76
  }
]

class Parser {
  constructor() {

  }

  prepare() {

  }

  postpare() {

  }

  parse(string) {
    string.replace(/([0-9|a-f]{2})([0-9|a-f]{2})([0-9|a-f]{2})/gi, (match, r, g, b) => {
      r = parseInt(r, 16)
      g = parseInt(g, 16)
      b = parseInt(b, 16)

      console.log(match, r, g, b, ColorSpace.rgb.hsl([r, g, b]))
    })
  }
}

module.exports = Parser
