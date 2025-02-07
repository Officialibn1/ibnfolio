"use client";

import React from "react";

import { motion } from "framer-motion";
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
			<motion.h1
				initial={{ opacity: 0, y: 200 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0,
					duration: 0.8,
					ease: "easeInOut",
				}}
				viewport={{ once: true }}
				className='mb-8 bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text text-center text-3xl font-bold tracking-tight text-transparent md:text-6xl'>
				Featured Projects
			</motion.h1>

			<motion.div className='grid grid-cols-1 lg:grid-cols-2 gap-10 z-20  max-w-6xl'>
				{projects.map((project, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, y: 200 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{
							duration: 0.5,
							ease: "easeIn",
						}}
						viewport={{ once: true }}
						className='h-full '>
						<Card className='w-full h-full bg-transparent backdrop-blur-md border-muted-foreground overflow-hidden rounded-2xl p-4'>
							<CardContent className='p-0 w-full overflow-hidden rounded-lg mb-4 border border-muted-foreground'>
								<Image
									src={`/assets/${project.thumbnailUrls[0]}`}
									className='w-full'
									width={400}
									height={200}
									alt='Project Thumbnail'
								/>
							</CardContent>
							<CardHeader>
								<CardTitle className='text-neutral-300 text-lg mb-3'>
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
					</motion.div>
				))}
			</motion.div>

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
