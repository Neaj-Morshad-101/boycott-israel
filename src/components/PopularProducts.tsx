import { POPULAR_PRODUCT_PAIRS } from "~/lib/data";
import { ProductPair } from "./ProductCard";
import { Button } from "./ui/button";

export default function PopularProducts() {
	return (
		<section className="relative py-16 md:py-24">
			<div className="absolute inset-0 z-0 bg-[url('/palestine-pattern.svg')] opacity-[0.02]" />
			<div className="container relative z-10 mx-auto px-4 md:px-0">
				<div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
					<div>
						<h2 className="mb-2 text-[#009736] text-xs uppercase tracking-widest">
							Support Justice
						</h2>
						<h3 className="font-bold text-3xl">Make Ethical Choices</h3>
					</div>
					{/* <Button variant="ghost" className="self-start md:self-auto">
						View All <span className="ml-2">→</span>
					</Button> */}
				</div>
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
					{POPULAR_PRODUCT_PAIRS.map((pair, index) => (
						<div
							key={pair.boycottProduct.id}
							className="group transition-all duration-300 hover:translate-y-[-4px]"
						>
							<ProductPair
								boycottProduct={pair.boycottProduct}
								alternativeProduct={pair.alternativeProduct}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
