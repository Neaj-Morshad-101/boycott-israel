"use client";

import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import { cn } from "~/lib/utils";

interface ProductCardProps {
	name: string;
	company: string;
	imageUrl: string;
	category: string;
	isBoycott: boolean;
	alternativeId?: string;
}
export function ProductCard({
	name,
	company,
	imageUrl,
	category,
	isBoycott,
	alternativeId,
}: ProductCardProps) {
	return (
		<div
			className={cn(
				"card-glow group flex h-full flex-col overflow-hidden rounded-xl border bg-card transition-all",
				isBoycott ? "border-destructive/20" : "border-green-500/20",
			)}
		>
			<div className="relative aspect-square w-full overflow-hidden">
				<Image
					src={imageUrl}
					alt={name}
					fill
					className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
					sizes="(max-width: 768px) 50vw, 33vw"
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
					isBoycott ? "text-destructive" : "text-green-600",
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

interface ProductPairProps {
	boycottProduct: {
		id: string;
		name: string;
		company: string;
		imageUrl: string;
		category: string;
	};
	alternativeProduct: {
		id: string;
		name: string;
		company: string;
		imageUrl: string;
		category: string;
	};
}

export function ProductPair({
	boycottProduct,
	alternativeProduct,
}: ProductPairProps) {
	return (
		<div className="flex flex-col overflow-hidden rounded-xl border border-border/40 bg-card shadow-sm transition-all duration-300 hover:shadow-md">
			<div className="grid grid-cols-2 gap-0">
				<ProductCard
					name={boycottProduct.name}
					company={boycottProduct.company}
					imageUrl={boycottProduct.imageUrl}
					category={boycottProduct.category}
					isBoycott={true}
					alternativeId={alternativeProduct.id}
				/>
				<ProductCard
					name={alternativeProduct.name}
					company={alternativeProduct.company}
					imageUrl={alternativeProduct.imageUrl}
					category={alternativeProduct.category}
					isBoycott={false}
				/>
			</div>
			<div className="flex items-center justify-between bg-muted/40 p-3 text-sm">
				<div className="flex items-center text-muted-foreground text-xs">
					<span className="mr-2 capitalize">{boycottProduct.category}</span>•
					<span className="ml-2">Ethical alternative</span>
				</div>
				<div className="flex items-center font-medium text-primary text-xs">
					More details
					<ArrowRightIcon className="ml-1 h-3 w-3" />
				</div>
			</div>
		</div>
	);
}
