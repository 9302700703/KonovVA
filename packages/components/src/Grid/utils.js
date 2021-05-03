import React from 'react'
import { Types } from './constants'

export const getStyle = (prop, value, style = {}) => {
  if (value !== undefined) {
    style[prop] = value
  }
  return style
}

export const getFormatter = column => column.formatter || (({ value }) => normalizeValue(value, column))

const normalizeValue = (value, column) => {
  switch (column.type) {
    case Types.SELECT: return value.label
    case Types.DICTIONARY: return value[column.viewField]
    default: return value
  }
}
