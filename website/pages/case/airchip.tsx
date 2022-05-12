import React from "react";
import { NextPage } from "next";
import MainLayout from "../../layout/MainLayout";
import {
	CaseIntro,
	CaseAbout,
	CaseQuote,
	SummationBlock,
	SummationText,
	ScreensAndText,
} from "@bytecode/ui-library/sections";
import { Heading, Paragraph, Container, UserPicture, TextBalloon } from "@bytecode/ui-library/components";
import styled from "styled-components";
import { breakpointNameToPx, responsiveValuesCSS, theme } from "@bytecode/ui-library/utils";
import { layout } from "@bytecode/ui-library/utils";
import { CaseTeamMembers } from "@bytecode/ui-library/containers";

const content = {
	title: "Airchip | Case",
	metaDescription: "Bytecode helps realize your dream applications"
};

const Airchip: NextPage = () => {
	return (
		<MainLayout content={content}>
			<AirchipBody />
		</MainLayout>
	);
};

const AboutTextContainer = styled.div`
	grid-area: text;
`;

const AboutText = () => (
	<AboutTextContainer>
		<Heading type="h2" text="How did it start?" />
		<Paragraph text="Daniel loves festivals. That is why he founded a full-service event agency. Ten years of experience in this sector now led to the creation of a new and exciting product: Airchip. Daniel aims to prevent queues at events by improving and changing the drink order process."
		/>
		<Heading type="h4" text="Client needs" />
		<Paragraph text="Before approaching us, Airchip already built and tested their MVP. Results were promising, and some revenue was created. However, the user experience was still lacking, and the backend needed major improvements to be able to scale up."
		/>
		<Paragraph text="Luciano, a co-founder of Bytecode, was put to the challenging task of creating a stable backend. Many people had worked on this backend, which resulted in an unstable codebase with many pivots still visible. During the following months, Luciano worked closely together with Airchip - as their interim CTO - and created a scalable and stable product. Unfortunately, unforeseen challenges meant the effects of the improvements could not be experienced yet (see below)."
		/>
		<Paragraph text="Apart from Luciano’s work on the backend, our UIX guru Christiaan was busy working on the overall user experience. He made several UI and UX improvements to make Airchip more sensible and easy to use."
		/>
	</AboutTextContainer>
);

const summationText: SummationText[] = [
	{
		title: "COVID-19",
		text: "Airchip was doing well and had much potential: the right team, a great product, some funding... but bad timing got in their way. Just when they were ready to launch at big events, COVID-19 hit. This made it impossible to make money and improve the product."
	},
	{
		title: "Finding the right tech team",
		text: "Until they found Bytecode, Airchip had its portion of difficulty finding the right people to build and improve their technically challenging product. Although their initial team had a lot of software experience, a lack of knowledge about startup development led to technical debt and difficulties scaling up. After their technical co-founder left, the search continued until we eventually got involved."
	},
	{
		title: "User experience",
		text: "Airchip has a lot of payment transactions. " +
			"Airchip users go through many payment transactions in the app. Therefore, it is crucial to have a solid and tested user flow. Based on feedback on the MVP, we started the project by optimizing the overall user experience. In hindsight, more attention should have gone to the UX before going live with the MVP."
	}
];

const screensAndTextOneContainerResponsiveCSS = () => {
	const paddingTopAndBottom = breakpointNameToPx({
		xs: 60,
		lg: 90,
		xl: 150,
		xxl: 200
	});
	const paddingTop = responsiveValuesCSS(
		"padding-top",
		"px",
		paddingTopAndBottom
	);
	const paddingBottom = responsiveValuesCSS(
		"padding-bottom",
		"px",
		paddingTopAndBottom
	);
	const paddingLeft = responsiveValuesCSS(
		"padding-left",
		"px",
		breakpointNameToPx({
			...layout.container.margin,
			xl: 120,
			xxl: 200
		})
	);
	const backgroundSize = responsiveValuesCSS(
		"background-size",
		"",
		breakpointNameToPx({
			xs: "60% auto",
			md: "50% auto",
			lg: "40% auto"
		})
	);
	return paddingLeft + paddingBottom + paddingTop + backgroundSize;
};

const ScreensAndTextOneContainer = styled.div`
	${screensAndTextOneContainerResponsiveCSS};
	background: url(${"/images/case-airchip-line1.svg"}) no-repeat left top, url(${"/images/case-airchip-line2.svg"}) no-repeat right bottom, ${theme.colors.colorBrand2};
	display: grid;
	justify-items: flex-start;
`;


const ScreensAndTextOne = () => (
	<ScreensAndTextOneContainer>
		<ScreensAndText
			title="Short queues and short waiting times"
			text="The main feature of Airchip is ordering drinks and snacks via a mobile app at any event or festival. When an order is ready for pickup, users receive a notification. To make sure the waiting time is as low as possible, users can select their pick-up location."
			screenOne="/images/iphone2.svg"
			screenTwo="/images/iphone2.svg"
		/>
	</ScreensAndTextOneContainer>
);

const screensAndTextTwoBackgrounResponsiveCSS = () => {
	const background = responsiveValuesCSS(
		"background",
		"",
		breakpointNameToPx({
			lg: `url(${"/images/case-airchip-line3.svg"}) no-repeat bottom left`
		})
	);
	const backgroundSize = responsiveValuesCSS(
		"background-size",
		"",
		breakpointNameToPx({
			lg: "30% auto",
			xxl: "auto"
		})
	);
	return background + backgroundSize;
};

const ScreensAndTextTwoBackground = styled.div`
	${screensAndTextTwoBackgrounResponsiveCSS};
`;

const screensAndTextTwoContainerResponsiveCSS = () => {
	const paddingTop = responsiveValuesCSS(
		"padding-top",
		"px",
		breakpointNameToPx({
			xs: 60,
			md: 90,
			xl: 150,
			xxl: 200
		})
	);
	const paddingBottom = responsiveValuesCSS(
		"padding-bottom",
		"px",
		breakpointNameToPx({
			xs: 60,
			md: 90,
			xl: 150,
			xxl: 200
		})
	);
	const paddingRight = responsiveValuesCSS(
		"padding-right",
		"px",
		breakpointNameToPx({
			...layout.container.margin,
			xl: 120,
			xxl: 200
		})
	);


	return paddingRight + paddingBottom + paddingTop;
};

const ScreensAndTextTwoContainer = styled(Container)`
	${screensAndTextTwoContainerResponsiveCSS};
	display: grid;
	justify-items: center;
	background-origin: border-box;
`;

const ScreensAndTextTwo = () => (
	<ScreensAndTextTwoBackground>
		<ScreensAndTextTwoContainer>
			<ScreensAndText
				title="Always ‘online’ and ready to order"
				text="What if the internet connection is poor or unavailable? Airchip uses Bluetooth connections to stay ‘online’, so that users can still purchase their drinks and snacks, and retailers still receive the orders."
				screenOne="/images/iphone2.svg"
				screenTwo="/images/iphone2.svg"
			/>
		</ScreensAndTextTwoContainer>
	</ScreensAndTextTwoBackground>

);

const AirchipBody = () => (
	<div>
		<CaseIntro
			title="Barman in your pants"
			subtitle="Airchip"
			text={"An app for ordering drinks and snacks via a mobile app at any event or festival." +
				"When an order is ready for pickup, users receive a notification."}
			image="airchip-header.png"
			logo="airchip-logo.svg"
		/>
		<CaseAbout
			expertises={[
				"CTO",
				"Development"
			]}
			deliverables={[
				"iOS application",
				"Android application",
				"CMS"
			]}
		><AboutText /></CaseAbout>
		<CaseQuote text="While working on Airchip we experienced firsthand how fragile a startup journey can be. Because of COVID-19, many events were canceled. This made it harder for Airchip to test and grow." />
		<SummationBlock
			title="The challenges"
			titleText="Despite being in their post-MVP phase and gaining some investment, Airchip also experienced some difficult challenges. Three of the most crucial ones are listed here."
			summationText={summationText}
		/>
		<ScreensAndTextOne />
		<ScreensAndTextTwo />
		<CaseTeamMembers>
			<UserPicture color="purple" person="jantenkate" size={120} shadowPosition={"top"} balloonText="My name is Daniel van Drunen and I'm an experienced event organizer"/>
			<UserPicture color="lightGreen" person="danielvandrunen" size={120} shadowPosition={"bottom"} balloonText="Hello I'm Jan ten kate. Airchip's product owner with a background in industrial design engineering" /> 
		</CaseTeamMembers>
	</div>
);

export default Airchip;