import { Buffer } from 'buffer'
import * as request from '../util/request'
import makeSwarmURL from '../util/makeSwarmURL'

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
