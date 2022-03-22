import React from "react";
import styled from "styled-components";
import {Paragraph, PhoneScreen, Subtitle} from "../../components";
import {theme} from "../../theme";

const CaseCardContainer = styled.div`
	background-color: ${theme.colors.white};
	border-radius: 10px;
	height: 391px;
	width: 272px;
	filter: drop-shadow(15px 15px 10px rgba(0, 0, 0, 0.1));
	overflow: visible;
	margin-right: 30px;
	margin-bottom: 30px;
	padding: 60px 20px 0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	&:hover {
		cursor: pointer;
	}
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
		<PhoneScreen image="/images/case-airchip.jpeg" alt={`image of ${name} app`} height={240} />
		<div>
			<StyledSubtitle fontWeight="bold" text={name} />
			<Paragraph text={subtitle} size="small" />
		</div>
	</CaseCardContainer>
);

export default CaseCard;