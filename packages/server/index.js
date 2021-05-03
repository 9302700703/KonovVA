const url = 'https://kind-baboon-81.hasura.app/v1/graphql'
const method = 'POST'
const headers = { 'x-hasura-admin-secret': 'XCwCDppVQ3F30mDr4m35RbBHMQ8ZSMyTg6wzL14JgQP4ytjtZWEMcS2r89Lo1PON' }

export const executeRequest = query => dispatch => {
  return new Promise(resolve => {
    fetch(url, {
      method,
      headers,
      body: JSON.stringify({ query: '{User{id}}' })
    })
      .then(response => response.json())
      .then(resolve)
  })
}
