import React from 'react'
import App from 'next/app'
import { ThemeProvider } from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee, faEnvelopeSquare, faSpinner } from '@fortawesome/free-solid-svg-icons'

library.add(faCheckSquare, faCoffee, faEnvelopeSquare, faSpinner)

const theme = {
  colors: {
    primary: '#0070f3',
    secondary: 'red',
    highlight: 'blue',
    success: 'green',
    warning: 'yellow',
    error: 'red',
    background: 'purple',
    text: 'white'
  },
  sizes: {
    fieldHeight: '20px',
    fieldMinWidth: '40px',
    itemWidth: '100px'
  },
  fonts: {
    headline: 'comic sans',
    paragraph: 'sans-serif'
  }
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}