import React from "react";
import type { NextPage } from "next";
import { Container, InitialContainer, IconTitle } from "@bytecode/ui-library/components";
import { Book } from "@bytecode/ui-library/icons";
import MainLayout from "layout/MainLayout";

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

const OurProcess = () => (
	<Container>
		<IconTitle icon={Book} text="Introduction" big />

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
