import Buzz, { download, setOptions, upload } from '../lib/Buzz'

jest.mock('../lib/Buzz')

const SWARM_PROVIDER = 'http://localhost:8500'

describe('buzz :: Buzz', () => {
  let buzz

  beforeAll(() => {
    buzz = new Buzz({ provider: SWARM_PROVIDER })
  })

  it('Should initialise Buzz class object with options', () => {
    const actual = buzz

    expect(actual).toMatchSnapshot()
  })

  it('Should call download module with arguments', () => {
    const hash =
      'f070f4f87c0018a4026ff2c14895e9ef525e81c4cf4d768e1bf658e570927a13'

    buzz.download(hash)

    expect(download).toHaveBeenCalledWith(hash, SWARM_PROVIDER, 'LONG')
  })

  it('Should return provider option value', () => {
    const actual = buzz.getProvider()

    expect(actual).toEqual(SWARM_PROVIDER)
  })

  it('Should return requested option value', () => {
    const actual = buzz.getOptions('provider')

    expect(actual).toEqual(SWARM_PROVIDER)
  })

  it('Should return requested option value', () => {
    const actual = buzz.getOptions('provider')

    expect(actual).toEqual(SWARM_PROVIDER)
  })

  it('Should call setOptions method with provider option', () => {
    const actual = buzz.setProvider(SWARM_PROVIDER)

    expect(setOptions).toHaveBeenCalledWith({ provider: SWARM_PROVIDER })
  })

  it('Should update options object with new options', () => {
    buzz.setOptions({ provider: SWARM_PROVIDER })

    const actual = buzz.options

    expect(actual).toMatchSnapshot()
  })

  it('Should call upload module with arguments', () => {
    const data = 'buzz'

    buzz.upload(data)

    expect(upload).toHaveBeenCalledWith(data, SWARM_PROVIDER, 'LONG')
  })
})
