import React from "react";
import SectionTitle from "./ui/section-title";
import { Spotlight } from "./ui/spotlight";
import { backendSkills, frontendSkills, fullStackSkills } from "@/lib/skils";
import { Badge } from "./ui/badge";

const SkillsBadge = ({ children }: { children: React.ReactNode }) => {
	return (
		<Badge
			variant={"outline"}
			className='text-white text-base font-semibold text-muted-foreground border-neutral-600 rounded-full'>
			{children}
		</Badge>
	);
};

const SkillsSection = () => {
	return (
		<section className='px-5 py-20 lg:py-32 xl:py-44 w-full flex flex-col md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden'>
			<Spotlight
				className='-top-40 left-0 md:left-60 md:-top-20'
				fill='white'
			/>

			<SectionTitle>My Skills & Tech Stack</SectionTitle>

			<SectionTitle className=' mt-20 mb-5  text-3xl md:text-3xl xl:text-3xl'>
				Frontend Development
			</SectionTitle>

			<div className='flex flex-wrap gap-3 justify-center max-w-2xl'>
				{frontendSkills.map((skill, index) => (
					<SkillsBadge key={index}>{skill.title}</SkillsBadge>
				))}
			</div>

			<SectionTitle className=' mt-20 mb-5  text-3xl md:text-3xl xl:text-3xl'>
				Backend Development
			</SectionTitle>

			<div className='flex flex-wrap gap-3 justify-center max-w-2xl'>
				{backendSkills.map((skill, index) => (
					<SkillsBadge key={index}>{skill.title}</SkillsBadge>
				))}
			</div>

			<SectionTitle className=' mt-20 mb-5  text-3xl md:text-3xl xl:text-3xl'>
				Full-Stack Development
			</SectionTitle>

			<div className='flex flex-wrap gap-3 justify-center max-w-2xl'>
				{fullStackSkills.map((skill, index) => (
					<SkillsBadge key={index}>{skill.title}</SkillsBadge>
				))}
			</div>
		</section>
	);
};

export default SkillsSection;
