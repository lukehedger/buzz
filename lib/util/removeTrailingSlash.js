/**
 * Remove trailing slash
 *
 * @example removeTrailingSlash('http://swarm.blockscan.com/') => 'http://swarm.blockscan.com'
 *
 * @param  {String} string String to remove trailing slash from
 * @return {String}        String without trailing slash
 */
const removeTrailingSlash = string => {
  return string.replace(/\/$/, '')
}

export default removeTrailingSlash
