import React from "react";
import styled from "styled-components";
import { LaptopScreen, Paragraph, PhoneScreen, Subtitle } from "../../components";
import { theme } from "../../theme";
import Link from "next/link";
import { DeviceTypes } from "../../sections/";

const CaseCardContainer = styled.div`
	background-color: ${theme.colors.white};
	border-radius: 10px;
	height: 391px;
	width: 272px;
	filter: drop-shadow(15px 15px 10px rgba(0, 0, 0, 0.1));
	overflow: hidden;
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

const LaptopScreenContainer = styled.div`
	margin-right: -150px;
`;

type CaseCardProps = {
	name: string;
	subtitle: string;
	image: string;
	type: DeviceTypes;
};

const CaseCard = ({ name, subtitle, image, type }:CaseCardProps) => {
	const RenderDevices = () => {
		if(type === "laptop"){
			return <LaptopScreenContainer>
				<LaptopScreen image={`/images/${image}.png`} alt={`image of ${name} app`} height={250} />
			</LaptopScreenContainer>;
		}
		if(type ===  "iphone"){
			return <PhoneScreen image={`/images/${image}.svg`} alt={`image of ${name} app`} height={240}/>;
		}
		return null;
	};

	return (
		<Link href={`/case/${name.toLowerCase()}`}>
			<CaseCardContainer>
				<RenderDevices />
				<div>
					<StyledSubtitle fontWeight="bold" text={name}/>
					<Paragraph text={subtitle} size="small"/>
				</div>
			</CaseCardContainer>
		</Link>
	);
};

export default CaseCard;