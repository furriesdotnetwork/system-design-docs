import Head from 'next/head'
import Link from 'next/link'
export default function Home() {
  return (
    <>
      <Head>
        <title>Extras / FurrApp</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="container-grid">
          <div className="middle">
            <h1>FurrApp - Estandares del sistema de diseño</h1>
            <p>Aquí se documentarán los contenidos necesesarios para la creación de <Link className='text-underline' href="https://furrapp.com" target="_blank">FurrApp</Link></p>
            <small>Puedes contribuir al proyecto en <Link className='text-underline' href="https://github.com/ulf-frostypaw/furapp" target='_blank'>GitHub</Link></small>
          </div>
        </div>
      </main>
    </>
  )
}
