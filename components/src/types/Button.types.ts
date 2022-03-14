import { IconComponent } from "../icons/icons.type";
export type ButtonType = "primary" | "secondary";

export interface ButtonProps {
    text?: string;
    type: ButtonType;
    icon?: IconComponent;
    onClick?: () => void;
}

export interface ButtonColorsProps {
    background: string;
    color: string;
    hoverBackground: string;
    hoverColor: string;
}

export type ButtonTypeColors = {
    [k in ButtonType]: ButtonColorsProps
}

export interface ButtonStylingProps extends ButtonColorsProps {
    text?: string;
    icon?: IconComponent;
}
