import AboutSection from "@/components/about-section";
import FeaturedProjects from "@/components/featured-projects";
import SkillsSection from "@/components/skills-section";
import Hero from "@/components/ui/hero";

export default function Home() {
	return (
		<>
			<Hero />

			<AboutSection />

			<FeaturedProjects />

			<SkillsSection />
		</>
	);
}
