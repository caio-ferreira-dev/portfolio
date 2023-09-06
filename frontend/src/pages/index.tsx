import Head from 'next/head'
import styles from '@/styles/pages/home.module.css'
import NavButtons from '../../components/NavButtons'


export default function Home() {
  return (
    <>
      <Head>
        <title>Caio Ferreira</title>
        <meta name="description" content="Portfolio de Caio Ferreira" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <NavButtons buttonsAmount={5} selectedPage={1}/>
      </main>
    </>
  )
}
