import React from 'react'
import type { NextPage } from 'next'
import { Heading, Paragraph, InitialContainer, theme } from '@bytecode/components'
import MainLayout from 'layout/MainLayout'
import styled from 'styled-components'
const content = {
  title: "Who is Bytecode?",
  metaDescription: "Bytecode is a technical partner and CTO for technology based start-ups."
}

const WhoWeAre: NextPage = () => {
  return (
    <MainLayout altBackgroundHeader content={content}>
      <WhoWeAreBody  />
    </MainLayout>
  )
}

const Header = () => (
  <InitialContainer background={theme.colors.colorBrand2}>
      <Heading type="h5" text="Who are we?"/>
      <Heading type="h1" text="Meet the people in the team"/>
      <Paragraph text="Learn what defines us as a team, as a company and who we personally are" />
  </InitialContainer>
)

const WhoWeAreBody = () => (
  <div>
    <Header />
  </div>
)

export default WhoWeAre
