import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export const Navbar = () => {
	return (
		<nav className='absolute top-4 z-10 bg-foreground/15 shadow-xl backdrop-blur-sm rounded-full p-2 md:p-5 border border-gray-600 w-11/12 max-w-4xl self-center mx-5 flex justify-between items-center'>
			<ul className='flex justify-center space-x-3 md:space-x-5 tracking-wider text-lg font-medium'>
				<li>
					<Link
						href='/'
						className='hover:text-indigo-700 duration-100 ease-in-out'>
						Home
					</Link>
				</li>

				<li>
					<Link
						href='/projects'
						className='hover:text-indigo-700 duration-100 ease-in-out'>
						Projects
					</Link>
				</li>

				<li>
					<Link
						href='/about'
						className='hover:text-indigo-700 duration-100 ease-in-out'>
						About
					</Link>
				</li>
			</ul>

			<ul className='flex justify-center space-x-2'>
				<li className='border border-gray-800 rounded-full p-2 hover:text-indigo-700 hover:border-indigo-700 duration-100 ease-in-out cursor-pointer'>
					<Link
						href={"#"}
						target='_Blank'>
						<Github />
					</Link>
				</li>

				<li className='border border-gray-800 rounded-full p-2  hover:text-indigo-700 hover:border-indigo-700 duration-100 ease-in-out cursor-pointer'>
					<Link
						href={"#"}
						target='_Blank'>
						<Twitter />
					</Link>
				</li>

				<li className='border border-gray-800 rounded-full p-2 hover:text-indigo-700 hover:border-indigo-700 duration-100 ease-in-out cursor-pointer'>
					<Link
						href={"#"}
						target='_Blank'>
						<Linkedin />
					</Link>
				</li>
			</ul>
		</nav>
	);
};
