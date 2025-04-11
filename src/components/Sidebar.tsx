"use client";

import { ListFilter, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { useQueryState } from "nuqs";
import type * as React from "react";
import {
	Sidebar as ShadcnSidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarProvider,
	SidebarTrigger,
} from "~/components/ui/sidebar";
import { CATEGORIES } from "~/lib/data";
import { cn } from "~/lib/utils";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
	className?: string;
	mobile?: boolean;
}

export function Sidebar({ className, mobile = false, ...props }: SidebarProps) {
	const [category, setCategory] = useQueryState("category");

	const handleCategoryClick = (categoryId: string) => async () => {
		await setCategory(categoryId === category ? null : categoryId);
	};

	const sidebarContent = (
		<SidebarContent>
			<SidebarGroup>
				<SidebarGroupLabel>
					<ListFilter className="mr-2" />
					Categories
				</SidebarGroupLabel>
				<SidebarGroupContent>
					<SidebarMenu>
						{CATEGORIES.map((cat) => (
							<SidebarMenuItem key={cat.id}>
								<SidebarMenuButton
									onClick={handleCategoryClick(cat.id)}
									isActive={category === cat.id}
									className="justify-between"
								>
									<span>{cat.name}</span>
									<span className="ml-auto text-muted-foreground text-xs">
										{cat.count}
									</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
						))}
					</SidebarMenu>
				</SidebarGroupContent>
			</SidebarGroup>
		</SidebarContent>
	);

	if (mobile) {
		return sidebarContent;
	}

	return (
		<div className={cn("h-full w-full", className)} {...props}>
			{sidebarContent}
		</div>
	);
}

export function SidebarWithProvider({
	children,
	defaultOpen = true,
	className,
	...props
}: React.PropsWithChildren<{ defaultOpen?: boolean; className?: string }>) {
	return (
		<SidebarProvider defaultOpen={defaultOpen}>
			<ShadcnSidebar className={className} {...props}>
				<SidebarHeader />
				{children}
			</ShadcnSidebar>
		</SidebarProvider>
	);
}

interface MobileSidebarProps extends SidebarProps {
	isOpen: boolean;
	onClose: () => void;
}

export function MobileSidebar({
	isOpen,
	onClose,
	...props
}: MobileSidebarProps) {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 top-16 z-50 flex md:hidden">
			<div
				className="fixed inset-0 bg-background/80 backdrop-blur-sm"
				onClick={onClose}
			/>
			<div className="fixed top-0 bottom-0 left-0 z-40 h-full w-3/4 max-w-xs bg-background p-4 shadow-lg">
				<Sidebar {...props} mobile />
			</div>
		</div>
	);
}

interface SidebarItemProps extends React.HTMLAttributes<HTMLAnchorElement> {
	href: string;
	icon?: LucideIcon;
	children: React.ReactNode;
}

export function SidebarItem({
	href,
	icon: Icon,
	children,
	className,
	...props
}: SidebarItemProps) {
	return (
		<Link
			href={href}
			className={cn(
				"flex items-center rounded-md p-2 font-medium text-sm hover:bg-accent hover:text-accent-foreground",
				className,
			)}
			{...props}
		>
			{Icon && <Icon className="mr-2 h-4 w-4" />}
			{children}
		</Link>
	);
}

export { SidebarTrigger };
