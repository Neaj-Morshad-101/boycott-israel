"use client";

import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

export default function ContributePage() {
	const [formStatus, setFormStatus] = useState<
		"idle" | "submitting" | "success" | "error"
	>("idle");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setFormStatus("submitting");

		// Simulate form submission
		setTimeout(() => {
			setFormStatus("success");
		}, 1500);
	};

	return (
		<div className="flex min-h-screen flex-col">
			<section className="bg-muted py-12 md:py-16">
				<div className="container mx-auto">
					<div className="mx-auto max-w-3xl">
						<h1 className="mb-6 font-bold text-3xl md:text-4xl">Contribute</h1>
						<p className="text-lg text-muted-foreground">
							Help us build a comprehensive database of products to boycott and
							ethical alternatives.
						</p>
					</div>
				</div>
			</section>

			<section className="py-12" id="submit-product">
				<div className="container mx-auto">
					<div className="mx-auto max-w-3xl">
						<h2 className="mb-6 font-semibold text-2xl">Submit a Product</h2>

						{formStatus === "success" ? (
							<div className="rounded-lg border border-green-200 bg-green-50 p-6 text-green-700">
								<h3 className="mb-2 font-medium text-lg">
									Thank you for your contribution!
								</h3>
								<p className="mb-4">
									Our team will review your submission and add it to our
									database if it meets our verification criteria.
								</p>
								<Button onClick={() => setFormStatus("idle")}>
									Submit Another Product
								</Button>
							</div>
						) : (
							<form onSubmit={handleSubmit} className="space-y-6">
								<div className="space-y-4">
									<h3 className="font-medium">Product to Boycott</h3>
									<div>
										<label
											htmlFor="boycott-name"
											className="mb-1 block font-medium text-sm"
										>
											Product Name *
										</label>
										<Input
											id="boycott-name"
											required
											placeholder="e.g., Sabra Hummus"
										/>
									</div>

									<div>
										<label
											htmlFor="boycott-company"
											className="mb-1 block font-medium text-sm"
										>
											Company Name *
										</label>
										<Input
											id="boycott-company"
											required
											placeholder="e.g., Strauss Group"
										/>
									</div>

									<div>
										<label
											htmlFor="boycott-reason"
											className="mb-1 block font-medium text-sm"
										>
											Reason for Boycott *
										</label>
										<textarea
											id="boycott-reason"
											required
											className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
											placeholder="Explain why this product should be boycotted. Include evidence of Israeli ties if possible."
										/>
									</div>
								</div>

								<div className="space-y-4">
									<h3 className="font-medium">Alternative Product</h3>
									<div>
										<label
											htmlFor="alt-name"
											className="mb-1 block font-medium text-sm"
										>
											Product Name *
										</label>
										<Input
											id="alt-name"
											required
											placeholder="e.g., Cedar's Hommus"
										/>
									</div>

									<div>
										<label
											htmlFor="alt-company"
											className="mb-1 block font-medium text-sm"
										>
											Company Name *
										</label>
										<Input
											id="alt-company"
											required
											placeholder="e.g., Cedar's Mediterranean Foods"
										/>
									</div>

									<div>
										<label
											htmlFor="alt-reason"
											className="mb-1 block font-medium text-sm"
										>
											Why is this a good alternative? *
										</label>
										<textarea
											id="alt-reason"
											required
											className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
											placeholder="Explain why this is a good alternative. Include information about the company's ethics if relevant."
										/>
									</div>
								</div>

								<div>
									<label
										htmlFor="submitter-email"
										className="mb-1 block font-medium text-sm"
									>
										Your Email (optional)
									</label>
									<Input
										id="submitter-email"
										type="email"
										placeholder="We'll only contact you if we need more information"
									/>
									<p className="mt-1 text-muted-foreground text-xs">
										We'll never share your email with anyone else.
									</p>
								</div>

								<Button
									type="submit"
									className="w-full"
									disabled={formStatus === "submitting"}
								>
									{formStatus === "submitting"
										? "Submitting..."
										: "Submit Product"}
								</Button>
							</form>
						)}
					</div>
				</div>
			</section>

			<section className="bg-muted/50 py-12" id="verification">
				<div className="container mx-auto">
					<div className="mx-auto max-w-3xl">
						<h2 className="mb-6 font-semibold text-2xl">
							Verification Process
						</h2>

						<div className="space-y-6">
							<p>
								All submitted products go through a careful verification process
								before being added to our database. Here's how we ensure the
								accuracy of our information:
							</p>

							<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
								<div className="rounded-lg bg-card p-4">
									<div className="mb-2 font-medium">1. Initial Review</div>
									<p className="text-muted-foreground text-sm">
										Our team reviews submissions for completeness and basic
										plausibility.
									</p>
								</div>

								<div className="rounded-lg bg-card p-4">
									<div className="mb-2 font-medium">
										2. Research & Verification
									</div>
									<p className="text-muted-foreground text-sm">
										We research company ownership, supply chains, and political
										connections.
									</p>
								</div>

								<div className="rounded-lg bg-card p-4">
									<div className="mb-2 font-medium">3. Publication</div>
									<p className="text-muted-foreground text-sm">
										Verified products are added to our database with supporting
										information.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="py-12" id="contact">
				<div className="container mx-auto">
					<div className="mx-auto max-w-3xl">
						<h2 className="mb-6 font-semibold text-2xl">Contact Us</h2>

						<div className="rounded-lg bg-card p-6">
							<p className="mb-4">
								Have questions about the boycott movement or how to contribute
								to our project? Get in touch with our team:
							</p>

							<ul className="space-y-2">
								<li className="flex items-center">
									<span className="mr-2 font-medium">Email:</span>
									<a
										href="mailto:contact@boycottisrael.org"
										className="text-primary hover:underline"
									>
										contact@boycottisrael.org
									</a>
								</li>
								<li className="flex items-center">
									<span className="mr-2 font-medium">Twitter:</span>
									<a
										href="https://twitter.com/boycottisrael"
										className="text-primary hover:underline"
										target="_blank"
										rel="noopener noreferrer"
									>
										@boycottisrael
									</a>
								</li>
								<li className="flex items-center">
									<span className="mr-2 font-medium">Instagram:</span>
									<a
										href="https://instagram.com/boycottisrael"
										className="text-primary hover:underline"
										target="_blank"
										rel="noopener noreferrer"
									>
										@boycottisrael
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
