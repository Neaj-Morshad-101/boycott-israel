import type { IProductSection } from "~/lib/data";
import { ProductCard } from "./ProductCard";

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
				</div>
			</div>

			{/* Combined Grid with Breakpoints */}
			<div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-10">
				{/* Boycott Products - 2 cols on mobile, 4 cols on desktop */}
				<div className="col-span-2 grid grid-cols-2 md:col-span-4 md:grid-cols-4 lg:col-span-5 lg:grid-cols-5">
					{boycottProducts.map((product, idx) => (
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
				<div className="col-span-2 grid grid-cols-2 md:col-span-4 md:grid-cols-4 lg:col-span-5 lg:grid-cols-5">
					{alternativeProducts.map((product) => (
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
