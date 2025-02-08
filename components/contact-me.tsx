"use client";
import React from "react";
import SectionTitle from "./ui/section-title";
import { SparklesCore } from "./ui/particles";
import ProjectEnquieryform from "./ui/project-enquiry-form";

const ContactMe = () => {
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

			<ProjectEnquieryform />
		</section>
	);
};

export default ContactMe;
