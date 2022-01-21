import React from "react"
import Link from "next/link"
import { useState } from "react"
import { MenuInterface } from "./Menu.types"
import { CrossSVG } from "src/assets/CrossSVG"

export const MobileMenu: React.FC<MenuInterface> = ({navLinks, children}) => {
    const [isOpen] = useState(true);

    if(isOpen) {
        return (
            <div>
                <div>
                    <div>
                        {children}
                    </div>
                    <div>
                        <CrossSVG />
                    </div>
                </div>
                <ul>
                    {navLinks.map((item) => (
                        <li key={item.name}>
                            <Link key={item.name} href={item.href}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
                <div>
                    <div>
                        Send us an email
                    </div>
                    <div>
                        Plan a meeting
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <div>
                {children}
            </div>
            <div>
                -<br />
                -<br />
                -<br />
            </div>
        </div>
    )
}
