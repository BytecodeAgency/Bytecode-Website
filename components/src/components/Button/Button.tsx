import React, { useState } from "react";
import { theme } from "../../theme";
import { ButtonStyled } from "./Button.styling";
import { ButtonProps } from "../../types/Button.types";
import { WithStyle } from "../../types/utils";

const Button = ({ text, type, icon, onClick , className }: WithStyle<ButtonProps>) => {

	const [isHovered, setIshovered] = useState<boolean>(false);

	const handleHover = () => setIshovered(!isHovered);

	const { background, color, hoverBackground, hoverColor } = theme.colors.buttons[type];

	const RenderInnerContent = () => {
		if (text && icon) {
			const Icon = icon;
			return (
				<>
					<span>{text}</span>
					<Icon color={color} size={24} />
				</>
			);
		}

		if (icon) {
			const Icon = icon;
			return <Icon color={color} size={24} />;
		}

		return <span>{text}</span>;
	};

	return (
		<ButtonStyled
			onMouseEnter={handleHover}
			onMouseLeave={handleHover}
			background={background}
			color={color}
			hoverBackground={hoverBackground}
			hoverColor={hoverColor}
			icon={icon}
			text={text}
			onClick={onClick}
			className={className}
		>
			<RenderInnerContent />
		</ButtonStyled>
	);
};

export default Button;