import React from "react";
import SectionTitle from "./ui/section-title";
import { projects } from "@/lib/featured-projects";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import { SparklesCore } from "./ui/particles";
import { Badge } from "./ui/badge";
import Image from "next/image";

const FeaturedProjects = () => {
	return (
		<section className='relative w-full  px-5 py-20 lg:py-36  text-lg text-justify flex flex-col gap-3 items-center'>
			<SectionTitle>Featured Projects</SectionTitle>

			<div className='grid grid-cols-1 lg:grid-cols-2 gap-10 z-20  max-w-6xl'>
				{projects.map((project, index) => (
					<Card
						key={index}
						className='w-full bg-transparent backdrop-blur-md border-muted-foreground overflow-hidden'>
						<CardContent className='p-0 w-full overflow-hidden'>
							<Image
								src={`/assets/${project.thumbnailUrls[0]}`}
								className='w-full'
								width={400}
								height={200}
								alt='Project Thumbnail'
							/>
						</CardContent>
						<CardHeader>
							<CardTitle className='text-neutral-300 text-lg'>
								{project.title}
							</CardTitle>
						</CardHeader>

						<CardFooter>
							<div className='flex flex-wrap gap-2'>
								{project.tags.map((tag, i) => (
									<Badge
										variant={"secondary"}
										className='bg-muted-foreground'
										key={i}>
										{tag}
									</Badge>
								))}
							</div>
						</CardFooter>
					</Card>
				))}
			</div>

			<div className='w-full absolute inset-0 h-full'>
				<SparklesCore
					id='tsparticlesfullpage'
					background='transparent'
					minSize={0.6}
					maxSize={1.4}
					particleDensity={100}
					className='w-full h-full'
					particleColor='#c084fc'
				/>
			</div>
		</section>
	);
};

export default FeaturedProjects;
