import Head from 'next/head'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <> 
    <Head>
      <title>Personnalisation Perpignan</title>
      <meta name="description" content="Personnaliser vos produits" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />       
      <link rel="icon" href="/favicon.ico" />     
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Rubik+Doodle+Shadow&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Zeyada&display=swap" />
    </Head>
    <Navbar />
    <Component  {...pageProps} /> 
    <Footer />
  </>
  )
}
