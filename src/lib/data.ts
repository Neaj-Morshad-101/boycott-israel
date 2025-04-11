export const CATEGORIES = [
	{ id: "", name: "All Categories", count: 0 },
	{ id: "food", name: "Food & Beverages", count: 43 },
	{ id: "cosmetics", name: "Cosmetics & Personal Care", count: 28 },
	{ id: "tech", name: "Technology & Electronics", count: 35 },
	{ id: "fashion", name: "Fashion & Clothing", count: 22 },
	{ id: "household", name: "Household Products", count: 19 },
	{ id: "other", name: "Other Products", count: 15 },
];

export const POPULAR_PRODUCT_PAIRS = [
	{
		boycottProduct: {
			id: "sabra-hummus",
			name: "Sabra Hummus",
			company: "Strauss Group (Israel)",
			imageUrl:
				"https://images.unsplash.com/photo-1590574379445-a7833312fb13?ixlib=rb-4.0.3&q=80&w=300&auto=format&fit=crop",
			category: "food",
		},
		alternativeProduct: {
			id: "cedar-hummus",
			name: "Cedar's Hummus",
			company: "Cedar's Mediterranean Foods",
			imageUrl:
				"https://images.unsplash.com/photo-1577805947697-89e18249d767?ixlib=rb-4.0.3&q=80&w=300&auto=format&fit=crop",
			category: "food",
		},
	},
	{
		boycottProduct: {
			id: "sodastream",
			name: "SodaStream",
			company: "SodaStream (Israel)",
			imageUrl:
				"https://images.unsplash.com/photo-1625126590252-dd7887932b4a?ixlib=rb-4.0.3&q=80&w=300&auto=format&fit=crop",
			category: "household",
		},
		alternativeProduct: {
			id: "drinkmate",
			name: "Drinkmate",
			company: "Drinkmate",
			imageUrl:
				"https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?ixlib=rb-4.0.3&q=80&w=300&auto=format&fit=crop",
			category: "household",
		},
	},
	{
		boycottProduct: {
			id: "ahava",
			name: "Ahava Dead Sea Products",
			company: "Ahava (Israel)",
			imageUrl:
				"https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-4.0.3&q=80&w=300&auto=format&fit=crop",
			category: "cosmetics",
		},
		alternativeProduct: {
			id: "lush-skincare",
			name: "Lush Skincare",
			company: "Lush Cosmetics",
			imageUrl:
				"https://images.unsplash.com/photo-1608247712652-a2fda5931e0b?ixlib=rb-4.0.3&q=80&w=300&auto=format&fit=crop",
			category: "cosmetics",
		},
	},
	{
		boycottProduct: {
			id: "prigat-juice",
			name: "Prigat Juice",
			company: "Prigat (Israel)",
			imageUrl:
				"https://images.unsplash.com/photo-1595614007536-6e6a4d5a0db3?ixlib=rb-4.0.3&q=80&w=300&auto=format&fit=crop",
			category: "food",
		},
		alternativeProduct: {
			id: "simply-juice",
			name: "Simply Juice",
			company: "Coca-Cola",
			imageUrl:
				"https://images.unsplash.com/photo-1599360889420-da1afaba9edc?ixlib=rb-4.0.3&q=80&w=300&auto=format&fit=crop",
			category: "food",
		},
	},
];

export const CATEGORIZED_PRODUCT_PAIRS = {
	food: [
		{
			boycottProduct: {
				id: "prigat-juice",
				name: "Prigat Juice",
				company: "Prigat (Israel)",
				imageUrl:
					"https://images.unsplash.com/photo-1595614007536-6e6a4d5a0db3?ixlib=rb-4.0.3&q=80&w=300&auto=format&fit=crop",
				category: "food",
			},
			alternativeProduct: {
				id: "simply-juice",
				name: "Simply Juice",
				company: "Coca-Cola",
				imageUrl:
					"https://images.unsplash.com/photo-1599360889420-da1afaba9edc?ixlib=rb-4.0.3&q=80&w=300&auto=format&fit=crop",
				category: "food",
			},
		},
		{
			boycottProduct: {
				id: "sabra-hummus",
				name: "Sabra Hummus",
				company: "Strauss Group (Israel)",
				imageUrl:
					"https://images.unsplash.com/photo-1590574379445-a7833312fb13?ixlib=rb-4.0.3&q=80&w=300&auto=format&fit=crop",
				category: "food",
			},
			alternativeProduct: {
				id: "cedar-hummus",
				name: "Cedar's Hummus",
				company: "Cedar's Mediterranean Foods",
				imageUrl:
					"https://images.unsplash.com/photo-1577805947697-89e18249d767?ixlib=rb-4.0.3&q=80&w=300&auto=format&fit=crop",
				category: "food",
			},
		},
		{
			boycottProduct: {
				id: "elite-chocolate",
				name: "Elite Chocolate",
				company: "Strauss Group (Israel)",
				imageUrl:
					"https://images.unsplash.com/photo-1549007994-cb92caebd54b?ixlib=rb-4.0.3&q=80&w=300&auto=format&fit=crop",
				category: "food",
			},
			alternativeProduct: {
				id: "lindt-chocolate",
				name: "Lindt Excellence",
				company: "Lindt & Sprüngli",
				imageUrl:
					"https://images.unsplash.com/photo-1614088685112-0a760b71a3c8?ixlib=rb-4.0.3&q=80&w=300&auto=format&fit=crop",
				category: "food",
			},
		},
	],
	cosmetics: [
		{
			boycottProduct: {
				id: "ahava",
				name: "Ahava Dead Sea Products",
				company: "Ahava (Israel)",
				imageUrl:
					"https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-4.0.3&q=80&w=300&auto=format&fit=crop",
				category: "cosmetics",
			},
			alternativeProduct: {
				id: "lush-skincare",
				name: "Lush Skincare",
				company: "Lush Cosmetics",
				imageUrl:
					"https://images.unsplash.com/photo-1608247712652-a2fda5931e0b?ixlib=rb-4.0.3&q=80&w=300&auto=format&fit=crop",
				category: "cosmetics",
			},
		},
		{
			boycottProduct: {
				id: "sabon",
				name: "Sabon Body Scrub",
				company: "Sabon (Israel)",
				imageUrl:
					"https://images.unsplash.com/photo-1616683693504-d5a44269aa6e?ixlib=rb-4.0.3&q=80&w=300&auto=format&fit=crop",
				category: "cosmetics",
			},
			alternativeProduct: {
				id: "bodyshop-scrub",
				name: "The Body Shop Scrub",
				company: "The Body Shop",
				imageUrl:
					"https://images.unsplash.com/photo-1571781565036-d3f759be73e4?ixlib=rb-4.0.3&q=80&w=300&auto=format&fit=crop",
				category: "cosmetics",
			},
		},
	],
	household: [
		{
			boycottProduct: {
				id: "sodastream",
				name: "SodaStream",
				company: "SodaStream (Israel)",
				imageUrl:
					"https://images.unsplash.com/photo-1625126590252-dd7887932b4a?ixlib=rb-4.0.3&q=80&w=300&auto=format&fit=crop",
				category: "household",
			},
			alternativeProduct: {
				id: "drinkmate",
				name: "Drinkmate",
				company: "Drinkmate",
				imageUrl:
					"https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?ixlib=rb-4.0.3&q=80&w=300&auto=format&fit=crop",
				category: "household",
			},
		},
	],
	tech: [
		{
			boycottProduct: {
				id: "wix",
				name: "Wix Website Builder",
				company: "Wix (Israel)",
				imageUrl:
					"https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&q=80&w=300&auto=format&fit=crop",
				category: "tech",
			},
			alternativeProduct: {
				id: "wordpress",
				name: "WordPress",
				company: "Automattic",
				imageUrl:
					"https://images.unsplash.com/photo-1616469829581-73993eb56f2b?ixlib=rb-4.0.3&q=80&w=300&auto=format&fit=crop",
				category: "tech",
			},
		},
		{
			boycottProduct: {
				id: "checkpoint",
				name: "Check Point Firewall",
				company: "Check Point (Israel)",
				imageUrl:
					"https://images.unsplash.com/photo-1569012871812-f38ee64cd54b?ixlib=rb-4.0.3&q=80&w=300&auto=format&fit=crop",
				category: "tech",
			},
			alternativeProduct: {
				id: "fortinet",
				name: "Fortinet Security",
				company: "Fortinet",
				imageUrl:
					"https://images.unsplash.com/photo-1614064642771-dc49965d966d?ixlib=rb-4.0.3&q=80&w=300&auto=format&fit=crop",
				category: "tech",
			},
		},
	],
};

// Mock search results data
export const PRODUCT_PAIRS = [
	{
		boycottProduct: {
			id: "sabra-hummus",
			name: "Sabra Hummus",
			company: "Strauss Group (Israel)",
			imageUrl:
				"https://images.unsplash.com/photo-1590574379445-a7833312fb13?ixlib=rb-4.0.3&q=80&w=300&auto=format&fit=crop",
			category: "food",
		},
		alternativeProduct: {
			id: "cedar-hummus",
			name: "Cedar's Hummus",
			company: "Cedar's Mediterranean Foods",
			imageUrl:
				"https://images.unsplash.com/photo-1577805947697-89e18249d767?ixlib=rb-4.0.3&q=80&w=300&auto=format&fit=crop",
			category: "food",
		},
	},
	{
		boycottProduct: {
			id: "sodastream",
			name: "SodaStream",
			company: "SodaStream (Israel)",
			imageUrl:
				"https://images.unsplash.com/photo-1625126590252-dd7887932b4a?ixlib=rb-4.0.3&q=80&w=300&auto=format&fit=crop",
			category: "household",
		},
		alternativeProduct: {
			id: "drinkmate",
			name: "Drinkmate",
			company: "Drinkmate",
			imageUrl:
				"https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?ixlib=rb-4.0.3&q=80&w=300&auto=format&fit=crop",
			category: "household",
		},
	},
	{
		boycottProduct: {
			id: "ahava",
			name: "Ahava Dead Sea Products",
			company: "Ahava (Israel)",
			imageUrl:
				"https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-4.0.3&q=80&w=300&auto=format&fit=crop",
			category: "cosmetics",
		},
		alternativeProduct: {
			id: "lush-skincare",
			name: "Lush Skincare",
			company: "Lush Cosmetics",
			imageUrl:
				"https://images.unsplash.com/photo-1608247712652-a2fda5931e0b?ixlib=rb-4.0.3&q=80&w=300&auto=format&fit=crop",
			category: "cosmetics",
		},
	},
	{
		boycottProduct: {
			id: "prigat-juice",
			name: "Prigat Juice",
			company: "Prigat (Israel)",
			imageUrl:
				"https://images.unsplash.com/photo-1595614007536-6e6a4d5a0db3?ixlib=rb-4.0.3&q=80&w=300&auto=format&fit=crop",
			category: "food",
		},
		alternativeProduct: {
			id: "simply-juice",
			name: "Simply Juice",
			company: "Coca-Cola",
			imageUrl:
				"https://images.unsplash.com/photo-1599360889420-da1afaba9edc?ixlib=rb-4.0.3&q=80&w=300&auto=format&fit=crop",
			category: "food",
		},
	},
	{
		boycottProduct: {
			id: "elite-chocolate",
			name: "Elite Chocolate",
			company: "Strauss Group (Israel)",
			imageUrl:
				"https://images.unsplash.com/photo-1549007994-cb92caebd54b?ixlib=rb-4.0.3&q=80&w=300&auto=format&fit=crop",
			category: "food",
		},
		alternativeProduct: {
			id: "lindt-chocolate",
			name: "Lindt Excellence",
			company: "Lindt & Sprüngli",
			imageUrl:
				"https://images.unsplash.com/photo-1614088685112-0a760b71a3c8?ixlib=rb-4.0.3&q=80&w=300&auto=format&fit=crop",
			category: "food",
		},
	},
	{
		boycottProduct: {
			id: "sabon",
			name: "Sabon Body Scrub",
			company: "Sabon (Israel)",
			imageUrl:
				"https://images.unsplash.com/photo-1616683693504-d5a44269aa6e?ixlib=rb-4.0.3&q=80&w=300&auto=format&fit=crop",
			category: "cosmetics",
		},
		alternativeProduct: {
			id: "bodyshop-scrub",
			name: "The Body Shop Scrub",
			company: "The Body Shop",
			imageUrl:
				"https://images.unsplash.com/photo-1571781565036-d3f759be73e4?ixlib=rb-4.0.3&q=80&w=300&auto=format&fit=crop",
			category: "cosmetics",
		},
	},
	{
		boycottProduct: {
			id: "wix",
			name: "Wix Website Builder",
			company: "Wix (Israel)",
			imageUrl:
				"https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&q=80&w=300&auto=format&fit=crop",
			category: "tech",
		},
		alternativeProduct: {
			id: "wordpress",
			name: "WordPress",
			company: "Automattic",
			imageUrl:
				"https://images.unsplash.com/photo-1616469829581-73993eb56f2b?ixlib=rb-4.0.3&q=80&w=300&auto=format&fit=crop",
			category: "tech",
		},
	},
	{
		boycottProduct: {
			id: "checkpoint",
			name: "Check Point Firewall",
			company: "Check Point (Israel)",
			imageUrl:
				"https://images.unsplash.com/photo-1569012871812-f38ee64cd54b?ixlib=rb-4.0.3&q=80&w=300&auto=format&fit=crop",
			category: "tech",
		},
		alternativeProduct: {
			id: "fortinet",
			name: "Fortinet Security",
			company: "Fortinet",
			imageUrl:
				"https://images.unsplash.com/photo-1614064642771-dc49965d966d?ixlib=rb-4.0.3&q=80&w=300&auto=format&fit=crop",
			category: "tech",
		},
	},
];
