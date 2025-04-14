"use client";

import Image from "next/image";
import type { IProductSection } from "~/lib/data";
import { cn } from "~/lib/utils";

interface ProductCardProps {
	name: string;
	company: string;
	imageUrl: string;
	category: string;
	isBoycott?: boolean;
	alternativeId?: string;
}
export function ProductCard({
	name,
	company,
	imageUrl,
	category,
	isBoycott = false,
	alternativeId,
}: ProductCardProps) {
	return (
		<div
			className={cn(
				"card-glow group flex h-full flex-col overflow-hidden rounded-t-xl border bg-card transition-all",
				isBoycott ? "border-destructive/20" : "border-green-500/20",
			)}
		>
			<div className="relative aspect-square w-full overflow-hidden">
				<Image
					src={`https://boycott-israel.org/${imageUrl}`}
					alt={name}
					className={cn(
						"h-full w-full object-contain object-center transition-transform duration-500 group-hover:scale-110",
						isBoycott ? "bg-red-300" : "bg-green-300",
					)}
					fill
					priority={false}
				/>
				<div
					className={cn(
						"absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100",
					)}
				/>
				<div
					className={cn(
						"absolute top-3 z-10 rounded-full px-3 py-1 font-medium text-xs backdrop-blur-sm",
						isBoycott
							? "right-3 bg-destructive/80 text-white"
							: "left-3 bg-green-500/80 text-white",
					)}
				>
					{isBoycott ? "Boycott" : "Alternative"}
				</div>
			</div>
			<div
				className={cn(
					"flex flex-grow flex-col p-4",
					isBoycott
						? "bg-destructive/10 text-destructive"
						: "bg-green-500/10 text-green-600",
				)}
			>
				<h3 className="line-clamp-1 font-semibold" title={name}>
					{name}
				</h3>
				<p className="mt-1 line-clamp-1 text-muted-foreground text-xs">
					{company}
				</p>
			</div>
		</div>
	);
}

interface ProductSectionProps extends IProductSection {}

export function ProductSection({
	boycottProducts,
	alternativeProducts,
	category,
}: ProductSectionProps) {
	return (
		<div className="flex flex-col overflow-hidden rounded-xl border border-border/40 bg-card shadow-sm transition-all duration-300 hover:shadow-md">
			<div className="flex items-center justify-between bg-muted/10 p-4 backdrop-blur-sm">
				<div className="flex items-center gap-2 text-muted-foreground text-xs">
					<span className="rounded-md bg-primary/10 px-2 py-1 font-medium text-primary capitalize">
						{category}
					</span>
					{boycottProducts.length > 0 && (
						<span className="ml-auto text-destructive text-xs">
							{boycottProducts.length} products to boycott
						</span>
					)}
				</div>
			</div>

			{/* Combined Grid with Breakpoints */}
			<div className="grid grid-cols-4 md:grid-cols-8">
				{/* Boycott Products - 2 cols on mobile, 4 cols on desktop */}
				<div className="col-span-2 grid grid-cols-2 md:col-span-4 md:grid-cols-4">
					{boycottProducts.slice(0, 4).map((product, idx) => (
						<ProductCard
							key={product.id}
							name={product.name}
							company={product.company}
							imageUrl={product.imageUrl}
							category={category}
							isBoycott={true}
							alternativeId={alternativeProducts[idx]?.id}
						/>
					))}
				</div>

				{/* Alternative Products - 2 cols on mobile, 4 cols on desktop */}
				<div className="col-span-2 grid grid-cols-2 md:col-span-4 md:grid-cols-4">
					{alternativeProducts.slice(0, 4).map((product) => (
						<ProductCard
							key={product.id}
							name={product.name}
							company={product.company}
							imageUrl={product.imageUrl}
							category={category}
							isBoycott={false}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
