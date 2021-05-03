import React from 'react'
import PropTypes from 'prop-types'

import { getStyle, getFormatter } from '../../utils'
import { FLEX, WIDTH } from '../../constants'

import CellHeader from './CellHeader'
import CellSelect from './CellSelect'

const Cell = ({ column, value, visible }) => {
  if (!visible.value) return null

  const style = getStyle(WIDTH, column.width)
  getStyle(FLEX, column.flexWidth, style)

  const Formatter = getFormatter(column)

  return <div className='grid__cell' style={style}>
    <Formatter column={column} value={value}/>
  </div>
}

Cell.Header = CellHeader
Cell.Select = CellSelect

Cell.defaultProps = {
  visible: {
    value: true,
    toggle: () => console.warn('Не определён метод изменения видимости')
  }
}

Cell.propTypes = {
  column: PropTypes.object,
  value: PropTypes.oneOfType([ PropTypes.string, PropTypes.object, PropTypes.number ]),
  visible: PropTypes.shape({
    value: PropTypes.bool,
    toggle: PropTypes.func
  })
}

export default Cell
