import React from "react";
import Link from "next/link";
import { MenuInterface } from "./Menu.types";
import styled from "styled-components";
import { Body } from "../Typography";
import Spacer from "../Spacer";
import theme from "../../theme";

const DesktopMenuContainer = styled.div`
    display: grid;
    grid-template-columns: 200px 1fr;
    padding-top: 44px;
`;

const NavLinksContainer = styled.div`
    display: flex;
    gap: ${theme.layout.gutter}px;
    justify-content: end;
`

export const DesktopMenu: React.FC<MenuInterface> = ({ navLinks, children }) => (
    <DesktopMenuContainer>
        <div>
            {children}
        </div>
        <NavLinksContainer>
            {navLinks.map((item) => (
                <Body key={item.name}>
                    <Link href={item.href}>{item.name}</Link>
                </Body>
            ))}
        </NavLinksContainer>
        <Spacer />
    </DesktopMenuContainer>
)