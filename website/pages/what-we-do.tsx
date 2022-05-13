import React from "react";
import { NextPage } from "next";
import MainLayout from "../layout/MainLayout";
import { Container, InitialContainer, Heading, Paragraph, ArrowLink } from "@bytecode/ui-library/components";
import { PageIntro } from "@bytecode/ui-library/sections";
import styled from "styled-components";
import { breakpointNameToPx, responsiveValuesCSS, theme } from "@bytecode/ui-library/utils";

const content = {
	title: "Services we provide",
	metaDescription: "Bytecode is a technical partner and CTO for technology based start-ups."
};

const WhatWeDo: NextPage = () => {
	return (
		<MainLayout content={content}>
			<WhatWeDoBody />
		</MainLayout>
	);
};

const introImageContainerResponsiveCSS = () => {
	const imageWidths = responsiveValuesCSS("width", "", breakpointNameToPx({ xs: "100vw", lg: "100%" }));
	const marginLeft = responsiveValuesCSS("margin-left", "px", breakpointNameToPx({ xs: -24, md:-32, lg: 32, xl: 48, xxl: 64 }));
	return imageWidths + marginLeft;
};

const IntroImageContainer = styled.div`
	${introImageContainerResponsiveCSS};
	position: relative;
`;

const StyledImage = styled.img`
	width: 100%;
`;
const IntroContainer = styled(InitialContainer)`
	padding-right: 0;
`;

const Intro = () => (
	<IntroContainer>
		<PageIntro
			title="Need help with your tech start-up?"
			subtitle="What we do"
			paragraph="Building a successful startup is hard, but finding the right people to build your software product
				is perhaps even more difficult. We understand that you want to have dedicated team members on who you can rely.
				We imagine that you don’t have the resources to hire a whole team and a CTO. That is why we offer a partnership with us.
				We are your technical co-founder & interim-CTO."
			image={
				(
					<IntroImageContainer>
						<StyledImage
							src="/images/who-are-we-working2.png"
							alt="Members of Bytecode working"
						/>
					</IntroImageContainer>
				)
			}
		/>
	</IntroContainer>
);

const servicesIntroductionContainerResponsiveCSS = responsiveValuesCSS(
	"background",
	"",
	breakpointNameToPx({
		xs: `url(${"/images/what-we-do-line-light.svg"}) no-repeat left center, ${theme.colors.colorBrand1} content-box;`,
		lg: `url(${"/images/what-we-do-line.svg"}) no-repeat left center, ${theme.colors.colorBrand1} content-box;`
	})
);

const ServicesIntroductionContainer = styled.div`
	${servicesIntroductionContainerResponsiveCSS};
	padding: 80px 0;
	display: grid;
	justify-content: end;
	align-content: center;
	height: 600px;
`;

const TextContainer = styled(Container)`
	max-width: 700px;
	display: grid;
`;

const StyledArrowLink = styled(ArrowLink)`
	justify-self: end;
`;

const ServicesIntroduction = () => (
	<ServicesIntroductionContainer>
		<TextContainer>
			<Heading type="h2" text="Introduction about services" color="white" />
			<Paragraph
				text="As you might already know, a startup journey isn’t set in stone.
					Some workflows occur repeatedly. We would like to take you through four stages. The input is your idea.
					The output: a working version that solves the problems of your users."
				color="white"
			/>
			<Paragraph
				text="Already have an MVP? That’s amazing! But perhaps you do not know how to proceed from there.
					Don't worry, we will help you to collect feedback and improve the product."
				color="white"
			/>
			<StyledArrowLink text="Speak with us" link="/contact" color="white"/>
		</TextContainer>
	</ServicesIntroductionContainer>
);

const WhatWeDoBody = () => (
	<div>
		<Intro />
		<ServicesIntroduction />
	</div>
);

export default WhatWeDo;