import React from "react";
import styled from "styled-components";
import MeetTheFoundersBox from "../../../containers/MeetTheFoundersBox/MeetTheFoundersBox";
import { Container, Heading, Spacer } from "../../../components";
import { breakpointNameToPx, responsiveValuesCSS } from "../../../helpers";
import { MeetTheFoundersData } from "../../../content";

const MeetTheFoundersContainer = styled.div`
	margin: 20px 0;
	display: grid;
	grid-template-columns: repeat(auto-fill, 100%);
	gap: 1em;
	justify-content: center;
	@media (min-width: 424px){
		grid-template-columns: repeat(auto-fill, 424px);
	}
`;

const StyledContainer = styled(Container)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-top: 80px;
	padding-bottom: 80px;
`;

const StyledTitle = styled(Heading)`
	text-align: center;
	margin-bottom: 40px;
`;

const styledSpacerResponsiveCSS = responsiveValuesCSS(
	"margin-left",
	"px",
	breakpointNameToPx({
		xxl: 200
	})
);

const StyledSpacerContainer = styled.div`
	${styledSpacerResponsiveCSS};
	margin-bottom: 80px;
`;

const MeetTheFounders: React.FC = () => (
	<StyledContainer>
		<StyledSpacerContainer>
			<Spacer bold />
		</StyledSpacerContainer>
		<StyledTitle type="h1" text="Meet the start-up founders!" />
		<MeetTheFoundersContainer>
			{
				MeetTheFoundersData.map(card =>
					<MeetTheFoundersBox
						key={card.company}
						title={card.company}
						paragraph={card.discription}
						founders={card.founders}
						link={card.link}
					/>)
			}
		</MeetTheFoundersContainer>
	</StyledContainer>

);


export default MeetTheFounders;