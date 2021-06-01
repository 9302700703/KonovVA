import { useEffect } from 'react'
import { isEqual } from 'lodash'
import usePrevious from './usePrevious'

export default (fn, arr) => {
  const prevNext = arr.map(it => [ usePrevious(it), it ])
  useEffect(() => {
    if (prevNext.some(([ prev, next ]) => !isEqual(prev, next))) {
      fn()
    }
  }, arr)
}
