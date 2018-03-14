#!/usr/bin/env node

const secret = require('./secret.json')
const config = require('./config.json')
const Github = require('./classes/Github')
const Zip    = require('./classes/Zip')
const Parser = require('./classes/Parser')

Github
  .authenticate(secret.githubPersonalAccessToken)
  .getRateLimit().then(console.log)

const dracula = new Github({
  owner: config.draculaOwner
, repo : config.draculaRepo
})

dracula.getREADME()
  .then(readme => {
    const parser = new Parser()

    const data = parser.parse(readme)
    console.log(data);
  })

// const atom = new Github({
//   owner: config.draculaOwner
// , repo : 'atom'//config.draculaSuperRepo
// })
//
// atom.getZipBall()
//   .then(zipball => {
//     const zip = new Zip(zipball)
//       .remove([
//           '.github/'
//         , 'LICENSE'
//         , 'README.md'
//         , 'package.json'
//         , 'screenshot.png'
//       ])
//
//     const files = zip
//       .getFiles()
//   })
