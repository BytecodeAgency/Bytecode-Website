import React from "react";
import { Container, Heading, Paragraph, Subtitle } from "../../components";
import { theme } from "../../theme";
import styled from "styled-components";
import { CollapsibleText } from "../../containers";
import { FrequentlyAskedQuestionsContent } from "../../content";

const FAQTextContainer = styled.div`
	display: grid;
	grid-template-columns: 24px 1fr;
	grid-column-gap: 30px;
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

const FrequentlyAskedQuestions = () => (
	<Container background={theme.colors.colorBrand2}>
		<FrequentlyAskedQuestionsText />
	</Container>
);

export default FrequentlyAskedQuestions;