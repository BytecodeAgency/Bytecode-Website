import React, { useState } from "react";
import styled from "styled-components";
import { Paragraph } from "../Typography";
import { DiagonalArrow } from "../../icons";
import { WithStyle } from "../../types/utils";
import Link from "next/link";

type ArrowLinkProps = {
	onClick?: () => void;
	text: string;
	link?: string;
	color?: "black" | "white";
}
const ArrowLinkContainer = styled.div<{color: string}>`
  	display: flex;
	flex-direction: row;
	align-items: center;
	padding-bottom: 5px;
	border-bottom: ${props => `${props.color} 2px solid;`};
	width: max-content;
	&:hover {
		cursor: pointer;
	}
`;
const StyledParagraph = styled(Paragraph)`
	margin-bottom: 0;
	padding-right: 5px;
`;

const ArrowContainer = styled.div<{ rotation: boolean }>`
	transform: rotate(${props => props.rotation ? 45 : 0}deg);
`;

const ArrowLink = ({ onClick, text, className, link, color="black" }: WithStyle<ArrowLinkProps>) => {
	const [isHover, setIsHover] = useState(false);
	const Arrow = () => <ArrowContainer rotation={isHover}><DiagonalArrow color={color} size={24} /></ArrowContainer>;

	return (
		link ? (
			<Link href={link}>
				<ArrowLinkContainer
					className={className}
					onMouseEnter={() => setIsHover(true)}
					onMouseLeave={() => setIsHover(false)}
					color={color}
				>
					<StyledParagraph fontWeight="bold" text={text} color={color}/>
					<Arrow />
				</ArrowLinkContainer>
			</Link>
		) : (
			<ArrowLinkContainer
				onClick={onClick}
				className={className}
				onMouseEnter={() => setIsHover(true)}
				onMouseLeave={() => setIsHover(false)}
				color={color}
			>
				<StyledParagraph fontWeight="bold" text={text} color={color}/>
				<Arrow />
			</ArrowLinkContainer>
		)
	);
};

export default ArrowLink;