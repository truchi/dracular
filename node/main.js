#!/usr/bin/env node

const secret = require('./secret.json')
const config = require('./config.json')
const Github = require('./classes/Github')
const Zip    = require('./classes/Zip')
const Parser = require('./classes/Parser')

Github
  .authenticate(secret.githubPersonalAccessToken)
  .getRateLimit().then(console.log)

const atom = new Github({
  owner: config.draculaOwner
, repo : 'atom'//config.draculaSuperRepo
})

atom.getZipBall()
  .then(zipball => {
    const zip = new Zip(zipball)
      .remove([
        '.github/'
        , 'LICENSE'
        , 'README.md'
        , 'package.json'
      ])

    const files = zip
      .getFiles()
  })
