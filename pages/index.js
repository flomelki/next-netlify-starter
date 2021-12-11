import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div>
        <Head>
          <title>Lena Josse - ostéopathe des olivettes</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      <div>
        <nav className="info-container">
          blablabla
        </nav>

        <main className="content-container">
          <section className="content  image image1">
              <Header title="Cabinet d'ostéopathie de Lena Josse" />
              <p className="description">
              Ostéopathe diplômée depuis 2007 de l’école IdHEO Nantes, je vous accueille dans le centre-ville de Nantes dans un cabinet pluridisciplinaire composé de psychologues et orthophonistes. J’y travaille le jeudi et prends soin de nourrissons, enfants et adultes pour tout motif de consultation. Des formations complémentaires m’ont permis de me spécialiser dans la prise en charge globale des nourrissons et des troubles de la sphère buccale chez les enfants et les adultes (bruxisme, apnée du sommeil, suivi de traitement orthodontique ou orthophoniste, craquements de mâchoire, etc). N'hésitez pas à me contacter par SMS ou appel pour avoir des informations complémentaires ou prendre rdv.
              </p>
            <Footer />
          </section>

          <section className="content">
              <Header title="Welcome to my app!" />
              <p className="description">
                Get started by editing <code>pages/index.js</code>
              </p>
            <Footer />
          </section>
        </main>
      </div> 
    </div>

    
  )
}
