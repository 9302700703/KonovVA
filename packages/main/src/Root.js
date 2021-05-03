import React, { useEffect } from 'react'
import { compact } from 'lodash'
// import RxDB from 'rxdb'
// import RxDBSchemaCheckModule from 'rxdb/plugins/schema-check'
// import RxDBErrorMessagesModule from 'rxdb/plugins/error-messages'
// import RxDBValidateModule from 'rxdb/plugins/validate'
import { gql } from 'apollo-boost'


import { OrderList } from 'forms'
import { Page } from 'components'

const selectQuery = (table, obj) => {
  const filters = obj.filters
  const pagination = obj.pagination
  const addFilters = filters => {
    return filters.length === 0 ? '' : `where: { ${filters.map(it => `${it.key}: { ${it.type}: ${it.value} }`).join(', ')} }`
  }
  const addPagination = pagination => {
    if (!pagination) return ''
    const { limit = 20, offset = 0 } = pagination
    return `limit: ${limit}, offset: ${offset}`
  }
  const addFields = fields => {
    return fields.map(({ key, fields }) => {
      if (fields) {
        return `${key} { ${addFields(fields)} }`
      } else {
        return key
      }
    }).join(' ')
  }
  const qqq = compact([ addFilters(filters), addPagination(pagination) ])
  return `{\n` +
    `\t${table}${qqq.length === 0 ? '' : `(${qqq.join(', ')})`} {\n` +
    `\t\t${addFields(obj.fields)}\n` +
    `\t}\n` +
    `}`
}

const Root = () => {
  useEffect(() => {
    // const t = RxDB.createQueryCache()
    // console.log(t)
    // new Request({ method: 'a' })
    const tt = selectQuery('Loan', {
      fields: [
        { key: 'id' },
        { key: 'num' },
        { key: 'user' },
        { key: 'User', fields: [ { key: 'id' }, { key: 'name' } ] }
      ],
      pagination: { limit: 20, offset: 0 },
      filters: [
        { key: 'id', type: '_gt', value: '1' },
        // { key: 'name', type: '_eq', value: 'Vlad1' }
      ]
    })
    // Criteria.build()
    // const t = fetch(
    //   'https://kind-baboon-81.hasura.app/v1/graphql',
    //   {
    //     method: 'POST',
    //     headers: {
    //       'x-hasura-admin-secret': 'XCwCDppVQ3F30mDr4m35RbBHMQ8ZSMyTg6wzL14JgQP4ytjtZWEMcS2r89Lo1PON'
    //     },
    //     body: JSON.stringify({
    //       query: tt
    //     })
    //     // input: '{}'
    //   }
    // )

    // const tt = gql`{ User { id } }`
    // console.log('tt', tt)
    // tt.


    // console.log(t.then(t => console.log(t.json().then(t => console.log(t)))))
  }, [])
  return <Page>
    <OrderList/>
  </Page>
}

export default Root
