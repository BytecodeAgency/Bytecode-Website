import React from "react";
import styled from "styled-components";
import { Paragraph, PhoneScreen, Subtitle } from "../../components";
import { theme } from "../../theme";
import Link from "next/link";

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
		transform: scale(1.02);
	}
`;

const StyledSubtitle = styled(Subtitle)`
	text-transform: capitalize;
`;


type CaseCardProps = {
	name: string;
	subtitle: string;
	image: string;
};

const CaseCard = ({ name, subtitle, image }:CaseCardProps) => (
	<Link href={`/case/${name.toLowerCase()}`}>
		<CaseCardContainer>
			<PhoneScreen image={`/images/${image}.svg`} alt={`image of ${name} app`} height={240} />
			<div>
				<StyledSubtitle fontWeight="bold" text={name} />
				<Paragraph text={subtitle} size="small" />
			</div>
		</CaseCardContainer>
	</Link>
);

export default CaseCard;