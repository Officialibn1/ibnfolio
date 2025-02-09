"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/featured-projects";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	DialogDescription,
} from "@/components/ui/dialog";

import {
	Carousel,
	CarouselApi,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

import { SparklesCore } from "./ui/particles";
import { Badge } from "./ui/badge";
import Image from "next/image";
import { blurUrl } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Separator } from "./ui/separator";
import Link from "next/link";

const FeaturedProjects = () => {
	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState(0);
	const [count, setCount] = useState(0);

	useEffect(() => {
		if (!api) {
			return;
		}

		setCount(api.scrollSnapList().length);
		setCurrent(api.selectedScrollSnap() + 1);

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap() + 1);
		});
	}, [api]);
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
				className=' absolute top-8 mb-8 bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text text-center text-3xl font-bold tracking-tight text-transparent md:text-6xl'>
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
						className='h-full rounded-3xl border-transparent border-4 hover:border-muted-foreground  backdrop-blur-md'>
						<Dialog>
							<DialogTrigger asChild>
								<Card className='w-full h-full bg-transparent  border-muted-foreground overflow-hidden rounded-2xl p-4 cursor-pointer group'>
									<CardContent className='p-0 w-full overflow-hidden rounded-lg mb-4 border border-muted-foreground'>
										<Image
											src={`/assets/${project.thumbnailUrls[0]}`}
											className='w-full group-hover:scale-105 duration-150'
											width={400}
											height={200}
											loading='lazy'
											placeholder='blur'
											blurDataURL={blurUrl}
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
							</DialogTrigger>

							<DialogContent className='w-11/12 max-w-[940px]'>
								<DialogHeader className='mt-5 w-full overflow-hidden flex flex-col items-center'>
									<Carousel setApi={setApi}>
										<CarouselContent>
											{Array.from({ length: 5 }).map((_, index) => (
												<CarouselItem
													key={index}
													className=' w-full overflow-hidden'>
													<CardContent className='flex w-full items-center justify-center rounded-lg overflow-hidden'>
														<Image
															src={`/assets/${project.thumbnailUrls[0]}`}
															className='w-full group-hover:scale-105 duration-150 outline outline-red-200 aspect-video'
															width={1200}
															height={600}
															loading='lazy'
															placeholder='blur'
															blurDataURL={blurUrl}
															alt='Project Thumbnail'
														/>
													</CardContent>
												</CarouselItem>
											))}
										</CarouselContent>
										<CarouselPrevious />

										<CarouselNext />
									</Carousel>
									<DialogDescription className='py-2 text-center text-sm text-muted-foreground'>
										Image {current} of {count}
									</DialogDescription>
								</DialogHeader>
								<DialogTitle className='text-center'>
									<Link
										href={project.previewUrl}
										className='hover:underline'
										target='_blank'>
										{project.title}
									</Link>{" "}
									-{" "}
									<Link
										href={project.githubUrl}
										className='text-neutral-400 hover:underline'
										target='_blank'>
										View Source Code
									</Link>
								</DialogTitle>

								<Separator className='bg-muted-foreground' />

								<div className='flex flex-wrap justify-center gap-2 w-full'>
									{project.tags.map((tag, i) => (
										<Badge
											variant={"secondary"}
											className='bg-muted-foreground text-xs'
											key={i}>
											{tag}
										</Badge>
									))}
								</div>
							</DialogContent>
						</Dialog>
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
					particleColor='#fff'
				/>
			</div>
		</section>
	);
};

export default FeaturedProjects;
