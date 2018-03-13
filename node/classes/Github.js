const octokit = require('@octokit/rest')()

class Github {
  constructor({ token, owner, repo }) {
    this.token = token
    this.owner = owner
    this.repo  = repo

    this
      .authenticate()
      .printRateLimit()
  }

  authenticate() {
    octokit.authenticate({
      type : 'token'
    , token: this.token
    })

    return this
  }

  printRateLimit() {
    octokit.misc
      .getRateLimit({})
      .then(response => {
        console.log('=== Remaining API calls ===')
        console.log(`           ${ response.data.rate.remaining }`)
        console.log('=== === === === === === ===')
      })

    return this
  }
}

module.exports = Github
