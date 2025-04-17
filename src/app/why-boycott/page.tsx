import { MarkdownPage } from "~/components/MarkdownPage";

export const metadata = {
	title: "Why Boycott Israel",
	description:
		"Educational resources about the boycott movement, guidelines, and news updates.",
};

export default function ResourcesPage() {
	return <MarkdownPage filePath="src/content/why-boycott.mdx" />;
}
