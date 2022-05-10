import React from "react";
import styled from "styled-components";
import { MeetTheFoundersData } from "./data";
import MeetTheFoundersBox from "../../containers/MeetTheFoundersBox/MeetTheFoundersBox";

const Container = styled.div`
	margin: 20px 0;
	display: grid;
	grid-template-columns: repeat(3, 424px);
	
	grid-gap: 1em;
`;

const MeetTheFounders: React.FC = () => {

	return (
		<Container>{MeetTheFoundersData.map(card => <MeetTheFoundersBox key={card.company} title={card.company} paragraph={card.discription} founders={card.founders} />)}</Container>
	);
};


export default MeetTheFounders;