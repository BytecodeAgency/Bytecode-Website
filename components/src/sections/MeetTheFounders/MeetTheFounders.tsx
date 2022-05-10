import React from "react";
import styled from "styled-components";
import { MeetTheFoundersData } from "./data";
import MeetTheFoundersBox from "../../containers/MeetTheFoundersBox/MeetTheFoundersBox";
import { Container, Heading } from "../../components";

const MeetTheFoundersContainer = styled.div`
	margin: 20px 0;
	display: grid;
	grid-template-columns: repeat(auto-fill, 424px);
	gap: 1em;
	justify-content: center;
`;

const StyledContainer = styled(Container)`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const StyledTitle = styled(Heading)`
	text-align: center;
`;

const MeetTheFounders: React.FC = () => (
	<StyledContainer>
		<StyledTitle type="h1" text="Meet the start-up founders!" />
		<MeetTheFoundersContainer>
			{
				MeetTheFoundersData.map(card =>
					<MeetTheFoundersBox
						key={card.company}
						title={card.company}
						paragraph={card.discription}
						founders={card.founders}
					/>)
			}
		</MeetTheFoundersContainer>
	</StyledContainer>

);


export default MeetTheFounders;