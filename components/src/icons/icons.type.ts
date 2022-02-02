import { ThemeColors } from "src/theme/colors.types";

export type IconSizes = 16 | 24 | 32 | 64;

export type IconComponent = React.FC<IconType>;

export interface IconType {
    icon?: IconComponent;
    color: ThemeColors | string;
    size: IconSizes;
}