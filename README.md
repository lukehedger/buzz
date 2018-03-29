<p align='center'>
  <img src='https://user-images.githubusercontent.com/1913316/38098757-c73ba646-3370-11e8-8ca0-04f50be9313a.png' width='200'/>
</p>

> 🏗 Only raw text uploads/downloads supported for now, work on the full API is
  in progress.

## Install
```sh
npm install @web3/buzz
```

## Usage
```js
import Buzz from '@web3/buzz'

// instantiate Buzz class with Swarm node provider
const buzz = new Buzz({ provider: 'http://localhost:8500' })

// upload raw text
buzz.upload('buzz')

// download raw text
buzz.download('f070f4f87c0018a4026ff2c14895e9ef525e81c4cf4d768e1bf658e570927a13')
```

### Swarm URI schemes
Swarm version `1.8.0` introduced a
[set of 'long' URI schemes](https://github.com/ethereum/go-ethereum/pull/15667),
which replaced the deprecated 'short' URI schemes. This library uses the long
schemes by default but support for the short schemes can be toggled with the
`schemeType` property:
```
const buzz = new Buzz({ provider: '...', schemeType: 'SHORT' })
```

## Contributing

### Setup
```sh
npm install
```

### Build
```sh
npm run build
```

### Test
```sh
npm test
```

## Credits

- Logo: Bee by alican from the Noun Project
