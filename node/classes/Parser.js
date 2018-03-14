class Parser {
  constructor() {

  }

  parse(string) {
    const names = [
      'Background'
    , 'Current Line'
    , 'Selection'
    , 'Foreground'
    , 'Comment'
    , 'Cyan'
    , 'Green'
    , 'Orange'
    , 'Pink'
    , 'Purple'
    , 'Red'
    , 'Yellow'
    ]

    const  sepRe  = '\\s*\\|\\s*'
    const nameRe  = `(${ names.map(name => name.replace(' ', '\\s')).join('|') })`
    const  hexRe  = '`#([0-9|a-f]{6})`'
    const  rgbRe  = '`(\\d{1,3})\\s(\\d{1,3})\\s(\\d{1,3})`'
    const  hslRe  = '`(\\d{1,3})°\\s(\\d{1,3})%\\s(\\d{1,3})%`'
    const  fullRe =
      `${ nameRe }${ sepRe }${ hexRe }${ sepRe }${ rgbRe }${ sepRe }${ hslRe }`
    const regexp = new RegExp(fullRe, 'i')

    return string
      .split('\n')
      .filter(line => names.filter(name => line.startsWith(name)).length)
      .map(line => {
        const matches = regexp.exec(line)
        if (!matches) return

        const name = matches[1]
        const hex  = matches[2]
        const rgb  = matches[3]
        const hsl  = matches[4]
        return {
          name: matches[1]
        , hex : matches[2]
        , r   : matches[3]
        , g   : matches[4]
        , b   : matches[5]
        , h   : matches[6]
        , s   : matches[7]
        , l   : matches[8]
        }
      })
  }
}

module.exports = Parser
