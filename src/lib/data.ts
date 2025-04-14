import { Apple, Cpu, Home, Package, Shirt, ShoppingBag } from "lucide-react";
import { CATEGORIZED_PRODUCT_PAIRS } from "./products";

export const CATEGORIES = [
	{ id: "", name: "All Categories", count: 0, icon: ShoppingBag },
	{ id: "food", name: "Food & Beverages", count: 43, icon: Apple },
	{
		id: "cosmetics",
		name: "Cosmetics & Personal Care",
		count: 28,
		icon: Package,
	},
	{ id: "tech", name: "Technology & Electronics", count: 35, icon: Cpu },
	{ id: "fashion", name: "Fashion & Clothing", count: 22, icon: Shirt },
	{ id: "household", name: "Household Products", count: 19, icon: Home },
	{ id: "other", name: "Other Products", count: 15, icon: Package },
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
