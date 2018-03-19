const Color = require('./Color')

const palette = [
  {
    "name": "Background",
    "hex" : "282a36",
  },
  {
    "name": "Selection",
    "hex" : "44475a",
  },
  {
    "name": "Foreground",
    "hex" : "f8f8f2",
  },
  {
    "name": "Comment",
    "hex" : "6272a4",
  },
  {
    "name": "Cyan",
    "hex" : "8be9fd",
  },
  {
    "name": "Green",
    "hex" : "50fa7b",
  },
  {
    "name": "Orange",
    "hex" : "ffb86c",
  },
  {
    "name": "Pink",
    "hex" : "ff79c6",
  },
  {
    "name": "Purple",
    "hex" : "bd93f9",
  },
  {
    "name": "Red",
    "hex" : "ff5555",
  },
  {
    "name": "Yellow",
    "hex" : "f1fa8c",
  }
].map((color, i) => {
  return {
    id   : i,
    name : color.name,
    hex  : color.hex,
    color: Color.hex(color.hex)
  }
})

class Parser {
  constructor() {

  }

  prepare() {

  }

  postpare() {

  }

  parse(string) {
    // string.replace(/([0-9|a-f]{2})([0-9|a-f]{2})([0-9|a-f]{2})/gi, (match, r, g, b) => {
    string.replace(Color.regexp.hex, (match, capture) => {
      console.log('---------');
      const color = Color.hex(capture)
      const { index, score } = color.best(palette.map(color => color.color))
      console.log(`${ capture } -> ${ palette[index].hex } ${ palette[index].name } (${ score })`);
    })
  }
}

module.exports = Parser
