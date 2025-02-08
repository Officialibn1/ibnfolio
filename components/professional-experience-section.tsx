import React from "react";
// import { motion } from "framer-motion";
import SectionTitle from "./ui/section-title";
import { experiences } from "@/lib/experience";
import { SparklesCore } from "./ui/particles";

const ProfessionalExperience = () => {
	return (
		<section className='relative w-full  px-5 py-20 lg:py-36  text-lg text-justify flex flex-col gap-3 items-center'>
			<div className='h-fit w-full bg-transparent relative flex flex-col items-center justify-center overflow-hidden rounded-md '>
				<div className='w-[40rem] md:w-[60rem] xl:w-full h-40 lg:h-64 relative'>
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

				<SectionTitle className='absolute top-8'>
					Professional Experience
				</SectionTitle>
			</div>
			{/* <motion.div></motion.div> */}

			<div className='flex flex-col gap-16 max-w-lg lg:max-w-2xl'>
				{experiences.map((item, i) => (
					<div
						className='border-l-4 pl-4 border-l-muted-foreground'
						key={`Experience-${i}`}>
						<h1 className='text-neutral-300 text-xl md:text-2xl lg:text-4xl font-semibold tracking-wider mb-1'>
							{item.company}{" "}
							<span className='text-muted-foreground'>- {item.duration}</span>
						</h1>

						<h2 className='text-neutral-300 mb-3 font-bold'>{item.position}</h2>

						<ul className='list-disc list-outset pl-4 text-neutral-400 '>
							{item.responsibilities.map((res, i) => (
								<li
									key={`Responsibility-${i}`}
									className='md:text-lg font-thin'>
									{res}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	);
};

export default ProfessionalExperience;
