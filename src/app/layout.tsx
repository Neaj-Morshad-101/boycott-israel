import "~/styles/globals.css";

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next";
import { Footer } from "~/components/Footer";
import { Navbar } from "~/components/Navbar";
import { ThemeProvider } from "~/components/ThemeProvider";
import { SidebarProvider } from "~/components/ui/sidebar";

export const metadata: Metadata = {
	title: "Boycott Israel - Know Which Products to Avoid",
	description:
		"A platform to help consumers identify Israeli products to boycott and find ethical alternatives.",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
	subsets: ["latin"],
	variable: "--font-geist-sans",
});

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html
			lang="en"
			className={`${geist.variable} scroll-smooth`}
			suppressHydrationWarning
		>
			<body className="flex min-h-screen flex-col">
				<NuqsAdapter>
					<SidebarProvider className="flex-1 flex-col">
						<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
							<Navbar />
							<main className="flex-1">{children}</main>
							<Footer />
						</ThemeProvider>
					</SidebarProvider>
				</NuqsAdapter>
			</body>
		</html>
	);
}
