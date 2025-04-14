"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { CATEGORIES } from "~/lib/data";
import Logo from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

// Search form component
function SearchForm({ onSearch }: { onSearch?: (query: string) => void }) {
	const searchParams = useSearchParams();
	const [searchInput, setSearchInput] = useState(searchParams.get("q") || "");
	const router = useRouter();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const trimmedInput = searchInput.trim();

		if (onSearch) {
			onSearch(trimmedInput);
		} else {
			// Default behavior if no onSearch provided
			if (trimmedInput) {
				router.push(`/?q=${encodeURIComponent(trimmedInput)}`);
			}
		}
	};

	return (
		<form className="relative w-full" onSubmit={handleSubmit}>
			<Input
				type="search"
				placeholder="Search products..."
				className="w-full rounded-full pr-10"
				value={searchInput}
				onChange={(e) => setSearchInput(e.target.value)}
			/>
			<Button
				type="submit"
				size="sm"
				className="-translate-y-1/2 absolute top-1/2 right-1 h-8 transform rounded-full"
			>
				Search
			</Button>
		</form>
	);
}

export function Navbar() {
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

	// Handle search submission
	const handleSearch = (query: string) => {
		const url = new URL(window.location.href);
		if (query) {
			url.searchParams.set("q", query);
		} else {
			url.searchParams.delete("q");
		}
		router.push(url.toString().replace(window.location.origin, ""));
	};

	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/50 backdrop-blur">
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
								<Link href="/resources">
									<Button
										variant={pathname === "/resources" ? "secondary" : "ghost"}
										className="rounded-md px-3 py-2 text-sm"
									>
										Resources
									</Button>
								</Link>
							</div>
							<ThemeToggle />
						</div>
					</div>
				</div>
			</div>

			{/* Mobile Search */}
			<div className={`pb-3 ${isMenuOpen ? "block" : "hidden"} md:hidden`}>
				<div className="container mx-auto px-4">
					<Suspense
						fallback={
							<div className="h-9 w-full animate-pulse rounded-full bg-accent" />
						}
					>
						<SearchForm onSearch={handleSearch} />
					</Suspense>
				</div>
			</div>

			{/* Mobile Categories Menu */}
			<div
				className={`space-y-2 pb-3 ${isMenuOpen ? "block" : "hidden"} md:hidden`}
			>
				<div className="container mx-auto space-y-1 px-4">
					<h3 className="px-3 py-2 font-medium text-sm">Categories</h3>
					{CATEGORIES.map((category) => (
						<Button
							key={category.id}
							variant={activeCategory === category.id ? "secondary" : "ghost"}
							className="w-full justify-start text-sm"
							onClick={() => handleCategoryChange(category.id)}
						>
							<span className="mr-2">
								{category.icon && <category.icon size={18} />}
							</span>
							<span className="capitalize">{category.name}</span>
						</Button>
					))}

					<div className="mt-4 border-t pt-4">
						<Link
							href="/about"
							className="block rounded-md px-3 py-2 hover:bg-accent"
							onClick={() => setIsMenuOpen(false)}
						>
							About
						</Link>
						<Link
							href="/resources"
							className="block rounded-md px-3 py-2 hover:bg-accent"
							onClick={() => setIsMenuOpen(false)}
						>
							Resources
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
}
