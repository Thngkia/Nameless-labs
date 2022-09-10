import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nameless Labs</title>
        <meta name="description" content="Nameless Labs - created " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}

export default Home
