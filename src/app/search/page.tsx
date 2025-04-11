"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { ProductPair } from "~/components/ProductCard";
import { Button } from "~/components/ui/button";
import { PRODUCT_PAIRS } from "~/lib/data";

// This component handles the actual search functionality
function SearchResults() {
	const searchParams = useSearchParams();
	const [searchResults, setSearchResults] = useState<typeof PRODUCT_PAIRS>([]);

	const searchQuery = searchParams.get("q") || "";
	const category = searchParams.get("category") || "";

	useEffect(() => {
		// Apply filters based on both search query and category
		let results = [...PRODUCT_PAIRS];

		if (searchQuery) {
			results = results.filter(
				(pair) =>
					pair.boycottProduct.name
						.toLowerCase()
						.includes(searchQuery.toLowerCase()) ||
					pair.boycottProduct.company
						.toLowerCase()
						.includes(searchQuery.toLowerCase()) ||
					pair.alternativeProduct.name
						.toLowerCase()
						.includes(searchQuery.toLowerCase()) ||
					pair.alternativeProduct.company
						.toLowerCase()
						.includes(searchQuery.toLowerCase()),
			);
		}

		if (category) {
			results = results.filter(
				(pair) =>
					pair.boycottProduct.category === category ||
					pair.alternativeProduct.category === category,
			);
		}

		setSearchResults(results);
	}, [searchQuery, category]);

	// Function to clear filters
	const clearFilters = () => {
		// Create a new URL without the query parameters
		const url = new URL(window.location.href);
		url.searchParams.delete("q");
		url.searchParams.delete("category");
		window.history.pushState({}, "", url);
		// Force a page reload to reset the state
		window.location.href = url.toString();
	};

	return (
		<>
			<div className="mb-8 px-4 md:px-0">
				<h1 className="mb-2 font-bold text-2xl">
					{searchQuery || category ? (
						<>
							{searchQuery && <span>Search results for "{searchQuery}"</span>}
							{searchQuery && category && <span> in </span>}
							{category && <span className="capitalize">{category}</span>}
						</>
					) : (
						"All Products"
					)}
				</h1>
				<div className="flex items-center gap-2">
					<p className="text-muted-foreground">
						{searchResults.length} results found
					</p>
					{(searchQuery || category) && (
						<Button
							variant="ghost"
							size="sm"
							className="h-7 text-xs"
							onClick={clearFilters}
						>
							Clear filters
						</Button>
					)}
				</div>
			</div>

			{searchResults.length > 0 ? (
				<div className="grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 md:gap-6 md:px-0 lg:grid-cols-3">
					{searchResults.map((pair, index) => (
						<ProductPair
							key={pair.boycottProduct.name}
							boycottProduct={pair.boycottProduct}
							alternativeProduct={pair.alternativeProduct}
						/>
					))}
				</div>
			) : (
				<div className="px-4 py-12 text-center md:px-0">
					<p className="mb-2 font-medium text-xl">No products found</p>
					<p>Try searching for a different product name or category.</p>
				</div>
			)}
		</>
	);
}

export default function SearchPage() {
	return (
		<div className="min-h-screen">
			<section className="py-10">
				<div className="container mx-auto">
					<Suspense
						fallback={
							<div className="animate-pulse space-y-4">
								<div className="h-8 w-3/4 rounded-md bg-muted" />
								<div className="h-4 w-1/4 rounded-md bg-muted" />
								<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
									{[...Array(6)].map((_, i) => (
										<div key={i} className="h-64 rounded-lg bg-muted" />
									))}
								</div>
							</div>
						}
					>
						<SearchResults />
					</Suspense>
				</div>
			</section>
		</div>
	);
}
