import download from '../lib/download'

jest.mock('../lib/download')
jest.mock('../lib/util/request')

const SWARM_PROVIDER = 'http://localhost:8500'

describe('buzz :: download', () => {
  it('Should download content at Swarm hash', async () => {
    const actual = await download(
      'f070f4f87c0018a4026ff2c14895e9ef525e81c4cf4d768e1bf658e570927a13',
      SWARM_PROVIDER
    )

    expect(actual).toMatchSnapshot()
  })

  it('Should throw an error if Swarm provider not set', () => {
    const actual = () => download('buzz')

    expect(actual).toThrowErrorMatchingSnapshot()
  })
})
