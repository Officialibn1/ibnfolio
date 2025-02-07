import React from "react";
// import { motion } from "framer-motion";
import SectionTitle from "./ui/section-title";
import { experiences } from "@/lib/experience";

const ProfessionalExperience = () => {
	return (
		<section className='relative w-full  px-5 py-20 lg:py-36  text-lg text-justify flex flex-col gap-3 items-center'>
			<SectionTitle>Professional Experience</SectionTitle>
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
