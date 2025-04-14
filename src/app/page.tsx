"use client";

import Hero from "~/components/Hero";
import Products from "~/components/Products";

export default function HomePage() {
	return (
		<div className="flex min-h-screen flex-col">
			<Hero />
			<Products />
		</div>
	);
}
