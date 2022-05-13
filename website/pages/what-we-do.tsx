import React from "react";
import { NextPage } from "next";
import MainLayout from "../layout/MainLayout";
import { InitialContainer } from "@bytecode/ui-library/components";
import { PageIntro } from "@bytecode/ui-library/sections";
import styled from "styled-components";
import { breakpointNameToPx, responsiveValuesCSS } from "@bytecode/ui-library/utils";

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

const ServicesIntroduction = () => (
	<div>
        introduction about services etc
	</div>
);

const WhatWeDoBody = () => (
	<div>
		<Intro />
		<ServicesIntroduction />
	</div>
);

export default WhatWeDo;