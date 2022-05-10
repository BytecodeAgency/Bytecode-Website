import React from "react";
import type { NextPage } from "next";
import { Container, InitialContainer, IconTitle } from "@bytecode/ui-library/components";
import { IconSummaryBlock } from "@bytecode/ui-library/containers";
import { Book } from "@bytecode/ui-library/icons";
import MainLayout from "layout/MainLayout";
import styled from "styled-components";

const content = {
	title: "Bytecode",
	metaDescription: "Bytecode is a technical partner and CTO for technology based start-ups."
};

const Home: NextPage = () => {
	return (
		<MainLayout content={content}>
			<HomeBody />
		</MainLayout>
	);
};

const StyledIconSummaryBlock = styled(IconSummaryBlock)`
	margin-bottom: 100px;
`;

const OurProcess = () => (
	<Container>
		<StyledIconSummaryBlock
			Icon={Book}
			title="Introduction"
			paragraph="Identify a problem, come up with a solution, and get acquainted with the market."
		/>
		<StyledIconSummaryBlock
			Icon={Book}
			title="Learn from our users"
			list={[
				"Send surveys",
				"Perform interviews",
				"Optimize and improve"
			]}
		/>
	</Container>
);

const HomeBody = () => (
	<div>
		<InitialContainer>
			heading of page
		</InitialContainer>
		<OurProcess />
	</div>
);

export default Home;
