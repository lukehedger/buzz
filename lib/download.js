import * as request from './util/request'
import makeSwarmURL from './util/makeSwarmURL'

/**
 * Download data from a Swarm content hash
 *
 * @param  {String} hash                Swarm content hash
 * @param  {String} provider            Swarm node provider
 * @param  {String} [schemeType='LONG'] Swarm URI scheme type
 * @return {String}                     Downloaded data
 */
const download = (hash, provider, schemeType = 'LONG') => {
  if (!provider) {
    throw new Error(
      'Swarm node provider not set. Use `buzz.setProvider` to set the Swarm provider.'
    )
  }

  return request
    .get(makeSwarmURL(provider, 'raw', schemeType, hash))
    .then(res => res.text())
}

export default download
