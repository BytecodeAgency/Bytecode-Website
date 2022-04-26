import React, { FunctionComponent, useState } from "react";
import { theme } from "../../theme";
import { IconType } from "../../icons";
import styled from "styled-components";
import { WithStyle } from "../../types/utils";

const StyledButton = styled.div<{solid?: boolean, className?: string}>`
  	background-color: ${props => props.solid ? `${theme.colors.buttons.primary.background}` : ""};
  	cursor: pointer;
	color:  ${props => props.solid ? `${theme.colors.buttons.primary.color}` : `${theme.colors.colorBrand3}`};
	width: 24px;
	height: 24px;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 6px;
	border: none;
	border-radius: 30px;
	transition: 0.3s;
	&:hover {
		background-color: ${theme.colors.black};
		color: ${theme.colors.white};
		box-shadow: ${props => props.solid ? `5px 5px ${theme.colors.buttons.primary.background}` : ""};
	}
	`;

interface SocialButtonProps {
	Icon: FunctionComponent<IconType>,
	link?: string,
	solid?: boolean,
	mail?: boolean,
}
// TODO: create proper styling for non-solid social hoven and click
const SocialButton = ({ Icon, link, solid, mail, className }: WithStyle<SocialButtonProps>) =>{
	const [isHovered, setIsHovered] = useState<boolean>(false);
	const handleHover = () => setIsHovered(!isHovered);
	const onClick = () => {
		if(link){
			if(mail){
				window.location.href = "mailto:" + link;
			}else{
				window.open(link, "_blank");
			}
		}

	};
	return (
		<StyledButton
			onMouseEnter={handleHover}
			onMouseLeave={handleHover}
			onClick={onClick}
			solid={solid}
			className={className}
		><Icon color={!solid && !isHovered ? theme.colors.black : theme.colors.buttons.primary.color } size={32}/></StyledButton>
	);
};

export default SocialButton;