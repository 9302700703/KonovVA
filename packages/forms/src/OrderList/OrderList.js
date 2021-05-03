import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { mapKeys, mapValues } from 'lodash'
import { executeRequest } from 'server'
import { Grid, Header, Input, ToolPanel, Workspace, Icon, CheckBox } from 'components'
import { columns } from './columns'
import { reducers } from 'components'

const normalize = (data = []) => {
  const result = {
    ids: [],
    rows: {}
  }
  result.rows = mapKeys(data, v => {
    result.ids.push(v.id)
    return v.id
  })
  return result
}

const OrderList = props => {

  const [ data, setData ] = useState([])

  useEffect(() => {
    const t = props.executeRequest({
      formName: 'OrderList',
      query: {
        fields: [
          { key: 'id' },
          { key: 'num' },
          { key: 'user' },
          { key: 'User', fields: [ { key: 'id' }, { key: 'name' } ] }
        ],
        pagination: { limit: 20, offset: 0 },
        filters: [
          { key: 'id', type: '_gt', value: '1' },
        ]
      }
    })
    t.then(r => console.log(r))
  }, [])

  return <Workspace>
    <Header label='Список заказов'/>
    <ToolPanel>
      <button onClick={() => props.setTheme('theme__main')}>theme1</button>
      <button onClick={() => props.setTheme('theme__black-theme')}>theme2</button>
    </ToolPanel>
    {/*<Grid*/}
    {/*  columns={columns}*/}
    {/*  data={normalize(data)}*/}
    {/*  rows={data}*/}
    {/*  onSelectRow={selectedRows => {*/}
    {/*    console.log(selectedRows)*/}
    {/*  }}*/}
    {/*  enableSelectRow*/}
    {/*/>*/}
  </Workspace>
}

export default connect(
  state => {
    console.log(state)
    return {}
  },
  {
    // executeRequest: server.executeRequest,
    executeRequest,
    // fetchData,
    setTheme: reducers.setTheme,
    ttt: t => {
      return ({ type: 'asdf', t })
    }
  }
)(OrderList)
