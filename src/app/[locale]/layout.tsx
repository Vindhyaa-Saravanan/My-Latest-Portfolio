import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";

import classNames from 'classnames';
import { Analytics } from '@vercel/analytics/next';
import { Footer, Header, RouteGuard } from "@/components";
import { baseURL, effects, style } from '@/app/resources'

// import { Inter } from 'next/font/google'
// import { Source_Code_Pro } from 'next/font/google';

import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { routing } from "@/i18n/routing";
import { renderContent } from "@/app/resources";
import { Background, Flex } from "@/once-ui/components";

import { Playfair_Display } from 'next/font/google';

const primary = Playfair_Display({
    variable: '--font-primary',
    subsets: ['latin'],
    display: 'swap'
});


export async function generateMetadata(
	{ params: { locale }}: { params: { locale: string }}
) {

	const t = await getTranslations();
	const { person, home } = renderContent(t);

	return {
		metadataBase: new URL(`https://${baseURL}/${locale}`),
		title: home.title,
		description: home.description,
		openGraph: {
			title: `${person.firstName}'s Portfolio`,
			description: 'Portfolio website showcasing my work.',
			url: baseURL,
			siteName: `${person.firstName}'s Portfolio`,
			locale: 'en_US',
			type: 'website',
		},
		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
				'max-video-preview': -1,
				'max-image-preview': 'large',
				'max-snippet': -1,
			},
		},
	}
};


type FontConfig = {
    variable: string;
};

/*
	Replace with code for secondary and tertiary fonts
	from https://once-ui.com/customize
*/
const secondary: FontConfig | undefined = undefined;
const tertiary: FontConfig | undefined = undefined;
/*
*/


interface RootLayoutProps {
	children: React.ReactNode;
	params: {locale: string};
}

export function generateStaticParams() {
	return routing.locales.map((locale) => ({locale}));
  }

export default async function RootLayout({
	children,
	params: {locale}
} : RootLayoutProps) {
	unstable_setRequestLocale(locale);
	const messages = await getMessages();
	return (
		<NextIntlClientProvider messages={messages}>
			<Flex
				as="html" lang="en"
				background="page"
				data-theme="dark"
				data-brand="aqua"
				data-accent="aqua"
				data-neutral="slate"
				data-border="rounded"
				data-solid="color"
				data-solid-style="flat"
				data-surface="filled"
				data-transition="all"
				className={classNames(
					primary.variable,
					secondary ? secondary.variable : '',
					tertiary ? tertiary.variable : '',
					code.variable)}>
				<Flex style={{minHeight: '100vh'}}
					as="body"
					fillWidth margin="0" padding="0"
					direction="column">
					<Background
						mask={effects.mask as any}
						gradient={effects.gradient as any}
						dots={effects.dots as any}
						lines={effects.lines as any}/>
					<Flex
						fillWidth
						minHeight="16">
					</Flex>
					<Header/>
					<Flex
						zIndex={0}
						fillWidth paddingY="l" paddingX="l"
						justifyContent="center" flex={1}>
						<Flex
							justifyContent="center"
							fillWidth minHeight="0">
							<RouteGuard>
								{children}
							</RouteGuard>
						</Flex>
					</Flex>
					<Footer/>
				</Flex>
			</Flex>
			<Analytics />
		</NextIntlClientProvider>
	);
}