#!/usr/bin/env node

const secret = require('./secret.json')
const config = require('./config.json')
const Github = require('./classes/Github')
const Zip    = require('./classes/Zip')
const Parser = require('./classes/Parser')

Github
  .authenticate(secret.githubPersonalAccessToken)
  .getRateLimit().then(console.log)

const string = `scheme: "Dracula"\nauthor: "Mike Barkmin (http://github.com/mikebarkmin) based on Dracula Theme (http://github.com/dracula)"\nbase00: "282936" #background\nbase01: "3a3c4e"\nbase02: "4d4f68"\nbase03: "626483"\nbase04: "62d6e8"\nbase05: "e9e9f4" #forground\nbase06: "f1f2f8"\nbase07: "f7f7fb"\nbase08: "ea51b2"\nbase09: "b45bcf"\nbase0A: "00f769"\nbase0B: "ebff87"\nbase0C: "a1efe4"\nbase0D: "62d6e8"\nbase0E: "b45bcf"\nbase0F: "00f769"`
const parser = new Parser()
const res = parser
  .parse(string)

console.log(res);

// const dracula = new Github({
//   owner: config.draculaOwner
// , repo : config.draculaRepo
// })
//
// dracula.getREADME()
//   .then(readme => {
//     const parser = new Parser()
//
//     const data = parser.parse(readme)
//     console.log(data);
//   })

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
