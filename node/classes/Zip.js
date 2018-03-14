const AdmZip = require('adm-zip')

class Zip {
  constructor(zipData) {
    this.zip  = new AdmZip(zipData)
    this.root = this.zip.getEntries()[0].entryName
  }

  remove(names) {
    names.map(name => this.zip.deleteFile(this.root + name))

    return this
  }

  getFiles() {
    return this.zip
      .getEntries()
      .filter(entry => !entry.isDirectory)
      .map(entry => {
        return {
          name   : entry.entryName
        , content: this.zip.readAsText(entry)
        }
      })
  }
}

module.exports = Zip
