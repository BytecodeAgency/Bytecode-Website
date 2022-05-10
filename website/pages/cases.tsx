import React from "react";
import styled from "styled-components";
import { NextPage } from "next";
import MainLayout from "../layout/MainLayout";
import { Container, InitialContainer, ArrowLink, Paragraph, Spacer, Heading, Subtitle, FullWidthContainer } from "@bytecode/ui-library/components";
import { PageIntro } from "@bytecode/ui-library/sections";
import { theme, breakpointNameToPx, responsiveValuesCSS, isWindowSizeBiggerThan, cases } from "@bytecode/ui-library/utils";
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
	const display = responsiveValuesCSS("display", "", breakpointNameToPx({ lg: "none" }));
	const marginLeft = responsiveValuesCSS(
		"margin-left",
		"px",
		breakpointNameToPx({
			xs: 12,
			md: 16,
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
			<StyledSpacer />
		</SpacerContainer>
	</InitialContainer>
);

const casesOverviewContainerResponsiveCSS = () => {
	const gridColumns = responsiveValuesCSS(
		"grid-template-columns",
		"",
		breakpointNameToPx({
			xs: "1fr",
			lg: "400px auto",
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
	const justifyItems = responsiveValuesCSS(
		"justify-items",
		"",
		breakpointNameToPx({
			xs: "center",
			lg: "flex-start"
		})
	);
	return gridColumns + paddingTop + columnGap + justifyItems;
};
const CasesOverviewContainer = styled(Container)`
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

const CasesOverviewRightColumn = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
`;
const Sticky = styled.div`
	position: sticky;
	top: 120px;
`;

const styledFullWidthContainerResponsiveCSS = responsiveValuesCSS(
	"background",
	"",
	breakpointNameToPx({
		xs: `url(${"/images/cases-line.svg"}) no-repeat left center, ${theme.colors.colorBrand2}`,
		md: `url(${"/images/cases-line.svg"}) no-repeat left bottom, ${theme.colors.colorBrand2}`
	})
);

const StyledFullWidthContainer = styled(FullWidthContainer)`
	${styledFullWidthContainerResponsiveCSS};
`;

const CasesOverview = () => (
	<StyledFullWidthContainer>
		<CasesOverviewContainer>
			<CasesOverviewLeftColumn>
				<Sticky>
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
				</Sticky>
			</CasesOverviewLeftColumn>
			<CasesOverviewRightColumn>
				{
					cases.map((caseCard, index)=><CaseCard name={caseCard.name} subtitle={caseCard.subtitle} key={index} />)
				}
			</CasesOverviewRightColumn>
		</CasesOverviewContainer>
	</StyledFullWidthContainer>
);

const CasesBody = () => (
	<div>
		<Intro />
		<CasesOverview />
	</div>
);


export default Cases;