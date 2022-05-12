import React from "react";
import { ArrowLink, Heading, Paragraph, TextBox, UserPicture } from "../../components";
import styled from "styled-components";
import { Founder } from "src/sections/HomePage/MeetTheFounders/MeetTheFounders.types";
import Link from "next/link";

interface MeetTheFoundersBoxProps {
	title?: string;
	paragraph: string;
	founders?: Founder[];
	link: string;
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
	align-items: center;
`;

const Footer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: flex-end;
	width: 100%;
`;

const MeetTheFoundersBox: React.FC<MeetTheFoundersBoxProps> = ({ title, paragraph, founders, link }) => {

	const MaybeRenderUserPictures = () => {
		if (founders) return <FoundersPictures countFounders={founders.length}>{founders.map(founder => <UserPicture key={founder.name} size={80} person={founder.name} color={founder.color} shadowPosition={founder.shadowPosition} />)}</FoundersPictures>;

		return null;
	};

	return (
		<Link href={link}>
			<Container>
				<TextBox>
					<MaybeRenderUserPictures />
					{title && <Heading type="h3" text={title} />}
					<Paragraph text={paragraph} />
					{link &&
						<Footer >
							<ArrowLink link={link} text={"Read more"} />
						</Footer>}
				</TextBox>
			</Container>
		</Link>
	);
};


export default MeetTheFoundersBox;