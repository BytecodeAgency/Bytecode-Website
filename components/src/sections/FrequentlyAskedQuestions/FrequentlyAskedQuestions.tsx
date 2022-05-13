import React from "react";
import { Heading, Paragraph, Subtitle } from "../../components";
import { theme } from "../../theme";
import styled from "styled-components";
import { CollapsibleText } from "../../containers";
import { FrequentlyAskedQuestionsContent } from "../../content";
import { breakpointNameToPx, isWindowSizeBiggerThan, responsiveValuesCSS } from "../../helpers";
import Image from "next/image";

const FAQTextContainer = styled.div`
	display: grid;
	grid-template-columns: 24px 1fr;
	grid-column-gap: 30px;
	grid-row-gap: 30px;
	padding: 160px 20px;
`;

const BulletText = styled(Paragraph)`
	grid-column: 1;
`;

const StyledCollapsibleText = styled(CollapsibleText)`
	grid-column: 2;
`;

const FrequentlyAskedQuestionsTitle = styled.div`
	grid-column: 2;
	padding-bottom: 10px;
	margin-bottom: 30px;
	&:after {
		content: "";
		display: block;
		width: 30%;
		border-bottom: 2px solid black;
	}
`;

type FrequentlyAskedQuestionProps = {
	title: string;
	description: string;
	index: number;
}
const FrequentlyAskedQuestion = ({ title, description, index }: FrequentlyAskedQuestionProps) => (
	<>
		<BulletText text={`0${index}`} />
		<StyledCollapsibleText title={title} description={description} color="black" />
	</>
);

export const FrequentlyAskedQuestionsText = () => (
	<FAQTextContainer>
		<FrequentlyAskedQuestionsTitle>
			<Subtitle text="Can we help you?" />
			<Heading type="h2" text="Frequently asked questions" />
		</FrequentlyAskedQuestionsTitle>
		{
			FrequentlyAskedQuestionsContent.map((frequentlyAskedQuestion, index)=><FrequentlyAskedQuestion key={index} title={frequentlyAskedQuestion.question} description={frequentlyAskedQuestion.answer} index={index+1} />)
		}
	</FAQTextContainer>
);

const frequentlyAskedQuestionsContainerResponsiveCSS = () => {
	const columns = responsiveValuesCSS(
		"grid-template-columns",
		"",
		breakpointNameToPx({
			xs: "1fr",
			lg: "360px 1fr"
		})
	);
	const justifyContent = responsiveValuesCSS(
		"justify-content",
		"",
		breakpointNameToPx({
			xs: "center",
			lg: "start"
		})
	);
	return columns + justifyContent;
};

const FrequentlyAskedQuestionsContainer = styled.div`
	${frequentlyAskedQuestionsContainerResponsiveCSS};
	display: grid;
	background-color: ${theme.colors.colorBrand2};
`;

const FrequentlyAskedQuestions = () => (
	<FrequentlyAskedQuestionsContainer>
		{
			isWindowSizeBiggerThan("lg")
			&& <Image
				src="/images/faq-background.svg"
				height={556}
				width={360}
			/>
		}
		<FrequentlyAskedQuestionsText />
	</FrequentlyAskedQuestionsContainer>
);

export default FrequentlyAskedQuestions;