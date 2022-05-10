import React from "react";
import { MainLayoutInterface } from "./Layout.types";
import Head from "next/head";
import { GlobalStyles, theme } from "@bytecode/ui-library/utils";
import { Menu, Footer } from "@bytecode/ui-library/sections";
import Link from "next/link";
import { useRouter } from "next/router";

const navLinksHref = [
	{
		name: "Home",
		href: "/"
	},
	{
		name: "Team",
		href: "/who-we-are"
	},
	{
		name: "Our cases",
		href: "/cases"
	},
	{
		name: "Contact",
		href: "/contact"
	},
];

const navLinks = (router: string) => {
	return navLinksHref.map((item) => ({
		name: item.name,
		Link: () => (<Link href={item.href}><span style={{ borderBottom: `2px solid ${router == item.href ? theme.colors.black : "transparent"}`, cursor: 'pointer' }}>{item.name}</span></Link>)
	}))
};

const MainLayout: React.FC<MainLayoutInterface> = ({ children, content }) => {
	const router = useRouter();

	return (
		<>
			<Head>
				<title>{content.title}</title>
				<meta property="og:title" content={content.title} key="title" />
				<meta name="description" content={content.metaDescription} />
			</Head>
			<GlobalStyles />
			<Menu navLinks={navLinks(router.pathname)} />
			<main>
				{children}
			</main>
			<Footer />
		</>
	);
};

export default MainLayout;