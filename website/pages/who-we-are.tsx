import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import {Heading, Paragraph, InitialContainer, theme, Container, Spacer, Eye, Book, Arrows, PeopleArrows, IconTextBlock, Subtitle} from "@bytecode/components";
import MainLayout from "layout/MainLayout";
import styled from "styled-components";
const content = {
	title: "Who is Bytecode?",
	metaDescription: "Bytecode is a technical partner and CTO for technology based start-ups."
};

const WhoWeAre: NextPage = () => {
	return (
		<MainLayout altBackgroundHeader content={content}>
			<WhoWeAreBody  />
		</MainLayout>
	);
};

const HeaderContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: auto;
	align-items: center;
`;
const StyledTitleTextBlock = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding-bottom: 150px;
	padding-right: 116px;
	padding-top: 150px;
`;
const ImageContainer = styled.div`
	position: relative;
	top: 220px;
`;

const Header = () => (
	<InitialContainer background={theme.colors.colorBrand2}>
		<HeaderContainer>
			<StyledTitleTextBlock>
				<Subtitle text="Who are we?"/>
				<Heading type="h1" text="Meet the people in the team."/>
				<Paragraph text="Learn what defines us as a team, as a company and who we personally are"/>
			</StyledTitleTextBlock>
			<ImageContainer>
				<Image
					src="/images/who-we-are-working.png"
					width={708}
					height={460}
					alt="Members of Bytecode working"
				/>
			</ImageContainer>
		</HeaderContainer>
	</InitialContainer>
);

const WhatWeBringBlock = styled.div`
	padding-top: 200px;
	padding-left: 200px;
	padding-bottom: 80px;
`;
const TitleContainer = styled.div`
	width: 416px;
	margin: 40px;
`;

const IconBlocksContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	padding-left: 200px;
`;

const WhatWeBring = () => (
	<Container>
		<WhatWeBringBlock>
			<Spacer color="black" />
			<TitleContainer>
				<Heading type="h2" text="What we bring to the table."/>
			</TitleContainer>
			<IconBlocksContainer>
				<IconTextBlock
					title="Transparent"
					text="We tell you what you can expect from us, and what we want from you.
					We will give our honest opinion on your start-up idea and give tips to improve.
					Only full transparency can help you really grow.
					According to us, transparency is one of the core components of a successful working relationship."
					icon={Eye}
				/>
				<IconTextBlock
					icon={Book}
					title="Knowledgeable"
					text="We are working closely together with start-ups for some time.
					That is why we have the experience and skills to help you.
					With our guidance, you can avoid or overcome common pitfalls
					that we have seen many founders get trapped in.
					We love to share our knowledge through strategic sessions and online webinars."
				/>
				<IconTextBlock
					icon={PeopleArrows}
					title="Personal"
					text="Every start-up and founder is different. 
					This is why we always evaluate your specific situation. 
					We tailor the experience and knowledge we have to your idea and product. 
					In addition, we work closely together with you. 
					Our team will complement yours, and take the role of technical lead."
				/>
				<IconTextBlock
					icon={Arrows}
					title="Versatile"
					text="Apart from “just” developing your product idea into a working and amazing product,
					we support you throughout the whole process: strategizing, defining,
					designing and only then developing.
					We are flexible and adjust our work to fit the stage your startup is in."
				/>
			</IconBlocksContainer>
		</WhatWeBringBlock>
	</Container>
);

const ValuesBlock = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	padding-top:140px;
	padding-bottom: 80px;
`;

const LeftColumn = styled.div``;
const LeftColumnContentContainer = styled.div`
	padding: 30px 0 0 20px;
`;
const MeetingImageContainer = styled.div`
	margin-top: 50px;
`;
const RightColumn = styled.div`
	padding-left: 80px;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
`;
const SummationContainer = styled.div`
	margin-top: 24px;
`;

const Values = () => (
	<Container background={theme.colors.colorBrand3}>
		<ValuesBlock>
			<LeftColumn>
				<Spacer color="white"/>
				<LeftColumnContentContainer>
					<Heading type="h2" text="Things we value the most." color="white"/>
					<Paragraph
						text="Sometimes a narrow collaboration can be like a marriage.
						Before you ‘sign the contract’, you want to know who the other person is
						and what life together will look like. To give you a feeling and better understanding of
						how we would work together during the project, we present to you our values."
						color="white"
					/>
					<MeetingImageContainer>
						<Image
							src="/images/who-are-we-working2.png"
							width={648}
							height={432}
							alt="Members of Bytecode in a meeting"
						/>
					</MeetingImageContainer>
				</LeftColumnContentContainer>
			</LeftColumn>
			<RightColumn>
				<SummationContainer>
					<Subtitle text="1." color="white" fontWeight="bold"/>
					<Heading type="h4" color="white" text="We're all in this together."/>
					<Paragraph
						text="You know the users. We know tech stuff.
						Together we understand a lot of things.
						We believe the best work happens when we don’t think of ourselves as a client
						and agency relationship but as one team."
						color="white"
					/>
				</SummationContainer>
				<SummationContainer>
					<Subtitle text="2." color="white" fontWeight="bold"/>
					<Heading type="h4" color="white" text="Do and learn."/>
					<Paragraph
						text="We believe that skills come with experience.
						We alle learn more by doing and trying then sitting around and speculation."
						color="white"
					/>
				</SummationContainer>
				<SummationContainer>
					<Subtitle text="3." color="white" fontWeight="bold"/>
					<Heading type="h4" color="white" text="High in energy!"/>
					<Paragraph
						text="We don’t mean drinking coffee or energy drinks,
						but we love to work with founders that are passionate about their idea.
						Enthusiasm is catchy, so if you are willing to change the world, then so are we."
						color="white"
					/>
				</SummationContainer>
			</RightColumn>
		</ValuesBlock>
	</Container>
);

const TeamMembersBlock = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	padding-top: 140px;
	padding-bottom: 80px;
`;
const TeamLeftColumn = styled.div`
	padding-left: 60px;
	padding-right: 20px;
	padding-top: 100px;
`;
const TeamRightColumn = styled.div`

`;

const TeamMembers = () => (
	<Container>
		<TeamMembersBlock>
			<TeamLeftColumn>
				<Subtitle text="The people that make it happen"/>
				<Heading type="h2" text="Team members" />
				<Paragraph
					text="If you want to realize your dream, you need to have a good team.
					That is why our team that consists out of developers, designers, strategists,
					and marketers love to join your start-up project."
				/>
				<Paragraph
					text="Who are the people that are responsible for
					building the product of your dreams that fits your customers?"
				/>
			</TeamLeftColumn>
			<TeamRightColumn>
				team member components here
			</TeamRightColumn>
		</TeamMembersBlock>
	</Container>
);

const WhoWeAreBody = () => (
	<div>
		<Header />
		<WhatWeBring />
		<Values />
		<TeamMembers />
	</div>
);

export default WhoWeAre;
