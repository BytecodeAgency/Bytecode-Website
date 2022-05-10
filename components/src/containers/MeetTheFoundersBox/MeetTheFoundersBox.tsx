import React from "react";
import { Heading, Paragraph, TextBox, UserPicture } from "../../components";
import styled from "styled-components";
import { Founder } from "src/sections/MeetTheFounders/data";

interface MeetTheFoundersBoxProps {
	title?: string;
	paragraph: string;
	founders?:  Founder[];
}

const Container = styled.div`
	margin: 20px 0;
`;

const FoundersPictures = styled.div<{ countFounders: number; }>`
	position: absolute;
	top: -40px;
	right: 20px;
	display: grid;
	grid-template-columns: repeat(${props => props.countFounders}, auto);
	grid-gap: 8px;
`;

const MeetTheFoundersBox: React.FC<MeetTheFoundersBoxProps> = ({ title, paragraph, founders }) => {

	const MaybeRenderUserPictures = () => {
		if (founders) return <FoundersPictures countFounders={founders.length}>{founders.map(founder => <UserPicture key={founder.name} size={80} person={founder.name} color={founder.color} shadowPosition={founder.shadowPosition} />)}</FoundersPictures>;

		return null;
	};

	return (
		<Container>
			<TextBox>
				<MaybeRenderUserPictures />
				{title && <Heading type="h3" text={title} />}
				<Paragraph text={paragraph} />
			</TextBox>
		</Container>
	);
};


export default MeetTheFoundersBox;