import React from 'react'
import '../styles/index.css'
import { AppProps } from 'next/app'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee, faEnvelopeSquare, faSpinner, faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(faCheckSquare, faCoffee, faEnvelopeSquare, faSpinner, faTimes)

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
)

export default MyApp