/* eslint-disable react/prop-types */
// eslint-disable-next-line import/no-unresolved
import '@/styles/globals.css'
import { Provider } from 'react-redux'
// eslint-disable-next-line import/no-unresolved
import { store } from '@/store'

export default function App({ Component, pageProps }) {

  return <Provider store = {store}>
    <Component {...pageProps} />
  </Provider>
}
