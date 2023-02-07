import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Bread from './breadcrumb'
import Landing from './principal'
import Link from 'next/Link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Bellefair&family=DM+Sans:wght@500&family=Inter:wght@200;600;700;900&family=League+Spartan:wght@900&display=swap" rel="stylesheet"/>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed&family=Bellefair&family=DM+Sans:wght@500&family=Inter:wght@200;600;700;900&family=League+Spartan:wght@900&display=swap" rel="stylesheet" />

      </Head>
      <main className={styles.main}>
        <div>
          < Bread />
          < Landing/>
        </div>
      </main>
    </>
  )
}
