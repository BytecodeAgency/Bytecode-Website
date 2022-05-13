import React from "react";
import { Container, Paragraph } from "../../components";
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
		{
			FrequentlyAskedQuestionsContent.map((frequentlyAskedQuestion, index)=><FrequentlyAskedQuestion title={frequentlyAskedQuestion.question} description={frequentlyAskedQuestion.answer} index={index+1} />)
		}
	</FAQTextContainer>
);

const FrequentlyAskedQuestions = () => (
	<Container background={theme.colors.colorBrand2}>
		<FrequentlyAskedQuestionsText />
	</Container>
);

export default FrequentlyAskedQuestions;