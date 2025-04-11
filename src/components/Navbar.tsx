"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { cn } from "~/lib/utils";
import Logo from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

// Create a separate component that uses useQueryState
function SearchForm() {
	const [searchInput, setSearchInput] = useState("");
	const searchParams = useSearchParams();
	const router = useRouter();

	// Get the search query from URL parameters
	useEffect(() => {
		const query = searchParams.get("q");
		if (query) {
			setSearchInput(query);
		}
	}, [searchParams]);

	const handleSearch = (e: React.FormEvent) => {
		e.preventDefault();
		const trimmedInput = searchInput.trim();

		if (trimmedInput) {
			// Navigate to search page with query parameter
			router.push(`/search?q=${encodeURIComponent(trimmedInput)}`);
		} else {
			// If search is empty and we're on search page, go home
			if (window.location.pathname.includes("/search")) {
				router.push("/");
			}
		}
	};

	return (
		<form className="relative w-full" onSubmit={handleSearch}>
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

	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/10 backdrop-blur">
			<div className="container mx-auto flex h-16 items-center px-4 md:px-0">
				<div className="flex w-full justify-between gap-2 md:gap-10">
					<Logo />

					<div className="mx-auto hidden max-w-xl flex-1 items-center justify-center px-4 md:flex">
						<Suspense
							fallback={
								<div className="relative h-10 w-full animate-pulse rounded-full bg-muted" />
							}
						>
							<SearchForm />
						</Suspense>
					</div>

					<div className="hidden items-center gap-4 md:flex">
						<Link href="/about" className="font-medium text-sm">
							About
						</Link>
						<Link href="/resources" className="font-medium text-sm">
							Resources
						</Link>

						{/**
						 * # TODO: Uncomment this when the contribute page is ready
						 */}
						{/* <Link
                            href="/contribute"
                            className="rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground text-sm"
                        >
                            Contribute
                        </Link> */}
						<ThemeToggle />
					</div>
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
				</div>
			</div>

			<div
				className={cn("px-3 pb-3 md:hidden", isMenuOpen ? "block" : "hidden")}
			>
				<Suspense
					fallback={
						<div className="relative h-10 w-full animate-pulse rounded-full bg-muted" />
					}
				>
					<SearchForm />
				</Suspense>
			</div>

			<div
				className={cn(
					"space-y-2 px-4 pb-3 md:hidden",
					isMenuOpen ? "block" : "hidden",
				)}
			>
				<div className="container mx-auto space-y-1">
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

					{/**
					 * # TODO: Uncomment this when the contribute page is ready
					 */}
					{/* <Link
                        href="/contribute"
                        className="block rounded-md bg-primary px-3 py-2 text-primary-foreground"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Contribute
                    </Link> */}
					<div className="flex items-center justify-between px-3 py-2">
						<span className="text-sm">Toggle theme</span>
						<ThemeToggle />
					</div>
				</div>
			</div>
		</header>
	);
}
