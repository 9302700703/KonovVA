import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { GridContext } from '../../Grid'
import Cell from '../Cell'
import RowHeader from './RowHeader'
import SelectColumn from './SelectColumn'

const Row = ({ row }) => {
  // const { columns, enableSelectRow, selection: { getSelectedRows, setSelectedRows } } = useContext(GridContext)
  const {
    columns,
    data,
    enableSelectRow,
    selection: { getSelectedIds, setSelectedIds }
  } = useContext(GridContext)

  const onSelectClick = value => setSelectedIds(value
    ? getSelectedIds().remove(it => it === row.id)
    : [ ...getSelectedIds(), row.id ]
  )

  return <div className='grid__row grid__row-body'>
    <Cell.Select
      value={getSelectedIds().includes(row.id)}
      onClick={onSelectClick}
      visible={enableSelectRow}
    />
    {columns.map(it => <Cell key={it.key} value={row[it.key]} column={it}/>)}
    {/*{columns.map((it, index) => <Cell key={index} value={row[it.key]} column={it}/>)}*/}
  </div>
}

Row.Header = RowHeader

Row.propTypes = {
  row: PropTypes.object
}

export default Row
