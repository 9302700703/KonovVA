import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import ThemeProvider, { reducers as componentReducers } from 'components'

import Root from './Root'

import './style.less'

const store = createStore(combineReducers({
  theme: componentReducers.theme
}), applyMiddleware(thunk))

render(
  <Provider store={store}>
    <ThemeProvider>
      <Root/>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
)
