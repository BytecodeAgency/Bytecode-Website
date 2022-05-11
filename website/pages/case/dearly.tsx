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
	TeamMembers
} from "@bytecode/ui-library/sections";
import { Heading, Paragraph, Container } from "@bytecode/ui-library/components";
import styled from "styled-components";
import { breakpointNameToPx,  responsiveValuesCSS, theme } from "@bytecode/ui-library/utils";
import { layout, getEmployees } from "@bytecode/ui-library/utils";

const content = {
	title: "Dearly | Case",
	metaDescription: "Bytecode helps realize your dream applications"
};

const Dearly: NextPage = () => {
	return (
		<MainLayout content={content}>
			<DearlyBody />
		</MainLayout>
	);
};

const AboutTextContainer = styled.div`
	grid-area: text;
`;

const AboutText = () => (
	<AboutTextContainer>
		<Heading type="h2" text="How did it start?" />
		<Paragraph text="Death and grief are part of life. But how can you process something that hurts so much?
			Where can you find help? What arrangements can be made? Do other people experience the same feelings?
			All these questions came to mind when Pieter and Quirine both lost their father at a young age."
		/>
		<Paragraph text="Unfortunately, grief is still taboo in modern society.
			Pieter and Quirine want to provide a platform that supports the bereaved and normalizes grief."
		/>
		<Heading type="h4" text="Client needs" />
		<Paragraph text="Although Pieter and Quirine were motivated, building a software product was a first.
			When they found a technical partner in Bytecode, they had their idea and partially a design.
			A lot of work had to be done before users could experience the benefits of Dearly."
		/>
		<Paragraph text="Before building, we needed a plan and ask ourselves what features we were going to build.
			We made arrangements to become not only a technical partner but also a strategic partner.
			Christiaan, our UIX expert, supported (and later on covered for) Dearly’s main UX designer Yarne, while our team worked parallel on the product roadmap."
		/>
		<Paragraph text="After this phase, it was time for the development.
			Jeroen and Luciano were responsible for developing the back-end,
			while Christiaan was working to convert the design into a nicely flowing front-end."
		/>
		<Paragraph text="When the product was ready, we tested it with beta testers to optimize the user experience.
			Now was the time to go live on a larger scale and collect feedback.
			We helped Dearly during this phase by collecting data, organizing strategic sessions, giving advice and improving the product."
		/>
		<Paragraph text="Dearly has since then made a pivot and are still working on its product-market fit." />
	</AboutTextContainer>
);

const summationText: SummationText[] = [
	{
		title: "Finding product-market fit",
		text: "This phase mainly consisted of investigating which features were actively being used and to what extent. " +
			"We were especially curious about the added value of the “buddy system” feature to the grieving process. " +
			"Even though there were only a few paid users, " +
			"the buddy system was actively being used. This made it difficult to draw conclusions and scale."
	},
	{
		title: "Revenue model",
		text: "Pieter and Quirine had multiple ideas about how revenue could be generated, for example, " +
			"through partners or a freemium model. Dearly had to pivot to a new revenue model to become scalable."
	},
	{
		title: "Budget",
		text: "The MVP phase was financed with contributions from the founders and our investment. " +
			"To make further development and marketing budget available Dearly is currently seeking further investments."
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
			title="Stories and articles"
			text="Grief and memory specialists have often experienced and/or gone through the process of grief themselves.
				Based on these experiences they create articles that meet the emotional and physical needs of the bereaved."
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
				title="Buddies"
				text="Find a buddy through the app who is going through a similar process.
					You can connect with someone who has lost someone they were equally close to or who has lost their loved one in the same or similar way.
					Talk about your loss with someone who understands you."
				screenOne="/images/iphone2.svg"
				screenTwo="/images/iphone2.svg"
			/>
		</ScreensAndTextTwoContainer>
	</ScreensAndTextTwoBackground>
);

const ScreensAndTextThree = () => (
	<ScreensAndTextOneContainer>
		<ScreensAndText
			title="Professionals"
			text="Talking about the loss of a loved one and reading tips and experiences from others is unfortunately not always enough to help someone grieve properly.
				At that point, it’s best to talk to a professional.
				To facilitate this, Dearly has a network of specialists in the field of grief in the app. Each with unique expertise.
				Through Dearly, you can quickly and easily get in touch with a professional."
			screenOne="/images/iphone2.svg"
			screenTwo="/images/iphone2.svg"
		/>
	</ScreensAndTextOneContainer>
);

const DearlyBody = () => (
	<div>
		<CaseIntro
			title="Supporting you through the grieving process"
			subtitle="Dearly"
			text="A new mobile application for social support and development"
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
		<CaseQuote text="From this project, we learned about the importance of collecting feedback and measuring how your product is being used." />
		<SummationBlock
			title="The challenges"
			titleText="Like almost all early-stage startups, Dearly has faced multiple challenges.
				Here are the three most important ones:"
			summationText={summationText}
		/>
		<ScreensAndTextOne />
		<ScreensAndTextTwo />
		<ScreensAndTextThree />
		<TeamMembers members={getEmployees(["jeroen", "nick"])} />
	</div>
);

export default Dearly;