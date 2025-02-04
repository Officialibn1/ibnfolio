import { BackgroundBeams } from "@/components/ui/background-beams";
import ShrimmerButton from "@/components/ui/shrimmer-button";

const Hero = () => {
	return (
		<div className='font-[family-name:var(--font-geist-sans)] h-screen w-full rounded-md bg-transparent relative flex flex-col items-center justify-center antialiased'>
			<div className='max-w-4xl mx-auto p-4 flex flex-col gap-5 '>
				<h1 className='relative z-10 text-5xl md:text-7xl xl:text-8xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold tracking-wide w-full'>
					I&apos;m a Frontend developer
				</h1>

				<p className='text-neutral-500 max-w-2xl mx-auto my-4 md:text-xl text-center relative z-10'>
					Hello 👋🏼, welcome to my portfolio, I build blazing-fast web apps using
					React, NextJS or SvelteKit.
				</p>

				<ShrimmerButton>Hire Me Now</ShrimmerButton>
			</div>
			<BackgroundBeams />
		</div>
	);
};

export default Hero;
