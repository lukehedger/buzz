import * as request from '../util/request'
import makeSwarmURL from '../util/makeSwarmURL'

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
