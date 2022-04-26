import React from "react";
import styled from "styled-components";
import { Paragraph } from "../Typography";
import { DiagonalArrow } from "../../icons";
import { WithStyle } from "../../types/utils";

type ArrowLinkProps = {
    onClick: () => void;
    text: string;
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

const ArrowLink = ({ onClick, text, className }: WithStyle<ArrowLinkProps>) => (
	<ArrowLinkContainer onClick={onClick} className={className}>
		<StyledParagraph fontWeight="bold" text={text} />
		<DiagonalArrow color="black" size={24} />
	</ArrowLinkContainer>
);

export default ArrowLink;