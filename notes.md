# Buzz

- Document API
  - swarm-js
  - https://swarm-guide.readthedocs.io/en/latest/
  - https://github.com/MainframeHQ/erebos

---
- How do the best library authors write code? Classes etc?
- API

---
- Tests
- Docs


```
// import util fns

!! This won't work because we don't want to pass `Buzz` around the app
=> Should just be a functional lib

class Buzz {
  constructor() {
    // pass provider
  }

  setProvider = provider => {
    // this.provider = provider
  }

  download = hash => {}

  upload = data => {}
}
```
