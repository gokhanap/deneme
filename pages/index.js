import Layout from '../components/layout'
import Head from 'next/head'

function HomePage() {
  return (<Layout>
    <Head>
      <title>Anasayfa</title>
    </Head>
    <h1>Merhaba! Anasayfaya hosgeldin.</h1>
  </Layout>)
}

export default HomePage