import React from 'react'

const ThemeContext = React.createContext({
  savedVideosList: [],
  savedVideoButtonclicked: () => {},
})

export default ThemeContext
