const octokit = require('@octokit/rest')()
const axios   = require('axios')

class Github {
  constructor({ owner, repo }) {
    this.owner = owner
    this.repo  = repo
  }

  async getZipBall() {
    const apiURL =
      `https://api.github.com/repos/${ this.owner }/${ this.repo }/releases/latest`

    const apiResponse     = await axios.get(apiURL)
    const zipBallURL      = apiResponse.data.zipball_url
    const zipballResponse = await axios
      .get(zipBallURL, { responseType: 'arraybuffer' })

    return zipballResponse.data
  }

  static authenticate(token) {
    octokit.authenticate({ type : 'token', token: token })

    return Github
  }

  static async getRateLimit() {
    const response = await octokit.misc.getRateLimit({})

    return response.data.rate.remaining
  }
}

module.exports = Github
