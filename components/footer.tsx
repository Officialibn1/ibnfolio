import { ReactNode } from "react";
import SectionTitle from "./ui/section-title";
import { Separator } from "./ui/separator";
import Link from "next/link";

import {
	FaGithubAlt,
	FaLinkedinIn,
	FaUpwork,
	FaXTwitter,
} from "react-icons/fa6";
import { SparklesCore } from "./ui/particles";

type FooterSocials = {
	name: string;
	icon: ReactNode;
	url: string;
};

const footerSocials: FooterSocials[] = [
	{
		name: "LinkedIn",
		icon: <FaLinkedinIn />,
		url: "https://www.linkedin.com/in/isah-muhammad-5046b125a/",
	},
	{
		name: "GitHub",
		icon: <FaGithubAlt />,
		url: "https://github.com/Officialibn1/",
	},
	{
		name: "Twitter",
		icon: <FaXTwitter />,
		url: "https://x.com/__ibn1/",
	},
	{
		name: "Upwork",
		icon: <FaUpwork />,
		url: "https://www.upwork.com/freelancers/~01e6d693f7c68ffc3b",
	},
];

const Footer = () => {
	return (
		<footer className='flex flex-col gap-10 items-center text-center relative'>
			<Separator className='bg-neutral-800' />

			<div className='flex flex-col gap-5'>
				<SectionTitle className='mb-1'>Isah Ibn Muhammad</SectionTitle>

				<h2 className='text-muted-foreground text-lg'>FRONTEND DEVELOPER</h2>

				<ul className=' flex justify-center gap-5 '>
					{footerSocials.map((icon, i) => (
						<li
							key={`${icon.name}-${i}`}
							className='border border-gray-800 rounded-full p-2 hover:text-indigo-700 hover:border-indigo-700  ease-in-out cursor-pointer'>
							<Link
								href={icon.url}
								target='_Blank'>
								{icon.icon}
							</Link>
						</li>
					))}
				</ul>
			</div>

			<div className='w-full absolute inset-0 h-full '>
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

			<span className='text-xs font-thin text-muted-foreground w-full  py-3'>
				&copy; Isah Ibn Muhammad&apos;s Portfolio 2025
			</span>
		</footer>
	);
};

export default Footer;
