#!/usr/bin/env node

const secret  = require('./secret.json')
const config  = require('./config.json')
const Github  = require('./classes/Github')

const github = new Github({
  token: secret.githubPersonalAccessToken
, owner: config.draculaOwner
, repo : config.draculaSuperRepo
})
