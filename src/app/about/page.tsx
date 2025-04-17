import { MarkdownPage } from "~/components/MarkdownPage";

export const metadata = {
	title: "About Boycott Israel BD",
	description: "Learn about our mission, team, and frequently asked questions.",
};

export default function AboutPage() {
	return <MarkdownPage filePath="src/content/about.mdx" />;
}
