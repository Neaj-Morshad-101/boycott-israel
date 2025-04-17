import type { IProductSection } from "~/lib/data";
import { ProductCard } from "./ProductCard";

interface ProductSectionProps extends IProductSection {}

export function CategorySection({
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
			<div className="grid grid-cols-4 gap-1 md:grid-cols-8 md:gap-4">
				{/* Boycott Products - 2 cols on mobile, 4 cols on desktop */}
				<div className="col-span-2 grid grid-cols-2 gap-0.5 md:col-span-4 md:grid-cols-4 md:gap-2">
					{boycottProducts.map((product, idx) => (
						<ProductCard
							key={product.id}
							name={product.name}
							company={product.company}
							imageUrl={product.imageUrl}
							isBoycott={true}
						/>
					))}
				</div>

				{/* Alternative Products - 2 cols on mobile, 4 cols on desktop */}
				<div className="col-span-2 grid grid-cols-2 gap-0.5 md:col-span-4 md:grid-cols-4 md:gap-2">
					{alternativeProducts.map((product) => (
						<ProductCard
							key={product.id}
							name={product.name}
							company={product.company}
							imageUrl={product.imageUrl}
							isBoycott={false}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
