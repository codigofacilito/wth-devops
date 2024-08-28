import '../css/style.css'
import '../css/form.css'
import Head from 'next/head'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Pet Care App - By Carlos Gonzalez</title>
      </Head>

      <div className="top-bar">
        <div className="nav">
          <Link href="/">
            Inicio
          </Link>
          <Link href="/new">
            Agregar Mascota
          </Link>
        </div>

        <img
          id="title"
          src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Pet_logo_with_flowers.png"
          alt="pet care logo"
        ></img>
        <div>
          <p className="author">Autor: Carlos J. Gonzalez</p>
        </div>
      </div>
      <h1>Refugio de Adopción</h1>
      <div className="grid wrapper">
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
