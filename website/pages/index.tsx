import React from 'react'
import type { NextPage } from 'next'
import { Button } from '@bytecode/components'
import MainLayout from 'layout/MainLayout'

const content = {
  title: "Bytecode",
  metaDescription: "Bytecode is a technical partner and CTO for technology based start-ups."
}

const Home: NextPage = () => {
  return (
    <MainLayout content={content}>
      <HomeBody />
    </MainLayout>
  )
}

const HomeBody = () => (
  <>
    <h1>
      Hello
    </h1>
      <Button>Hi</Button>
  </>
)

export default Home
