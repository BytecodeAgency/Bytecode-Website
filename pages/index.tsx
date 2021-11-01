import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

const content = {
  title: "Bytecode",
  metaDescription: "Bytecode is a technical partner and CTO for technology based start-ups."
}

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{content.title}</title>
        <meta property="og:title" content={content.title} key="title" />
        <meta name="description" content={content.metaDescription} />
      </Head>
      <HomeBody />
    </>
  )
}

const HomeBody = () => (
  <>
      <h1>
        Hi
      </h1>
  </>
)

export default Home
