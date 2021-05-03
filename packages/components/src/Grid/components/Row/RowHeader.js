import React, { useContext } from 'react'

import { GridContext } from '../../Grid'
import Cell from '../Cell'

const RowHeader = () => {
  const {
    columns,
    data: { ids },
    enableSelectRow,
    selection: { getSelectedIds, setSelectedIds }
  } = useContext(GridContext)

  const onSelectClick = value => setSelectedIds(value ? [] : ids)

  return <div className='grid__row grid__row-header'>
    <Cell.Select
      value={getSelectedIds().length !== 0 && getSelectedIds().length === ids.length}
      onClick={onSelectClick}
      visible={enableSelectRow}
    />
    {columns.map(it => <Cell.Header key={it.key} value={it.name} column={it}/>)}
  </div>
}

export default RowHeader
