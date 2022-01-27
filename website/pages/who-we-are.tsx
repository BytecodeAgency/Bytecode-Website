import React from 'react'
import type { NextPage } from 'next'
import { Heading, Paragraph } from '@bytecode/components'
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

const Header = () => (
  <div>
      <Heading type="h5" text="Who are we?"/>
      <Heading type="h1" text="Meet the people in the team"/>
      <Paragraph text="Learn what defines us as a team, as a company and who we personally are" />
  </div>
)

const WhoWeAreBody = () => (
  <div>
    <Header />
  </div>
)

export default WhoWeAre
