import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { mapKeys } from 'lodash'

import { Row, Body, Footer, formatters } from './components'
import { Types } from './constants'
import { hooks } from 'utils'

import './style.less'

export const GridContext = React.createContext({
  columns: [],
  rows: [],
  data: {
    ids: [],
    rows: {}
  },
  enableSelectRow: false,
  selection: {
    getSelectedIds: () => [],
    setSelectedIds: () => {}
  }
})

const Grid = ({ className, columns, rows, data, enableSelectRow, onSelectRow }) => {

  const [ selectedIds, setSelectedIds ] = useState([])

  const context = {
    columns,
    rows,
    data,
    enableSelectRow,
    selection: {
      getSelectedIds: () => selectedIds,
      setSelectedIds
    }
  }

  // useDidUpdate(() => onSelectRow(selectedRows), selectedRows)

  return <GridContext.Provider value={context}>
    <div className='grid'>
      <Row.Header/>
      <Body/>
      {/*<Footer/>*/}
    </div>
  </GridContext.Provider>
}

// TODO: Спросить
Grid.Formatters = formatters

Grid.Types = Types

Grid.defaultProps = {
  columns: [],
  rows: [],
  enableSelectRow: false
}

Grid.propTypes = {
  columns: PropTypes.array,
  rows: PropTypes.array,
  enableSelectRow: PropTypes.bool
}

export default Grid
