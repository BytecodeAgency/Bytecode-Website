import React from "react";

export interface MenuInterface {
    Logo: React.FC;
    navLinks: NavLink[]
}

export interface NavLink {
    name: string;
    Link: React.FC;
}