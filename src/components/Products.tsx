"use client";

import { Menu } from "lucide-react";
import { useQueryState } from "nuqs";
import { useState } from "react";
import { ProductPair } from "~/components/ProductCard";
import { MobileSidebar, Sidebar } from "~/components/Sidebar";
import { Button } from "~/components/ui/button";
import { CATEGORIZED_PRODUCT_PAIRS } from "~/lib/data";

export default function Products() {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [category] = useQueryState("category");

	// Check if the current category has any products
	const hasProducts =
		!category ||
		(category &&
			category in CATEGORIZED_PRODUCT_PAIRS &&
			CATEGORIZED_PRODUCT_PAIRS[
				category as keyof typeof CATEGORIZED_PRODUCT_PAIRS
			]?.length > 0);

	return (
		<section className="relative bg-gradient-to-b from-background to-[#E4312b]/5 py-16 md:py-24">
			<div className="container mx-auto px-4 md:px-0">
				<div className="mb-8 flex items-center justify-between md:mb-12">
					<div>
						<h2 className="mb-2 text-[#E4312b] text-xs uppercase tracking-widest">
							Boycott For Change
						</h2>
						<h3 className="font-bold text-3xl">All Products</h3>
					</div>
					<div className="md:hidden">
						<Button
							variant="outline"
							size="icon"
							onClick={() => setSidebarOpen(true)}
							className="h-10 w-10 rounded-full border-[#009736]/30"
						>
							<Menu className="h-5 w-5" />
							<span className="sr-only">Toggle menu</span>
						</Button>
					</div>
				</div>

				<div className="grid grid-cols-1 gap-8 md:grid-cols-[240px_1fr]">
					<div className="sticky top-20 hidden h-fit self-start md:block">
						<div className="max-h-[calc(100vh-8rem)] overflow-y-auto overflow-x-hidden rounded-xl border border-muted shadow-sm">
							<Sidebar />
						</div>
					</div>

					<MobileSidebar
						isOpen={sidebarOpen}
						onClose={() => setSidebarOpen(false)}
					/>

					<div className="space-y-16">
						{category
							? Object.entries(CATEGORIZED_PRODUCT_PAIRS)
									.filter(([cat]) => cat === category)
									.map(([cat, pairs]) => (
										<div key={cat} id={cat} className="scroll-mt-20">
											<div className="mb-8 flex items-center gap-3">
												<div className="h-[1px] w-6 bg-[#009736]" />
												<h2 className="font-bold text-2xl capitalize">{cat}</h2>
											</div>
											{pairs.length > 0 ? (
												<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 xl:grid-cols-3">
													{pairs.map((pair, index) => (
														<div
															key={index}
															className="group transition-all duration-300 hover:translate-y-[-4px]"
														>
															<ProductPair
																key={index}
																boycottProduct={pair.boycottProduct}
																alternativeProduct={pair.alternativeProduct}
															/>
														</div>
													))}
												</div>
											) : (
												<div className="flex flex-col items-center justify-center py-16 text-center">
													<p className="mb-2 font-medium text-xl">
														No products found
													</p>
													<p className="text-muted-foreground">
														There are no products available in this category.
													</p>
												</div>
											)}
										</div>
									))
							: Object.entries(CATEGORIZED_PRODUCT_PAIRS).map(
									([cat, pairs]) => (
										<div key={cat} id={cat} className="scroll-mt-20">
											<div className="mb-8 flex items-center gap-3">
												<div className="h-[1px] w-6 bg-[#009736]" />
												<h2 className="font-bold text-2xl capitalize">{cat}</h2>
											</div>
											<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 xl:grid-cols-3">
												{pairs.map((pair, index) => (
													<div
														key={index}
														className="group transition-all duration-300 hover:translate-y-[-4px]"
													>
														<ProductPair
															key={index}
															boycottProduct={pair.boycottProduct}
															alternativeProduct={pair.alternativeProduct}
														/>
													</div>
												))}
											</div>
										</div>
									),
								)}

						{category && !hasProducts && (
							<div className="flex flex-col items-center justify-center py-16 text-center">
								<p className="mb-2 font-medium text-xl">No products found</p>
								<p className="text-muted-foreground">
									There are no products available in the "{category}" category.
								</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
