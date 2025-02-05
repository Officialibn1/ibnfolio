const AboutSection = () => {
	return (
		<section
			id='about-me'
			className='w-full bg-transparent px-5 my-20 lg:my-36 xl:my-48 tracking-wide leading-loose text-lg jus text-justify flex flex-col gap-3'>
			<h1 className='relative z-10 text-5xl mb-5 md:text-4xl xl:text-5xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold tracking-wide w-full'>
				About & Summary <br /> of Experience
			</h1>

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
