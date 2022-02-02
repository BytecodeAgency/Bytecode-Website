import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import {Heading, Paragraph, InitialContainer, theme, Container} from "@bytecode/components";
import MainLayout from "layout/MainLayout";
import styled from "styled-components";
import Spacer from "@bytecode/components/dist/components/Spacer/Spacer";
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
				<Heading type="subtitle" text="Who are we?"/>
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

const MainContainer1 = styled.div`
	padding-top: 200px;
	padding-left: 200px;
`;
const TitleContainer = styled.div`
	width: 416px;
	margin-left: 50px;
`;

const IconTextBlock = styled.div`
		
`;

const WhatWeBring = () => (
	<Container>
		<MainContainer1>
			<Spacer color="black" />
			<TitleContainer>
				<Heading type="h2" text="What we bring to the table."/>
			</TitleContainer>
			<div>iconboxes</div>
		</MainContainer1>
	</Container>
)

const WhoWeAreBody = () => (
	<div>
		<Header />
		<WhatWeBring />
	</div>
);

export default WhoWeAre;
