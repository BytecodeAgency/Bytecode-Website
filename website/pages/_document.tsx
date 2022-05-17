/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
import React, { ReactElement } from "react";
import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { GoogleTagManagerHead, GoogleTagManagerBody } from "../helpers/tagManager";

const Fonts = () => (
	<>
		<link
			href="/fonts/biotif/Biotif.css"
			rel="stylesheet"
		/>
		<link
			href="/fonts/averta/Averta.css"
			rel="stylesheet"
		/>
	</>
);

export default class MyDocument extends Document {

	static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;
		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}

	render(): ReactElement {
		return (
			<Html>
				<Head>
					<GoogleTagManagerHead />
					<Fonts />
				</Head>
				<body>
					<GoogleTagManagerBody />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}

}