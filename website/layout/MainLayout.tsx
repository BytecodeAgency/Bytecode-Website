import React from 'react'
import { MainLayoutInterface } from './Layout.types'
import Head from 'next/head'
import Image from 'next/image'
import { GlobalStyles, Menu } from '@bytecode/components'

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

const MainLayout: React.FC<MainLayoutInterface> = ({ children, content }) => (
    <>
        <Head>
            <title>{content.title}</title>
            <meta property="og:title" content={content.title} key="title" />
            <meta name="description" content={content.metaDescription} />
        </Head>
        <GlobalStyles/>
        <div>
            <Menu navLinks={navLinks}>
                <img src="images/logo.png" />
            </Menu>
            {children}
        </div>
    </>
)

export default MainLayout