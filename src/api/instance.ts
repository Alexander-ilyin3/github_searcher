import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.github.com/',
  headers: { 'Authorization': 'Bearer '+ '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' }
})

export const graphQlInstance = axios.create({
  baseURL: 'https://api.github.com/graphql',
  headers: { 'Authorization': 'Bearer '+ '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' }
})
