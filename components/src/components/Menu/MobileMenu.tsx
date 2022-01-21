import React from "react"
import Link from "next/link"
import { useState } from "react"
import { MenuInterface } from "./Menu.types"
import { CrossSVG } from "../../assets/CrossSVG"
import { HamburgerSVG } from "../../assets/HamburgerSVG"
import styled from "styled-components"

const MobileMenuBarTopContainer = styled.div<{ hide?: boolean }>`
    display: grid;
    grid-template-columns: 1fr 50px;
    padding-top: 25px;
    visibility: ${props => props.hide ? "hidden" : "unset"};
`

const MobileMenuContainer = styled.div<{ isOpen: boolean }>`
    display: ${props => props.isOpen ? "block" : "none"};
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    background: white;
    opacity: ${props => props.isOpen ? 1 : 0};
    animation: fadeIn 0.3s ease-in;
    @keyframes fadeIn {
        0% {
            opacity: 0;
            transform: translateY(-60px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
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

    const open = () => {
        setOpen(true)
    }

    const close = () => {
        setOpen(false)
    }

    const Unopened = () => {
        return (
    
            <MobileMenuBarTopContainer hide={isOpen}>
            <div>
                {children}
            </div>
            <div onClick={open} >
                <HamburgerSVG />
            </div>
        </MobileMenuBarTopContainer>
        )
    }
    
    const Opened = () => {
        return (
                <MobileMenuContainer isOpen={isOpen}>
                    <MobileMenuBarTopContainer>
                        <div>
                            {children}
                        </div>
                        <div onClick={close}>
                            <CrossSVG />
                        </div>
                    </MobileMenuBarTopContainer>
                    <MenuList>
                        {navLinks.map((item) => (
                            <li key={item.name}>
                                <Link key={item.name} href={item.href}>{item.name}</Link>
                            </li>
                        ))}
                    </MenuList>
                    <ContactContainer>
                        <div>
                            Send us an email
                        </div>
                        <div>
                            Plan a meeting
                        </div>
                    </ContactContainer>
                </MobileMenuContainer>
        )
    }

    return (
        <>
            <Unopened />
            <Opened />
        </>
    )
}