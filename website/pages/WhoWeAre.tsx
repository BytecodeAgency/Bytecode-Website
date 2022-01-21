import React from 'react'
import type { NextPage } from 'next'
// import { Button } from '@bytecode/components'
import MainLayout from 'layout/MainLayout'

const content = {
  title: "Who is Bytecode?",
  metaDescription: "Bytecode is a technical partner and CTO for technology based start-ups."
}

const WhoWeAre: NextPage = () => {
  return (
    <MainLayout content={content}>
      <WhoWeAreBody  />
    </MainLayout>
  )
}

const WhoWeAreBody = () => (
  <>
    <h1>
      Hello
    </h1>
      {/* <Button>Hi</Button> */}
  </>
)

export default WhoWeAre
