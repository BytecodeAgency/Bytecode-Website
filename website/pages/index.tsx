import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Button, Input } from '@bytecode/components'

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
      Hello
    </h1>
      <Button>Hi</Button>
      <Input />
  </>
)

export default Home
