import axios from 'axios'

const token = process.env.REACT_APP_BEARER_TOKEN

export const instance = axios.create({
  baseURL: 'https://api.github.com/',
  headers: { 'Authorization': 'Bearer ' + token }
})

export const graphQlInstance = axios.create({
  baseURL: 'https://api.github.com/graphql',
  headers: { 'Authorization': 'Bearer ' + token }
})
