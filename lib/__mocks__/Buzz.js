export const download = jest.fn()
export const setOptions = jest.fn()
export const upload = jest.fn()

export default class Buzz {
  constructor({ schemeType = 'LONG', ...options }) {
    this.setOptions(Object.assign({}, options, { schemeType }))
  }

  download(hash) {
    return download(hash, this.getProvider(), this.getOptions('schemeType'))
  }

  getProvider() {
    return this.getOptions('provider')
  }

  getOptions(optionsKey) {
    return this.options[optionsKey]
  }

  setProvider(provider) {
    return this.setOptions({ provider })
  }

  setOptions(newOptions) {
    this.options = Object.assign({}, this.options, newOptions)

    return setOptions(newOptions)
  }

  upload(data) {
    return upload(data, this.getProvider(), this.getOptions('schemeType'))
  }
}
