"use client";

import { Search } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { type IProductSection, PRODUCT_SECTIONS } from "~/lib/data";
import { CategorySection } from "./CategorySection";

function SearchBar({ onSearch }: { onSearch: (query: string) => void }) {
	const searchParams = useSearchParams();
	const [searchInput, setSearchInput] = useState(searchParams.get("q") || "");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSearch(searchInput);
	};

	return (
		<div className="sticky top-16 z-10 bg-background/95 py-4 backdrop-blur-sm">
			<form onSubmit={handleSubmit} className="relative">
				<Input
					type="search"
					value={searchInput}
					onChange={(e) => setSearchInput(e.target.value)}
					placeholder="Search products..."
					className="w-full rounded-full pr-10"
				/>
				<Button
					type="submit"
					size="icon"
					variant="ghost"
					className="-translate-y-1/2 absolute top-1/2 right-2"
				>
					<Search className="h-4 w-4" />
					<span className="sr-only">Search</span>
				</Button>
			</form>
		</div>
	);
}

function ProductsContent() {
	const searchParams = useSearchParams();
	const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
	const [category, setCategory] = useState(searchParams.get("category") || "");
	const [filteredSections, setFilteredSections] = useState<IProductSection[]>(
		[],
	);

	// Handle search function
	const handleSearch = (query: string) => {
		setSearchQuery(query);
		// Update URL without page reload
		const url = new URL(window.location.href);
		if (query) {
			url.searchParams.set("q", query);
		} else {
			url.searchParams.delete("q");
		}
		window.history.pushState({}, "", url);
	};

	// Clear all filters
	const clearFilters = () => {
		setSearchQuery("");
		setCategory("");
		const url = new URL(window.location.href);
		url.searchParams.delete("q");
		url.searchParams.delete("category");
		window.history.pushState({}, "", url);
	};

	// Handle category selection
	const handleCategorySelect = (selectedCategory: string) => {
		if (category === selectedCategory) {
			// If clicking on already selected category, clear it
			setCategory("");
			const url = new URL(window.location.href);
			url.searchParams.delete("category");
			window.history.pushState({}, "", url);
		} else {
			// Set new category
			setCategory(selectedCategory);
			const url = new URL(window.location.href);
			url.searchParams.set("category", selectedCategory);
			window.history.pushState({}, "", url);
		}
	};

	// Update local state when URL params change
	useEffect(() => {
		setCategory(searchParams.get("category") || "");
		setSearchQuery(searchParams.get("q") || "");
	}, [searchParams]);

	// Filter product sections based on search query and category
	useEffect(() => {
		// Start with all product sections
		let sections = [...PRODUCT_SECTIONS];

		// Filter by category if selected
		if (category) {
			sections = sections.filter((section) => section.category === category);
		}

		// Filter by search query if provided
		if (searchQuery) {
			const lowercaseQuery = searchQuery.toLowerCase();

			// Apply the filter to each section
			sections = sections.map((section) => {
				// Filter boycott products
				const filteredBoycottProducts = section.boycottProducts.filter(
					(product) =>
						product.name.toLowerCase().includes(lowercaseQuery) ||
						product.company.toLowerCase().includes(lowercaseQuery),
				);

				// Filter alternative products
				const filteredAlternativeProducts = section.alternativeProducts.filter(
					(product) =>
						product.name.toLowerCase().includes(lowercaseQuery) ||
						product.company.toLowerCase().includes(lowercaseQuery),
				);

				// Create a new section with filtered products
				return {
					category: section.category,
					boycottProducts: filteredBoycottProducts,
					alternativeProducts: filteredAlternativeProducts,
				};
			});

			// Only keep sections that have at least one product in either category
			sections = sections.filter(
				(section) =>
					section.boycottProducts.length > 0 ||
					section.alternativeProducts.length > 0,
			);
		}

		setFilteredSections(sections);
	}, [searchQuery, category]);

	// Check if we have any products to display
	const hasProducts = filteredSections.length > 0;

	return (
		<>
			<div className="container mx-auto px-4 md:px-0">
				<div className="md:flex md:items-center md:justify-between md:gap-4">
					<div className="w-full">
						<SearchBar onSearch={handleSearch} />
					</div>
				</div>

				{/* Search Status and Filters */}
				{(searchQuery || category) && (
					<div className="mt-4 mb-6 flex items-center justify-between">
						<div>
							<p className="text-sm">
								{searchQuery ? (
									<span>
										Results for "<strong>{searchQuery}</strong>"
										{category && (
											<span>
												{" "}
												in <strong className="capitalize">{category}</strong>
											</span>
										)}
									</span>
								) : category ? (
									<span>
										Showing <strong className="capitalize">{category}</strong>
									</span>
								) : null}
							</p>
						</div>
						<Button
							variant="outline"
							size="sm"
							onClick={clearFilters}
							className="text-xs"
						>
							Clear filters
						</Button>
					</div>
				)}

				<div className="mt-4 mb-6 space-y-16">
					{hasProducts ? (
						<>
							{/* Display filtered sections */}
							{filteredSections.map((section) => (
								<div
									key={section.category}
									id={section.category}
									className="scroll-mt-20"
								>
									<div className="grid grid-cols-1 gap-6">
										<CategorySection
											category={section.category}
											boycottProducts={section.boycottProducts}
											alternativeProducts={section.alternativeProducts}
										/>
									</div>
								</div>
							))}
						</>
					) : (
						<div className="flex flex-col items-center justify-center py-16 text-center">
							<p className="mb-2 font-medium text-xl">No products found</p>
							<p className="text-muted-foreground">
								Try searching for a different product name or category.
							</p>
							<Button variant="outline" className="mt-4" onClick={clearFilters}>
								Clear filters
							</Button>
						</div>
					)}
				</div>
			</div>
		</>
	);
}

// Main component with Suspense boundary
export default function Products() {
	return (
		<section
			id="products"
			className="relative bg-gradient-to-b from-background to-[#E4312b]/5 py-6 md:py-12"
		>
			<Suspense fallback={<div>Loading products...</div>}>
				<ProductsContent />
			</Suspense>
		</section>
	);
}
