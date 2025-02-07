import React from "react";
import SectionTitle from "./ui/section-title";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
	return (
		<footer className='flex flex-col gap-10 items-center text-center'>
			<Separator className='bg-muted-foreground' />

			<div className='flex flex-col gap-5'>
				<SectionTitle className='mb-1'>Isah Ibn Muhammad</SectionTitle>

				<h2 className='text-muted-foreground text-lg'>FRONTEND DEVELOPER</h2>

				<ul className=' justify-center flex-wrap space-x-2 flex-1 hidden md:flex'>
					<li className='border border-gray-800 rounded-full p-2 hover:text-indigo-700 hover:border-indigo-700  ease-in-out cursor-pointer'>
						<Link
							href={"https://www.linkedin.com/in/isah-muhammad-5046b125a/"}
							target='_Blank'>
							<Linkedin />
						</Link>
					</li>

					<li className='border border-gray-800 rounded-full p-2 hover:text-indigo-700 hover:border-indigo-700  ease-in-out cursor-pointer'>
						<Link
							href={"https://github.com/Officialibn1"}
							target='_Blank'>
							<Github />
						</Link>
					</li>

					<li className='border border-gray-800 rounded-full p-2  hover:text-indigo-700 hover:border-indigo-700  ease-in-out cursor-pointer'>
						<Link
							href={"https://x.com/__ibn1/"}
							target='_Blank'>
							<Twitter />
						</Link>
					</li>
				</ul>
			</div>

			<span className='text-xs font-thin text-muted-foreground w-full bg-white py-3'>
				&copy; ibn&apos;s portfolio 2025
			</span>
		</footer>
	);
};

export default Footer;
