import React from 'react'
import { MainLayoutInterface } from './Layout.types'
import Head from 'next/head'
import Image from 'next/image'
import { GlobalStyles, Menu, responsiveMarginsCSS } from '@bytecode/components'
import styled from 'styled-components'
import Link from 'next/link'

const navLinksHref = [
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
        href: "/who-we-are"
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

const navLinks = navLinksHref.map((item) => ({
    name: item.name,
    Link: () => (<Link href={item.href}>{item.name}</Link>)
}))

const BodyContainer = styled.main`
    ${responsiveMarginsCSS}
`

const Logo = () => (
    <Image src="/images/logo.png" width={166} height={33} />
)

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
                <Menu Logo={Logo} navLinks={navLinks} />
                {children}
            </BodyContainer>
        </>
    )
}

export default MainLayout