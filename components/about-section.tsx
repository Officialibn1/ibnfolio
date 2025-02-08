import { SparklesCore } from "./ui/particles";
import SectionTitle from "./ui/section-title";

const AboutSection = () => {
	return (
		<section
			id='about-me'
			className='relative w-full bg-transparent px-5 my-20 lg:my-36 xl:my-48 tracking-wide leading-loose text-lg text-justify flex flex-col gap-3'>
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
					About & Summary <br /> of Experience
				</SectionTitle>
			</div>

			<p className='text-neutral-400 max-w-2xl mx-auto md:text-xl  relative z-10 '>
				I’m a Frontend developer with a proven track record of building modern
				web applications. With over three years of experience crafting
				responsive websites and user interfaces, and deep expertise in React and
				Svelte. In the past year, I&apos;ve expanded into full-stack development
				using Nextjs and SvelteKit, specializing in serverless solutions.
			</p>

			<p className='text-neutral-400 max-w-2xl mx-auto md:text-xl  relative z-10'>
				My technical toolkit includes modern styling solutions like Tailwind CSS
				and Styled-Components, along with backend technologies such as GraphQL,
				Firebase, and both SQL and NoSQL databases. I focus on writing clean,
				maintainable code that delivers excellent user experiences.
			</p>

			<p className='text-neutral-400 max-w-2xl mx-auto md:text-xl  relative z-10'>
				I excel as a team player, collaborating with designers and backend
				developers to create seamless, high-quality products. I&apos;m always
				eager to learn new technologies and methodologies to improve my skills
				and deliver the best possible results.
			</p>
		</section>
	);
};

export default AboutSection;
