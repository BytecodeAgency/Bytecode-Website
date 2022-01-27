import React from "react"
import { useState } from "react"
import Hamburger from 'hamburger-react'
import { MenuInterface } from "./Menu.types"
import styled from "styled-components"
import { Paragraph } from "../Typography"

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
`

const ContactContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`

export const MobileMenu: React.FC<MenuInterface> = ({ navLinks, Logo }) => {
    const [isOpen, setOpen] = useState(false);

    const Opened = () => {
        return (
            <MobileMenuContainer >
                <MenuList>
                    {navLinks.map((item) => (
                        <li key={item.name}>
                            <item.Link />
                        </li>
                    ))}
                </MenuList>
                <ContactContainer>
                    <Paragraph text="Send us an email" />
                    <Paragraph text="Plan a meeting" />
                </ContactContainer>
            </MobileMenuContainer>
        )
    }

    return (
        <>
            <MobileMenuBarTopContainer>
                <div>
                    <Logo />
                </div>
                <Hamburger toggled={isOpen} toggle={setOpen} />
            </MobileMenuBarTopContainer>
            {isOpen && <Opened />}
        </>
    )
}