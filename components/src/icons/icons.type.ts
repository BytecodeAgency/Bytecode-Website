import { ThemeColors } from "../theme";

export type IconSizes = 16 | 20 | 24 | 32 | 40 | 48 | 64;

export type IconComponent = React.FC<IconType>;

export interface IconType {
    icon?: IconComponent;
    color: ThemeColors | string;
    size: IconSizes;
}