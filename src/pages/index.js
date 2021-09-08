import Head from 'next/head'
import styles from '../styles/index.module.scss'
import { Header } from '../components/Header'
import { ProjectCard } from '../components/ProjectCard'
import { BackersCard } from '../components/BackersCard'
import { AboutProject } from '../components/AboutProject'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Crowdfunding</title>
        <meta name="description" content="Challenge by Frontend Mentor" />
        <link rel="icon" href="/favicon.png" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Commissioner:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.main}>
        <Header />
        <ProjectCard />
        <BackersCard />
        <AboutProject />
      </main>

    </div>
  )
}
