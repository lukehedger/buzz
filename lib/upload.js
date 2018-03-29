import { Buffer } from 'buffer'
import * as request from './util/request'
import makeSwarmURL from './util/makeSwarmURL'

/**
 * Upload data to Swarm and receive the resulting content hash
 *
 * @param  {Buffer|String} data                Data to upload
 * @param  {String}        provider            Swarm node provider
 * @param  {String}        [schemeType='LONG'] Swarm URI scheme type
 * @return {String}                            Swarm content hash of uploaded data
 */
const upload = (data, provider, schemeType = 'LONG') => {
  if (!provider) {
    throw new Error(
      'Swarm node provider not set. Use `buzz.setProvider` to set the Swarm provider.'
    )
  }

  const body = typeof data === 'string' ? Buffer.from(data) : data

  return request
    .post(body, makeSwarmURL(provider, 'raw', schemeType))
    .then(res => res.text())
}

export default upload
