import React from "react";
import styled from "styled-components";
import {NextPage} from "next";
import MainLayout from "../layout/MainLayout";
import {Container, InitialContainer, ArrowLink, Paragraph, Spacer, Heading, Subtitle} from "@bytecode/ui-library/components";
import {PageIntro} from "@bytecode/ui-library/sections";
import {theme, breakpointNameToPx, responsiveValuesCSS, isWindowSizeBiggerThan} from "@bytecode/ui-library/utils";
import { CaseCard } from "@bytecode/ui-library/containers";

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

const casesOverviewContainerResponsiveCSS = () => {
	const gridColumns = responsiveValuesCSS(
		"grid-template-columns",
		"",
		breakpointNameToPx({
			xs: "1fr",
			lg: "1fr 650px",
			xl: "1fr 650px",
		}));
	const paddingTop = responsiveValuesCSS(
		"padding-top",
		"px",
		breakpointNameToPx({
			xs: 60,
			lg: 80,
			xl: 140,
		})
	);
	const columnGap = responsiveValuesCSS(
		"grid-column-gap",
		"px",
		breakpointNameToPx({
			md: 50,
			xl: 80
		})
	);
	return gridColumns + paddingTop  + columnGap;
};
const CasesOverviewContainer = styled.div`
	${casesOverviewContainerResponsiveCSS};
	padding-bottom: 40px;
	display: grid;
`;

const CasesOverviewLeftColumn = styled.div`
	display: flex;
	flex-direction: column;
`;

const LinkContainer = styled.div`
	align-self: flex-end;
`;

const DesktopLinkParagraph = styled(Paragraph)`
	margin: 10px 0;
`;

const DesktopArrowLink = styled(ArrowLink)`
	margin-bottom: 60px;
`;

const MobileArrowLink = styled(ArrowLink)`
	margin-bottom: 60px;
	align-self: flex-end;
`;

const casesOverviewRightColumnResponsiveCSS = responsiveValuesCSS(
	"grid-template-columns",
	"",
	breakpointNameToPx({
		xs: "1fr",
		md: "1fr 1fr",
	})
);
const CasesOverviewRightColumn = styled.div`
	${casesOverviewRightColumnResponsiveCSS};
	display: grid;
	justify-items: center;
	grid-column-gap: 20px;
	grid-row-gap: 20px;
	height: 800px;
	overflow: scroll;
`;

type Case = {
	name: string;
	subtitle: string;
}

const cases: Case[] = [
	{
		name: "airchip",
		subtitle: "No more queuing for a drink!"
	},
	{
		name: "dearly",
		subtitle: "Support for the loss of your loved one(s)"
	},
	{
		name: "treats",
		subtitle: "Discover tasty, healthy and ethical restaurants matching your food preferences and principles!"
	},
	{
		name: "dawny",
		subtitle: "Sleeptracking for healthy aging"
	},
	{
		name: "styr",
		subtitle: "Clear organisations and fair rewards"
	},
	{
		name: "stamps",
		subtitle: "..."
	}
];

const CasesOverview = () => (
	<Container background={theme.colors.colorBrand2}>
		<CasesOverviewContainer>
			<CasesOverviewLeftColumn>
				<Subtitle text="Selection of projects" />
				<Heading type="h2" text="Take a look at a few projects we have worked on. Will yours be next?" />

				{
					isWindowSizeBiggerThan("lg") ?
						<LinkContainer>
							<DesktopLinkParagraph text="Find out what we do" />
							<DesktopArrowLink onClick={()=>console.log("goToServicesPage")} text="Our services" />
						</LinkContainer>
						: <MobileArrowLink onClick={()=>console.log("goToServicesPage")} text="What we do"/>
				}

			</CasesOverviewLeftColumn>
			<CasesOverviewRightColumn>
				{
					cases.map((caseCard, index)=><CaseCard name={caseCard.name} subtitle={caseCard.subtitle} key={index} />)
				}
			</CasesOverviewRightColumn>
		</CasesOverviewContainer>
	</Container>
);

const CasesBody = () => (
	<div>
		<Intro />
		<CasesOverview />
	</div>
);


export default Cases;