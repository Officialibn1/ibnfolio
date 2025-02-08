"use client";

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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { IoSend } from "react-icons/io5";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

const schema = z.object({
	name: z.string().min(5, "Please enter your full name"),
	email: z.string().email(),
	companyName: z.string().min(5, "Please enter your companies/business name"),
	projectType: z.enum(
		[
			"E-Commerce",
			"Dropshipping Website",
			"Personal Portfolio",
			"UI/UX Design (Figma)",
			"Real-Estate Portfolio",
			"Car Agent/Agency Portfolio",
			"Visa Agent/Agency Portfolio",
			"Content Management System (CMS)",
			"Agency Website",
			"Landing Page",
			"Website Development (Frontend Only)",
			"Website Development (Serverless Full-Stack)",
			"API Integration",
			"Booking website (Airline)",
			"Booking website (Hotel & Reservations)",
			"Schorlarship Website",
			"Airline Website",
			"Computer Base Test (CBT) Web App",
			"Mobile Development",
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

const ProjectEnquieryform = () => {
	const form = useForm<z.infer<typeof schema>>({
		resolver: zodResolver(schema),
	});

	const handleSubmit = (values: z.infer<typeof schema>) => {
		console.log(values);
	};

	return (
		<Form {...form}>
			<h1 className='text-3xl font-semibold text-muted'>
				Project Enquiry Form
			</h1>

			<Separator className='max-w-3xl bg-muted-foreground' />

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
					className='font-semibold tracking-wider md:col-span-2 flex items-center gap-2 h-fit'
					variant={"secondary"}>
					<span>Send Email</span>

					<IoSend
						size={40}
						className='text-lg'
					/>
				</Button>
			</form>
		</Form>
	);
};

export default ProjectEnquieryform;
