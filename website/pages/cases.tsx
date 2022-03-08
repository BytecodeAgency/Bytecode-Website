import React from "react";
import styled from "styled-components";
import {NextPage} from "next";
import MainLayout from "../layout/MainLayout";
import {Container, InitialContainer, ArrowLink, Paragraph, Spacer} from "@bytecode/ui-library/components";
import {PageIntro} from "@bytecode/ui-library/sections";
import {theme, breakpointNameToPx, responsiveValuesCSS} from "@bytecode/ui-library/utils";

const content = {
	title: "Cases of Bytecode",
	metaDescription:  "Bytecode is a technical partner and CTO for technology based start-ups."
};

const Cases: NextPage = () => (
	<MainLayout content={content}>
		<CasesBody />
	</MainLayout>
);

const StyledPageIntro = styled(PageIntro)`
	margin-bottom: 40px;
`;

const IntroLinkContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	width: max-content;
	align-self: flex-end;
`;
const LinkParagraph = styled(Paragraph)`
	margin-bottom: 10px;
`;

const spacerResponsiveCSS = () => {
	const display = responsiveValuesCSS("display", "", breakpointNameToPx({lg: "none"}));
	const marginLeft = responsiveValuesCSS(
		"margin-left",
		"px",
		breakpointNameToPx({
			xs: 12,
			md: 24,
		})
	);
	return display + marginLeft;
};
const StyledSpacer = styled(Spacer)`
	${spacerResponsiveCSS};
	margin-bottom: 60px;
`;
const SpacerContainer = styled.div`
	padding-left: 80px;
`;

const Intro = () => (
	<InitialContainer>
		<StyledPageIntro
			subtitle="Our cases"
			title="An overview of the projects we've worked on."
			paragraph="Here you can read more about the start-up projects we have worked on,
            scroll between the different projects, and learn about other peoples their start-up journeys.
            Focus on how we have helped start-ups to build and validate their idea.
            Or just be inspired by their ideas and solutions."
			link={(
				<IntroLinkContainer>
					<LinkParagraph text="Don't know what to read?" />
					<ArrowLink text="Let us choose" onClick={()=>console.log("clicked")}/>
				</IntroLinkContainer>
			)}
		/>
		<SpacerContainer>
			<StyledSpacer color="black"/>
		</SpacerContainer>
	</InitialContainer>
);

const CasesOverview = () => (
	<Container background={theme.colors.colorBrand2}>
        Cases overview
	</Container>
);

const CasesBody = () => (
	<div>
		<Intro />
		<CasesOverview />
	</div>
);


export default Cases;