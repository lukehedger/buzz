/**
 * Swarm URI schemes
 *
 * Short schemes are provided for backwards-compatibility with versions < 1.8.0
 * Long schemes should be used with versions >= 1.8.0
 *
 * @type {Object}
 */
const scheme = {
  LONG: {
    hash: 'bzz-hash',
    immutable: 'bzz-immutable',
    list: 'bzz-list',
    raw: 'bzz-raw',
    root: 'bzz',
  },
  SHORT: {
    immutable: 'bzzi',
    raw: 'bzzr',
    root: 'bzz',
  },
}

export default scheme
