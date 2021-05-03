import { useEffect } from 'react'
import { isEqual } from 'lodash'
import usePrevious from './usePrevious'

export default (fn, arr) => {
  const prevNextValues = arr.map(it => [ usePrevious(it), it ])
  useEffect(() => {
    if (prevNextValues.some(([ prev, next ]) => !isEqual(prev, next))) {
      fn()
    }
  }, arr)
}
