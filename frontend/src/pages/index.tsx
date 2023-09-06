/* eslint-disable @next/next/no-img-element */
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
        <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
      </Head>
      <main className={styles.main}>
        <h2>Caio Ferreira</h2>
        <h1>Desenvolvedor JavaScript.</h1>
        <p>Apaixonado por criar aplicativos web que integrem perfeitamente back-ends robustos com front-ends elegantes.</p>
        <NavButtons buttonsAmount={5} selectedPage={1}/>
        <img src="/profile.png" alt="Foto de Caio Ferreira"/>
      </main>
    </>
  )
}
