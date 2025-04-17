import fs from "node:fs";
import path from "node:path";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Button } from "~/components/ui/button";

// Custom components that can be used in MDX
const components = {
	Button,
	// Add more UI components as needed
};

interface MarkdownPageProps {
	filePath: string;
	className?: string;
}

export async function MarkdownPage({
	filePath,
	className = "",
}: MarkdownPageProps) {
	// Read the markdown file
	const markdownFilePath = path.join(process.cwd(), filePath);
	const fileContent = fs.readFileSync(markdownFilePath, "utf8");

	return (
		<article
			className={`prose prose-lg dark:prose-invert container mx-auto max-w-4xl px-4 py-8 ${className}`}
		>
			<MDXRemote source={fileContent} components={components} />
		</article>
	);
}
