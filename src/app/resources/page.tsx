import { MarkdownPage } from "~/components/MarkdownPage";

export const metadata = {
	title: "Resources | Boycott Israel",
	description:
		"Educational resources about the boycott movement, guidelines, and news updates.",
};

export default function ResourcesPage() {
	return <MarkdownPage filePath="src/content/resources.mdx" />;
}
