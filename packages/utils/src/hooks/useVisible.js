import { useState } from 'react'

export default defaultValue => {
  const [ value, setValue ] = useState(defaultValue)
  const toggle = () => setValue(!value)
  return { value, toggle }
}