import React from 'react'
import Icon from '../../../Icon'

const getStatusParams = statusKey => {
  switch (statusKey) {
    case 1: return { icon: { type: Icon.Type.DOT, color: '#FF8C56FF' }, color: 'black' }
    case 2: return { icon: { type: Icon.Type.DOT, color: '#6DE06DFF' }, color: 'black' }
    case 3: return { icon: { type: Icon.Type.CHECK_MARK, color: '#0FB86480' }, color: 'green' }
    case 4: return { icon: { type: Icon.Type.ABORT, color: '#8055FF80' }, color: 'lightBlack' }
    case 5: return { icon: { type: Icon.Type.DOT, color: '#459DF5FF' }, color: 'black' }
    case 6: return { icon: { type: Icon.Type.DOT, color: '#FF8C56FF' }, color: 'black' }
    default: return { icon: { type: Icon.Type.DOT, color: '#000000FF' }, color: 'black' }
  }
}

const StatusFormatter = ({ value }) => {
  const { icon, color } = getStatusParams(value.key)
  return [
    <Icon key='status-icon' type={icon.type} color={icon.color}/>,
    <div key='status-value' className={`grid__status grid__status-${color}`}>{value.label}</div>
  ]
}

export default StatusFormatter
