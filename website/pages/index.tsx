import React from "react";
import type { NextPage } from "next";
import { InitialContainer, Button } from "@bytecode/ui-library/components";
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

const HomeBody = () => (
	<InitialContainer>
		<Button type="primary">Hi</Button>
	</InitialContainer>
);

export default Home;
