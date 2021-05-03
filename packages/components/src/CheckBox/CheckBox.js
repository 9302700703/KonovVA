import React from 'react'
import PropTypes from 'prop-types'

import { hooks } from 'utils'

import Icon from '../Icon'

import './style.less'

const CheckBox = ({ className, value, visible, onClick, onChange }) => {
  if (!visible) return null

  const handleClick = () => onClick(value)

  hooks.useDidUpdate(() => onChange(value), [ value ])

  const [ addClassName, getClassName ] = hooks.useBem('check-box')
  addClassName(className, className)
  addClassName('check-box--selected', value)

  return <div className={getClassName()} onClick={handleClick}>
    <Icon type={Icon.Type.CHECK_MARK} visible={value}/>
  </div>
}

CheckBox.defaultProps = {
  onClick: () => {},
  onChange: () => {},
  visible: true
}

CheckBox.propTypes = {
  className: PropTypes.string,
  value: PropTypes.bool,
  visible: PropTypes.bool,
  onClick: PropTypes.func,
  onChange: PropTypes.func
}

export default CheckBox
