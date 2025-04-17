"use client";

import Image from "next/image";
import { cn } from "~/lib/utils";

interface ProductCardProps {
	name: string;
	company: string;
	imageUrl: string;
	isBoycott?: boolean;
}
export function ProductCard({
	name,
	company,
	imageUrl,
	isBoycott = false,
}: ProductCardProps) {
	return (
		<div
			className={cn(
				"card-glow group flex h-full flex-col overflow-hidden rounded-t-xl border bg-card transition-all",
				isBoycott ? "border-destructive/10" : "border-green-500/10",
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
						"-rotate-45 absolute top-4 z-10 font-bold text-xs ",
						isBoycott ? "text-destructive" : "text-green-600",
					)}
				>
					{isBoycott ? "Boycott" : "Use"}
				</div>
			</div>
			<div
				className={cn(
					"flex flex-grow flex-col px-4 py-2 leading-none tracking-tight",
					isBoycott ? "bg-destructive/10" : "bg-green-600/10",
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
