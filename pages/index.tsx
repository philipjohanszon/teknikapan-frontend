import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Searchfield from '../components/searchfield'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Teknikapan</title>
        <meta name="description" content="En hemsida som recenserar och erbjuder professionell hjälp inom de senaste områdena för dator- och IT-produkter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

  {/*yo dis body????*/}
      <Searchfield></Searchfield>
    </div>
  )
}

export default Home
