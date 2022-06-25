import ConfigContextProvider from "../context/ConfigContext";
import Layout from '../components/shared/Layout'
//import '../styles/globals.css'
import '../assets/scss/main.scss';

function MyApp({ Component, pageProps }) {
  return (
    <ConfigContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ConfigContextProvider>
  )
}

export default MyApp
