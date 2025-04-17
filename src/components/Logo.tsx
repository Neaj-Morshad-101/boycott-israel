import { BanIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { cn } from "~/lib/utils";

export default function Logo({ className }: { className?: string }) {
	return (
		<div className={cn("flex items-center gap-2", className)}>
			<Link href="/" className="flex items-center gap-2">
				<div className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-primary bg-background">
					<div className="absolute inset-0 flex items-center justify-center">
						<span className="font-bold text-destructive text-xl">
							<BanIcon />
						</span>
					</div>
				</div>
				<div className="flex flex-col">
					<span className="font-bold text-lg leading-tight">
						Boycott Israel
					</span>
					<span className="text-muted-foreground text-xs leading-tight">
						from Bangladesh
					</span>
				</div>
			</Link>
		</div>
	);
}
