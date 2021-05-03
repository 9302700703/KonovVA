import React from 'react'
import Cell from '../Cell'
import { formatters } from '../formatters'

const column = ({ theme, value, onClick }) => ({ key: 'check', name: 'CHECK', formatter: formatters.SelectRowFormatter({ theme, value, onClick }) })

export default ({ visible, theme, value, onClick }) => <Cell column={column({ theme, value, onClick })} visible={{ value: visible }}/>
