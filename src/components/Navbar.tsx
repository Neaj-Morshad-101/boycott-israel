"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { Button } from "~/components/ui/button";
import { CATEGORIES } from "~/lib/data";
import Logo from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

// Create a separate component for category handling that uses searchParams
function CategoryHandler({
	onCategoryChange,
	activeCategory,
}: {
	onCategoryChange: (category: string) => void;
	activeCategory: string;
}) {
	return (
		<>
			<h3 className="px-3 py-2 font-medium text-sm">Categories</h3>
			{CATEGORIES.map((category) => (
				<Button
					key={category.id}
					variant={activeCategory === category.id ? "secondary" : "ghost"}
					className="w-full justify-start text-sm"
					onClick={() => onCategoryChange(category.id)}
				>
					<span className="mr-2">
						{category.icon && <category.icon size={18} />}
					</span>
					<span className="capitalize">{category.name}</span>
				</Button>
			))}
		</>
	);
}

// Component that uses searchParams
function NavbarContent() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const searchParams = useSearchParams();
	const [activeCategory, setActiveCategory] = useState(
		searchParams.get("category") || "",
	);
	const router = useRouter();
	const pathname = usePathname();

	// Update active category when URL changes
	useEffect(() => {
		setActiveCategory(searchParams.get("category") || "");
	}, [searchParams]);

	// Handle category selection
	const handleCategoryChange = (newCategory: string) => {
		const currentCategory = searchParams.get("category");
		const isActive = currentCategory === newCategory;

		// Toggle category or set new one
		const url = new URL(window.location.href);
		if (isActive) {
			url.searchParams.delete("category");
			setActiveCategory("");
		} else {
			url.searchParams.set("category", newCategory);
			setActiveCategory(newCategory);
		}

		router.push(url.toString().replace(window.location.origin, ""));

		// Close mobile menu after selection
		setIsMenuOpen(false);
	};

	return (
		<>
			<div className="container mx-auto flex h-16 items-center px-4 md:px-0">
				<div className="flex w-full justify-between gap-2 md:gap-10">
					<div className="flex items-center gap-2">
						<Button
							variant="ghost"
							className="md:hidden"
							size="icon"
							onClick={() => setIsMenuOpen(!isMenuOpen)}
						>
							{isMenuOpen ? (
								<X className="h-6 w-6" />
							) : (
								<Menu className="h-6 w-6" />
							)}
						</Button>

						<Logo />
					</div>

					<div className="flex items-center gap-2">
						<div className="hidden items-center gap-4 md:flex">
							<div className="flex items-center gap-2">
								<Link href="/about">
									<Button
										variant={pathname === "/about" ? "secondary" : "ghost"}
										className="rounded-md px-3 py-2 text-sm"
									>
										About
									</Button>
								</Link>
								<Link href="/why-boycott">
									<Button
										variant={
											pathname === "/why-boycott" ? "secondary" : "ghost"
										}
										className="rounded-md px-3 py-2 text-sm"
									>
										Why Boycott?
									</Button>
								</Link>
							</div>
							<ThemeToggle />
						</div>
					</div>
				</div>
			</div>

			{/* Mobile Categories Menu */}
			<div
				className={`space-y-2 pb-3 ${isMenuOpen ? "block" : "hidden"} md:hidden`}
			>
				<div className="container mx-auto space-y-1 px-4">
					<CategoryHandler
						activeCategory={activeCategory}
						onCategoryChange={handleCategoryChange}
					/>

					<div className="mt-4 border-t pt-4">
						<Link
							href="/about"
							className="block rounded-md px-3 py-2 hover:bg-accent"
							onClick={() => setIsMenuOpen(false)}
						>
							About
						</Link>
						<Link
							href="/why-boycott"
							className="block rounded-md px-3 py-2 hover:bg-accent"
							onClick={() => setIsMenuOpen(false)}
						>
							Why Boycott?
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

// Main Navbar component with Suspense boundary
export function Navbar() {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/50 backdrop-blur">
			<Suspense
				fallback={
					<div className="container mx-auto flex h-16 items-center justify-between px-4">
						<div className="flex items-center gap-2">
							<div className="h-10 w-10 animate-pulse rounded-full bg-muted" />
							<div className="h-6 w-24 animate-pulse rounded bg-muted" />
						</div>
						<div className="h-9 w-24 animate-pulse rounded bg-muted" />
					</div>
				}
			>
				<NavbarContent />
			</Suspense>
		</header>
	);
}
