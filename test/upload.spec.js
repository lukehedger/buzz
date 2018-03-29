import upload from '../lib/upload'

jest.mock('../lib/upload')
jest.mock('../lib/util/request')

const SWARM_PROVIDER = 'http://localhost:8500'

describe('buzz :: upload', () => {
  it('Should upload content to Swarm', async () => {
    const actual = await upload('buzz', SWARM_PROVIDER)

    expect(actual).toMatchSnapshot()
  })

  it('Should throw an error if Swarm provider not set', () => {
    const actual = () => upload('buzz')

    expect(actual).toThrowErrorMatchingSnapshot()
  })
})
