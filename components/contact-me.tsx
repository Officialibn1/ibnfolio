"use client";
import React from "react";
import SectionTitle from "./ui/section-title";
import { SparklesCore } from "./ui/particles";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	Form,
	FormField,
	FormControl,
	FormLabel,
	FormItem,
	FormDescription,
	FormMessage,
} from "@/components/ui/form";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { Textarea } from "./ui/textarea";

const schema = z.object({
	name: z.string().min(5, "Please enter your full name"),
	email: z.string().email(),
	companyName: z.string().min(5, "Please enter your companies/business name"),
	projectType: z.enum(
		[
			"E-Commerce",
			"Dropshipping Website",
			"Personal Portfolio",
			"Real-Estate Portfolio",
			"Car Agent/Agency Portfolio",
			"Visa Agent/Agency Portfolio",
			"Content Management System (CMS)",
			"Agency Website",
			"Landing Page",
			"Website (Frontend Only)",
			"Website (Full-Stack)",
			"API Integration",
			"Booking website (Airline)",
			"Booking website (Hotel & Reservations)",
			"Schorlarship Website",
			"Airline Website",
			"Computer Base Test (CBT) Web App",
			"Mobile App",
		],
		{
			required_error: "Please select your project type.",
		},
	),
	projectTimeLine: z.enum(
		[
			"As soon as possible",
			"Flexible",
			"Less than a month",
			"In 1 - 3 months",
			"In 3 - 6 months",
			"In a year",
			"More than a year",
		],
		{
			required_error: "Please select your estimated timeline.",
		},
	),
	estimatedProjectBudget: z
		.number()
		.min(50, "Your budget should be more than $70."),
	projectDetails: z
		.string()
		.min(150, "Please add more content to the projects description."),
});

const projectTypes = schema.shape.projectType.options;
const projectTimeLines = schema.shape.projectTimeLine.options;

const ContactMe = () => {
	const form = useForm<z.infer<typeof schema>>({
		resolver: zodResolver(schema),
	});

	const handleSubmit = (values: z.infer<typeof schema>) => {
		console.log(values);
	};
	return (
		<section className='relative w-full  px-5 py-20 lg:py-36  text-lg text-justify flex flex-col gap-3 items-center'>
			<div className='h-fit w-full bg-transparent relative flex flex-col items-center justify-center overflow-hidden rounded-md '>
				<div className='w-[40rem] h-40 relative'>
					{/* Gradients */}
					<div className='absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm' />
					<div className='absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4' />
					<div className='absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm' />
					<div className='absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4' />

					{/* Core component */}
					<SparklesCore
						background='transparent'
						minSize={0.4}
						maxSize={1}
						particleDensity={1200}
						className='w-full h-full'
						particleColor='#FFFFFF'
					/>

					{/* Radial Gradient to prevent sharp edges */}
					<div className='absolute inset-0 w-full h-full bg-foreground [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]'></div>
				</div>

				<SectionTitle className='absolute top-8'>Contact Me</SectionTitle>

				<h2 className='text-neutral-500 max-w-2xl mx-auto my-4 md:text-xl text-center relative z-10'>
					Do you need me to design a website for you or your company?. Simply
					react out to me via WhatsApp, LinkedIn or invite me for a gig on
					Upwork. You could also send me an email using the form below;
					let&apos;s get started!
				</h2>
			</div>

			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(handleSubmit)}
					className=' w-full grid gap-5 grid-cols-1 md:grid-cols-2 max-w-3xl'>
					<FormField
						name='name'
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Full Name</FormLabel>

								<FormControl>
									<Input
										placeholder='John Doe'
										{...field}
									/>
								</FormControl>

								<FormDescription>
									Please type your first amd last names
								</FormDescription>

								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						name='email'
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email Address</FormLabel>

								<FormControl>
									<Input
										placeholder='johndoe@gmail.com'
										type='email'
										{...field}
									/>
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						name='companyName'
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Company/Business Name</FormLabel>

								<FormControl>
									<Input
										placeholder='John Doe'
										{...field}
									/>
								</FormControl>

								<FormDescription>
									Please type the official name of your company, business or
									organization.
								</FormDescription>

								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						name='estimatedProjectBudget'
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Project Budget/Estimate in Dollars ($)</FormLabel>

								<FormControl>
									<Input
										placeholder='Select your budget'
										type='number'
										{...field}
										onChange={(e) => field.onChange(e.target.valueAsNumber)}
									/>
								</FormControl>

								<FormDescription>
									Please type the budget for the project in Dollars ($).
								</FormDescription>

								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						name='projectType'
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Project Type</FormLabel>

								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder='Select the type of project' />
										</SelectTrigger>
									</FormControl>

									<SelectContent>
										{projectTypes.map((type) => (
											<SelectItem
												key={type}
												value={type}>
												{type}
											</SelectItem>
										))}
									</SelectContent>
								</Select>

								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						name='projectTimeLine'
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Project timeline</FormLabel>

								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder='Select project timeline' />
										</SelectTrigger>
									</FormControl>

									<SelectContent>
										{projectTimeLines.map((item) => (
											<SelectItem
												key={item}
												value={item}>
												{item}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</FormItem>
						)}
					/>

					<FormField
						name='projectDetails'
						control={form.control}
						render={({ field }) => (
							<FormItem className='md:col-span-2'>
								<FormLabel>Project Description/Details</FormLabel>

								<FormControl>
									<Textarea
										placeholder='Type more details about your project here'
										{...field}
									/>
								</FormControl>

								<FormDescription>
									Give me more details about your project so that I can come up
									with the best approach for it.
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>

					<Button
						type='submit'
						className='font-semibold tracking-wider md:col-span-2'
						variant={"secondary"}>
						Send Email
					</Button>
				</form>
			</Form>
		</section>
	);
};

export default ContactMe;
