import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import ThemeProvider, { reducers as componentReducers } from 'components'

import Root from './Root'

import './style.less'
import '../../_styles/_main.global.less'

const store = createStore(combineReducers({
  theme: componentReducers.theme
}), applyMiddleware(thunk))

Array.prototype.remove = function(fn) {
  const index = this.findIndex(fn)
  return [ ...this.slice(0, index), ...this.slice(index + 1) ]
}

render(
  <Provider store={store}>
    <ThemeProvider>
      <Root/>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
)
