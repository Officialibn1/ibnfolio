import React from "react";
import SectionTitle from "./ui/section-title";
import { projects } from "@/lib/featured-projects";
import { Carousel } from "./ui/carousel";
import { SparklesCore } from "./ui/particles";

const FeaturedProjects = () => {
	return (
		<section className='relative w-full  px-5 pt-20 lg:pt-36  text-lg text-justify flex flex-col gap-3 items-center'>
			<SectionTitle>Featured Projects</SectionTitle>

			<div className='flex flex-col gap-10 z-20  overflow-hidden w-4/6 h-[80vmin]'>
				<Carousel slides={projects} />
			</div>

			<div className='w-full absolute inset-0 h-screen'>
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
