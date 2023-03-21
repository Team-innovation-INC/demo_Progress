// ---- import type App props
import type { AppProps } from 'next/app';
// ---- import component navBar based for all interfaces
import { NavBar } from '../components/view/navBarComponents';
// -- import styles
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return ( <NavBar children={<Component {...pageProps} />}/> )
}
