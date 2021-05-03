import React from 'react'
import CheckBox from '../../../CheckBox'

export default ({ theme, value, onClick }) => () => <CheckBox value={value} theme={theme} onClick={onClick}/>
