import AboutSection from "@/components/about-section";
import ContactMe from "@/components/contact-me";
import FeaturedProjects from "@/components/featured-projects";
import Footer from "@/components/footer";
import ProfessionalExperience from "@/components/professional-experience-section";
import SkillsSection from "@/components/skills-section";
import Hero from "@/components/ui/hero";

export default function Home() {
	return (
		<>
			<Hero />

			<AboutSection />

			<FeaturedProjects />

			<SkillsSection />

			<ProfessionalExperience />

			<ContactMe />

			<Footer />
		</>
	);
}
