import React from "react"
import Link from "next/link"
import { useState } from "react"
import Hamburger from 'hamburger-react'
import { MenuInterface } from "./Menu.types"
import styled from "styled-components"
import { Body } from "../Typography"

const MobileMenuBarTopContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 60px;
    padding-top: 25px;
    padding-right: 25px;
    height: 75px;
`

const MobileMenuContainer = styled.div`
    height: calc(100vh - 150px);
    width: 100vw;
    position: absolute;
    top: 75px;
    left: 0;
    background: white;
`

const MenuList = styled.ul`
    margin: auto;
    width: 60%;
`

const ContactContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`

export const MobileMenu: React.FC<MenuInterface> = ({ navLinks, children }) => {
    const [isOpen, setOpen] = useState(false);

    const Opened = () => {
        return (
            <MobileMenuContainer >
                <MenuList>
                    {navLinks.map((item) => (
                        <li key={item.name}>
                            <Body>
                                <Link key={item.name} href={item.href}>{item.name}</Link>
                            </Body>
                        </li>
                    ))}
                </MenuList>
                <ContactContainer>
                    <Body>
                        Send us an email
                    </Body>
                    <Body>
                        Plan a meeting
                    </Body>
                </ContactContainer>
            </MobileMenuContainer>
        )
    }

    return (
        <>
            <MobileMenuBarTopContainer>
                <div>
                    {children}
                </div>
                <Hamburger toggled={isOpen} toggle={setOpen} />
            </MobileMenuBarTopContainer>
            {isOpen && <Opened />}
        </>
    )
}