export const TOGGLE_THEME = 'TOGGLE_THEME'

export const setTheme = payload => ({
  type: TOGGLE_THEME,
  payload
})

export const theme = (state = 'theme__main', action) => {
  if (action.type === TOGGLE_THEME) {
    return action.payload
  }
  return state
}