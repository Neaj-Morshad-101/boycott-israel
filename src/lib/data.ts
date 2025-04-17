import { Apple, Cpu, Package, Shirt, ShoppingBag } from "lucide-react";
import { CATEGORIZED_PRODUCT_PAIRS } from "./products";

// Get actual categories from the product data
const actualCategories = Object.keys(CATEGORIZED_PRODUCT_PAIRS);

// Map category IDs to more user-friendly identifiers
const categoryMappings: Record<string, { id: string; icon: typeof Cpu }> = {
	"Technology and Computers": { id: "tech", icon: Cpu },
	"Food and Beverages": { id: "food", icon: Apple },
	Clothing: { id: "fashion", icon: Shirt },
	"Online Services and Platforms": { id: "tech", icon: Cpu },
	Banking: { id: "finance", icon: Package },
	"Pharmaceutical and medicin": { id: "health", icon: Package },
	Cybersecurity: { id: "tech", icon: Cpu },
	"App & game studios": { id: "tech", icon: Cpu },
	Others: { id: "other", icon: Package },
};

// Create the categories array
export const CATEGORIES = [
	{ id: "", name: "All Categories", count: 0, icon: ShoppingBag },
	...actualCategories.map((category) => ({
		id: category,
		name: category,
		count: (
			CATEGORIZED_PRODUCT_PAIRS[
				category as keyof typeof CATEGORIZED_PRODUCT_PAIRS
			] || []
		).length,
		icon: categoryMappings[category]?.icon || Package,
	})),
] as const;

export interface IProduct {
	id: string;
	name: string;
	company: string;
	imageUrl: string;
}

export interface IProductSection {
	category: string;
	boycottProducts: IProduct[];
	alternativeProducts: IProduct[];
}

// Convert existing product pairs to the new format
export const PRODUCT_SECTIONS: IProductSection[] = Object.entries(
	CATEGORIZED_PRODUCT_PAIRS,
).map(([category, pairs]) => {
	return {
		category,
		boycottProducts: pairs.map((pair) => pair.boycottProduct),
		alternativeProducts: pairs.map((pair) => pair.alternativeProduct),
	};
});
