import React from "react";

import SectionTitle from "./ui/section-title";
import { SparklesCore } from "./ui/particles";
import { Badge } from "./ui/badge";
import { capabilities } from "@/lib/capabilities";

const CapabilitiesBadge = ({ children }: { children: React.ReactNode }) => {
	return (
		<Badge
			variant={"secondary"}
			className='hover:scale-110 duration-150 ease-in-out text-base font-semibold text-black bg-neutral-600  rounded-full cursor-pointer'>
			{children}
		</Badge>
	);
};

const CapabilitiesSection = () => {
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

				<SectionTitle className='absolute top-8'>My Capabilities</SectionTitle>
			</div>

			<div className='flex flex-wrap gap-3 justify-center max-w-2xl'>
				{capabilities.map((cap) => (
					<CapabilitiesBadge key={cap}>{cap}</CapabilitiesBadge>
				))}
			</div>
		</section>
	);
};

export default CapabilitiesSection;
