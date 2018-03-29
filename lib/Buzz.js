import download from './download'
import upload from './upload'

/**
 * 🐝  Buzz
 *
 * @type {Class}
 */
export default class Buzz {
  /**
   * Initialise Buzz class object with options
   *
   * @param  {Object} options                     Buzz options object
   * @param  {String} [options.schemeType='LONG'] Swarm URI scheme type
   * @param  {String} options.provider            Swarm node provider URL
   * @return {void}
   */
  constructor({ schemeType = 'LONG', ...options }) {
    this.setOptions(Object.assign({}, options, { schemeType }))
  }

  /**
   * Download content from Swarm at the given content hash
   *
   * @param  {String} hash Swarm content hash to download
   * @return {String}      Resolved content
   */
  download(hash) {
    return download(hash, this.getProvider(), this.getOptions('schemeType'))
  }

  /**
   * Convenience method for getting the Swarm node provider
   *
   * @return {String} Swarm node provider URL
   */
  getProvider() {
    return this.getOptions('provider')
  }

  /**
   * Get options item by key
   *
   * @param  {String} optionsKey Key of options item
   * @return {*}                 Value of options item
   */
  getOptions(optionsKey) {
    return this.options[optionsKey]
  }

  /**
   * Convenience method for setting the Swarm node provider
   *
   * @param  {String} provider Swarm node provider URL
   * @return {void}
   */
  setProvider(provider) {
    this.setOptions({ provider })
  }

  /**
   * Update options object with subset
   *
   * @param  {Object} newOptions Object to merge into options
   * @return {void}
   */
  setOptions(newOptions) {
    this.options = Object.assign({}, this.options, newOptions)
  }

  /**
   * Upload content to Swarm
   *
   * @param  {Buffer|String} data Data to upload
   * @return {String}             Swarm content hash
   */
  upload(data) {
    return upload(data, this.getProvider(), this.getOptions('schemeType'))
  }
}
