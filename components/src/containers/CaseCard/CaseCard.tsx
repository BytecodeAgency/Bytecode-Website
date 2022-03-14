import React from "react";
import styled from "styled-components";
import {Paragraph, Subtitle} from "../../components";
import {theme} from "../../theme";

const CaseCardContainer = styled.div`
	background-color: ${theme.colors.white};
	border-radius: 10px;
	height: 391px;
	width: 272px;
	filter: drop-shadow(2px 2px 24px rgba(0, 0, 0, 0.08));
	padding: 60px 20px 0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	&:hover {
		cursor: pointer;
	}
`;

const ImageContainer = styled.div`
	background-image: url(${"/images/case-phone-background.png"});
	background-repeat: no-repeat;
	background-position: center;
	height: 240px;
	filter: drop-shadow(10px 10px 10px rgba(0,0,0,0.4));
	align-self: center;
`;

const StyledImage = styled.img`
	height: 240px;
	mask-image: url(${"/images/case-phone-background.png"});
	mask-repeat: no-repeat;
	mask-position: center;
`;

const StyledSubtitle = styled(Subtitle)`
	text-transform: capitalize;
`;

type CaseCardProps = {
	name: string;
	subtitle: string;
};

const CaseCard = ({ name, subtitle }:CaseCardProps) => (
	<CaseCardContainer onClick={() => console.log(`go to /cases/${name}`)}>
		<ImageContainer>
			<StyledImage src={"/images/case-airchip.jpeg"} alt={`image of ${name} app`} />
		</ImageContainer>
		<div>
			<StyledSubtitle fontWeight="bold" text={name} />
			<Paragraph text={subtitle} />
		</div>
	</CaseCardContainer>
);

export default CaseCard;