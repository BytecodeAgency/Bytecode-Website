import React from 'react'
import { MainLayoutInterface } from './Layout.types'
import Head from 'next/head'
import { GlobalStyles, Menu, responsiveMarginsCSS } from '@bytecode/components'
import styled from 'styled-components'

const navLinks = [
    {
        name: "Home",
        href: "/"
    },
    {
        name: "Service",
        href: "/"
    },
    {
        name: "Team",
        href: "/"
    },
    {
        name: "Our cases",
        href: "/"
    },
    {
        name: "Contact",
        href: "/"
    },
];

const BodyContainer = styled.main`
    ${responsiveMarginsCSS}
`

const MainLayout: React.FC<MainLayoutInterface> = ({ children, content }) => {
    return (
        <>
            <Head>
                <title>{content.title}</title>
                <meta property="og:title" content={content.title} key="title" />
                <meta name="description" content={content.metaDescription} />
            </Head>
            <GlobalStyles />
            <BodyContainer>
                <Menu navLinks={navLinks}>
                    <img src="images/logo.png" />
                </Menu>
                {children}
            </BodyContainer>
        </>
    )
}

export default MainLayout