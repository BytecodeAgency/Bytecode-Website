import React, { useState } from "react";
import styled from "styled-components";
import { Paragraph } from "../Typography";
import { DiagonalArrow } from "../../icons";
import { WithStyle } from "../../types/utils";
import Link from "next/link";
import { getRandomCase } from "../../content";

type ArrowLinkProps = {
	onClick?: () => void;
	text: string;
	link?: string;
}
const ArrowLinkContainer = styled.div`
  	display: flex;
	flex-direction: row;
	align-items: center;
	padding-bottom: 5px;
	border-bottom: 2px solid;
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

const ArrowLink = ({ onClick, text, className, link }: WithStyle<ArrowLinkProps>) => {
	const [isHover, setIsHover] = useState(false);

	const Arrow = () => <ArrowContainer rotation={isHover}><DiagonalArrow color="black" size={24} /></ArrowContainer>;
	const randomCaseName = getRandomCase();
	return (
		link ? (
			<Link href={link == "randomCase" ? `/case/${randomCaseName}` : link }>
				<ArrowLinkContainer className={className}
					onMouseEnter={() => setIsHover(true)}
					onMouseLeave={() => setIsHover(false)}>
					<StyledParagraph fontWeight="bold" text={text} />
					<Arrow />
				</ArrowLinkContainer>
			</Link>
		) : (
			<ArrowLinkContainer onClick={onClick} className={className}
				onMouseEnter={() => setIsHover(true)}
				onMouseLeave={() => setIsHover(false)}>
				<StyledParagraph fontWeight="bold" text={text} />
				<Arrow />
			</ArrowLinkContainer>
		)
	);
};

export default ArrowLink;