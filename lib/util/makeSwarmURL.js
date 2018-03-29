import schemes from '../const/scheme'
import SchemeTypeEnum from '../const/schemeType'
import removeTrailingSlash from './removeTrailingSlash'

/**
 * Construct a Swarm URL
 *
 * @param  {String} provider   Swarm node provider
 * @param  {String} scheme     Swarm URI scheme
 * @param  {String} schemeType Swarm URI scheme type
 * @param  {String} [hash=""]  Swarm content hash, if downloading
 * @return {String}            Swarm URL
 */
const makeSwarmURL = (provider, scheme, schemeType, hash = '') => {
  return `${removeTrailingSlash(provider)}/${
    schemes[SchemeTypeEnum[schemeType]][scheme]
  }:/${hash}`
}

export default makeSwarmURL
