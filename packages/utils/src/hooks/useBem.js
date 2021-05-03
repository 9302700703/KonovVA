export default (name = '') => {
  let className = name
  const addClassName = (name, value) => {
    if (value) {
      className = `${className} ${name}`
    }
  }
  return [ addClassName, () => className.trim() ]
}
