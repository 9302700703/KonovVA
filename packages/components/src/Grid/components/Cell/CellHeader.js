import React from 'react'
import PropTypes from 'prop-types'

import { getStyle } from '../../utils'
import { FLEX, WIDTH } from '../../constants'

const CellHeader = ({ column, value }) => {
  const style = getStyle(WIDTH, column.width)
  getStyle(FLEX, column.flexWidth, style)

  return <div className='grid__cell' style={style}>{value}</div>
}

CellHeader.propTypes = {
  column: PropTypes.object,
  value: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ])
}

export default CellHeader
