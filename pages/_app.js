import Layout from '../components/shared/Layout'
//import '../styles/globals.css'
import '../assets/scss/main.scss';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}

export default MyApp
