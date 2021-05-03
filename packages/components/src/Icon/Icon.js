import React from 'react'
import PropTypes from 'prop-types'

import { Abort, CheckMark, Dot } from './icons'

const Icon = ({ className, type: Type, visible }) => {
  if (!visible) return null
  return <img className={className} alt={Type} src={Type}/>
}

Icon.Type = {
  ABORT: Abort,
  CHECK_MARK: CheckMark,
  DOT: Dot
}

Icon.defaultProps = {
  visible: true
}

Icon.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(Object.values(Icon.Type)).isRequired,
  visible: PropTypes.bool
}

export default Icon
