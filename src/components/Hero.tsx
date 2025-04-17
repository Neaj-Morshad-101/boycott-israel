import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

export default function Hero() {
	return (
		<section className="relative overflow-hidden bg-gradient-to-b from-background to-[#009736]/10 py-20 md:py-28">
			<div className="absolute inset-0 z-0 bg-grid-pattern opacity-5" />
			{/* Palestinian flag colors: green, white, black, red */}
			<div className="-left-40 absolute top-20 z-0 h-80 w-80 rounded-full bg-[#009736]/20 blur-3xl" />
			<div className="-right-40 absolute bottom-20 z-0 h-80 w-80 rounded-full bg-[#E4312b]/20 blur-3xl" />
			<div className="absolute top-40 right-20 z-0 h-60 w-60 rounded-full bg-[#000000]/10 blur-3xl" />

			<div className="container relative z-10 mx-auto px-4">
				<div className="mx-auto max-w-3xl text-center">
					<div className="mb-6 inline-block rounded-full border px-3 py-1 font-medium text-sm">
						Stand With Palestine
					</div>
					<h1 className="mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text font-bold text-4xl text-transparent tracking-tight md:text-6xl">
						Your Purchases <span className="text-[#E4312b]">Matter</span>
					</h1>
					<p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
						Support Palestinian human rights by making conscious consumer
						choices. Discover which products fund occupation and find ethical
						alternatives.
					</p>
					<div className="flex flex-col justify-center gap-3 sm:flex-row">
						<a href="#products">
							<Button className="h-12 px-8">Find Alternatives</Button>
						</a>
						<Link href="/why-boycott">
							<Button variant="outline" className="h-12 px-8">
								Learn More
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
