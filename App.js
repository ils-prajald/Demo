import { View, Text } from 'react-native'
import React from 'react'
import Main from './src/Main'
import { Provider } from 'react-redux'
import { store } from './src/Redux/Store'
import { createStore } from 'redux'


const App = () => {
  return (

      <Provider store={store}>
      <Main />
      </Provider>
  )
}

export default App