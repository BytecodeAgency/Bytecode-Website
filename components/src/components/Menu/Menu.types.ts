import React from "react";

export interface MenuInterface {
    navLinks: NavLink[]
}

export interface NavLink {
    name: string;
    Link: React.FC;
}