import { ReactNode } from "react";
import Link from "next/link";
import { Github, Linkedin, MenuIcon, Twitter } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import {
	Sheet,
	SheetContent,
	SheetTrigger,
	SheetTitle,
} from "@/components/ui/sheet";
import {
	FaGithubAlt,
	FaLinkedinIn,
	FaUpwork,
	FaXTwitter,
} from "react-icons/fa6";

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

export const Navbar = () => {
	return (
		<nav className='sticky top-4 z-30 bg-foreground/30 shadow-xl backdrop-blur-md rounded-full p-2 md:p-5 border border-muted-foreground w-11/12 max-w-4xl self-center mx-5 flex justify-between items-center'>
			<div className='flex-1'>
				<Avatar>
					<AvatarImage
						src='https://avatars.githubusercontent.com/u/111536474?v=4'
						alt='@ibn'
					/>
					<AvatarFallback className='text-black text-sm'>IBN</AvatarFallback>
				</Avatar>
			</div>
			<ul className=' justify-center space-x-3 md:space-x-5 tracking-wider text-lg font-medium -1 hidden md:flex '>
				<li>
					<Link
						href='/'
						className='hover:text-indigo-700  ease-in-out'>
						Home
					</Link>
				</li>

				<li>
					<Link
						href='/#about-me'
						className='hover:text-indigo-700  ease-in-out'>
						About
					</Link>
				</li>

				<li>
					<Link
						href='/projects'
						className='hover:text-indigo-700  ease-in-out'>
						Projects
					</Link>
				</li>
			</ul>

			<ul className=' justify-end space-x-2 flex-1 hidden md:flex'>
				{footerSocials.map((icon, i) => (
					<li
						key={`${icon.name}-${i}`}
						className='border border-gray-200 rounded-full p-2 hover:text-indigo-700 hover:border-indigo-700  ease-in-out cursor-pointer'>
						<Link
							href={icon.url}
							target='_Blank'>
							{icon.icon}
						</Link>
					</li>
				))}
			</ul>

			<div className='md:hidden'>
				<Sheet>
					<SheetTrigger>
						<MenuIcon className='w-8 h-8' />
					</SheetTrigger>

					<SheetContent className='bg-foreground text-background h-screen flex flex-col'>
						<SheetTitle className='hidden'>Navigation Menu</SheetTitle>
						<ul className='flex flex-col justify-center gap-3 tracking-wider text-lg font-medium mt-10'>
							<li>
								<Link
									href='/'
									className='hover:text-indigo-700  ease-in-out'>
									Home
								</Link>
							</li>

							<li>
								<Link
									href='/#about-me'
									className='hover:text-indigo-700  ease-in-out'>
									About
								</Link>
							</li>

							<li>
								<Link
									href='/projects'
									className='hover:text-indigo-700  ease-in-out'>
									Projects
								</Link>
							</li>
						</ul>

						<ul className='flex justify-end space-x-2 mt-auto'>
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
					</SheetContent>
				</Sheet>
			</div>
		</nav>
	);
};
