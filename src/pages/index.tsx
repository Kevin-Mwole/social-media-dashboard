import { Dashboard } from "src/components/dashboard"
import Head from "next/head"
import type { NextPage } from "next"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Social Media Dashboard</title>
        <meta
          name="description"
          content="FrontendMentor design challenge implemented in NextJs"
        />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <Dashboard />
    </>
  )
}

export default Home
