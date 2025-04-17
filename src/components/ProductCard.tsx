"use client";

import Image from "next/image";
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
						isBoycott ? "bg-red-50" : "bg-green-50",
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
						"absolute top-2 z-10 font-medium text-xs",
						isBoycott ? "left-2 bg-destructive" : "right-2 bg-green-500",
					)}
				>
					{isBoycott ? "Boycott" : "Use"}
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
