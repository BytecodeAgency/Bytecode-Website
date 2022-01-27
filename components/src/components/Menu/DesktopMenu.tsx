import React from "react";
import Link from "next/link";
import { MenuInterface } from "./Menu.types";
import styled from "styled-components";
import { Body } from "../Typography";

const DesktopMenuContainer = styled.div`
    display: grid;
    grid-template-columns: 200px 1fr;
    padding-top: 20px;
    padding-left: 40px;
`;

const NavLinksContainer = styled.div<{ count: number }>`
    display: inline-grid;
    grid-template-columns: repeat(${props => props.count}, 100px);
    grid-gap: 10px;
    justify-content: end;
`

export const DesktopMenu: React.FC<MenuInterface> = ({ navLinks, children }) => (
    <DesktopMenuContainer>
        <div>
            {children}
        </div>
        <NavLinksContainer count={navLinks.length}>
            {navLinks.map((item) => (
                <Body key={item.name}>
                    <Link href={item.href}>{item.name}</Link>
                </Body>
            ))}
        </NavLinksContainer>
    </DesktopMenuContainer>
)