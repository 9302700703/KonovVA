import React from 'react'
import { connect } from 'react-redux'
import './_styles/_themes.less'

const ThemeProvider = ({ theme, children }) => <div className={theme}>{children}</div>

export default connect(({ theme }) => ({ theme }))(ThemeProvider)
