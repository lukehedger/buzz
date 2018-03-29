import fetch from 'node-fetch'

/**
 * Make HTTP GET request
 *
 * @param  {String} url Request URL
 * @return {Promise}
 */
export const get = url => {
  return fetch(url)
}

/**
 * Make HTTP POST request
 *
 * @param  {String}  body Stringified request body
 * @param  {String}  url  Request URL
 * @return {Promise}
 */
export const post = (body, url) => {
  return fetch(url, {
    body: body,
    headers: {
      'Content-Length': body.length,
      'Content-Type': 'text/plain',
    },
    method: 'POST',
  })
}
