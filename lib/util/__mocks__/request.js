import { Response } from 'node-fetch'

const response = {
  get: 'buzz',
  post: 'f070f4f87c0018a4026ff2c14895e9ef525e81c4cf4d768e1bf658e570927a13',
}

export const get = () => {
  return new Promise(resolve => {
    return resolve(new Response(response.get))
  })
}

export const post = () => {
  return new Promise(resolve => {
    return resolve(new Response(response.post))
  })
}
