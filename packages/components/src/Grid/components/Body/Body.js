import React, { useContext } from 'react'
import { GridContext } from '../../Grid'
import Row from '../Row'

const Body = () => {
  const {
    data: {
      ids,
      rows
    }
  } = useContext(GridContext)
  return <div className='grid__body'>
    {ids.map((id, index) => <Row key={id} row={rows[id]}/>)}
    {/*{rows.map((row, index) => <Row key={index} row={row}/>)}*/}
  </div>
}

export default Body
