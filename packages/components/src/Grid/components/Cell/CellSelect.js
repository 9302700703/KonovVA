import React from 'react'
import CheckBox from '../../../CheckBox'

const CellSelect = ({ value, onClick, visible}) => {
  return <div className='grid__cell'>
    <CheckBox
      value={value}
      onClick={onClick}
      visible={visible}
    />
  </div>
}

export default CellSelect
