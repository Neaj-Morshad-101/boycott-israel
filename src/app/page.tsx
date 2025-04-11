"use client";

import { Suspense } from "react";
import Hero from "~/components/Hero";
import PopularProducts from "~/components/PopularProducts";

// Separate component that will use client-side features
const DynamicProducts = dynamic(() => import("~/components/Products"), {
	ssr: false,
	loading: () => <ProductsLoadingFallback />,
});

// Loading fallback for Products section
function ProductsLoadingFallback() {
	return (
		<section className="relative bg-gradient-to-b from-background to-[#E4312b]/5 py-16 md:py-24">
			<div className="container mx-auto px-4">
				<div className="mb-8 flex items-center justify-between md:mb-12">
					<div>
						<div className="mb-2 h-4 w-24 animate-pulse rounded-md bg-muted" />
						<div className="h-8 w-48 animate-pulse rounded-md bg-muted" />
					</div>
				</div>
				<div className="grid grid-cols-1 gap-8 md:grid-cols-[240px_1fr]">
					<div className="hidden h-64 animate-pulse rounded-lg bg-muted md:block" />
					<div className="space-y-16">
						<div>
							<div className="mb-8 flex items-center gap-3">
								<div className="h-6 w-32 animate-pulse rounded-md bg-muted" />
							</div>
							<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 xl:grid-cols-3">
								{[...Array(6)].map((_, i) => (
									<div
										key={i}
										className="h-64 animate-pulse rounded-lg bg-muted"
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

// Add the missing import
import dynamic from "next/dynamic";

export default function HomePage() {
	return (
		<div className="flex min-h-screen flex-col">
			<Hero />
			<PopularProducts />
			<Suspense fallback={<ProductsLoadingFallback />}>
				<DynamicProducts />
			</Suspense>
		</div>
	);
}
