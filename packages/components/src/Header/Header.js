import React from 'react'
import PropTypes from 'prop-types'
import './style.less'

const Header = props => {
  return <div className='header'>{props.label}</div>
}

Header.propTypes = {
  label: PropTypes.string.isRequired
}

export default Header
