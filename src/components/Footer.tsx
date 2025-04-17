import Link from "next/link";
import Logo from "./Logo";

// Define footer link data structure
type FooterSection = {
	title: string;
	links: Array<{
		label: string;
		href: string;
	}>;
};

// Footer navigation sections data
const footerSections: FooterSection[] = [
	{
		title: "Resources",
		links: [
			{ label: "Boycott Movement", href: "/resources" },
			{ label: "Boycott Guidelines", href: "/resources#guidelines" },
			//   { label: "News & Updates", href: "/resources#news" }, TODO: Uncomment when ready
		],
	},
	{
		title: "About",
		links: [
			{ label: "Our Mission", href: "/about" },
			{ label: "Team", href: "/about#team" },
			{ label: "FAQ", href: "/about#faq" },
		],
	},
	// TODO: Uncomment this when the contribute page is ready
	// {
	// 	title: "Contribute",
	// 	links: [
	// 		{ label: "Submit Products", href: "/contribute" },
	// 		{ label: "Verification Process", href: "/contribute#verification" },
	// 		{ label: "Contact Us", href: "/contribute#contact" },
	// 	],
	// },
];

// Footer link component
const FooterLink = ({ href, label }: { href: string; label: string }) => (
	<li>
		<Link
			href={href}
			className="text-muted-foreground text-sm hover:text-foreground"
		>
			{label}
		</Link>
	</li>
);

// Footer section component
const FooterSection = ({ title, links }: FooterSection) => (
	<div>
		<h3 className="mb-4 font-semibold">{title}</h3>
		<ul className="space-y-2">
			{links.map((link) => (
				<FooterLink key={link.href} href={link.href} label={link.label} />
			))}
		</ul>
	</div>
);

export function Footer() {
	return (
		<footer className="w-full border-t bg-background">
			<div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-10 md:grid-cols-4 md:px-0">
				<div>
					<Logo className="mb-3" />

					<p className="text-muted-foreground text-sm">
						Helping consumers make informed choices by identifying Israeli
						products and suggesting ethical alternatives.
					</p>
				</div>

				{footerSections.map((section) => (
					<FooterSection
						key={section.title}
						title={section.title}
						links={section.links}
					/>
				))}
			</div>

			<div className="border-t">
				<div className="container mx-auto flex flex-col items-center justify-between py-6 md:flex-row">
					<p className="text-muted-foreground text-sm">
						© {new Date().getFullYear()} Boycott Israel (from Bangladesh). All
						rights reserved.
					</p>
					<div className="mt-4 flex gap-4 md:mt-0">
						<Link
							href="https://boycott-israel.org/donation.html"
							className="text-muted-foreground text-xs hover:text-foreground"
						>
							Donation
						</Link>
						<Link
							href="https://boycott-israel.org/"
							className="text-muted-foreground text-xs hover:text-foreground"
						>
							boycott-israel.org
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
