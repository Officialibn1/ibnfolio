import AboutSection from "@/components/about-section";
import FeaturedProjects from "@/components/featured-projects";
import Hero from "@/components/ui/hero";

export default function Home() {
	return (
		<>
			<Hero />

			<AboutSection />

			<FeaturedProjects />
		</>
	);
}
