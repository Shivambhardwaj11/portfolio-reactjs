import { AboutMe } from "../components/AboutMe";
import { ContactSection } from "../components/ContactSection";
import { HeroSection } from "../components/HeroSection";
import Navbar from "../components/Navbar";
import { ProjectsSection } from "../components/ProjectsSection";
import { SkillSection } from "../components/SkillSection";
import StarBackground from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";



export const Home = () => {

    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden"> 
        {/* theme */ }
        <ThemeToggle />
        <StarBackground />
        <Navbar />

        <main>
            <HeroSection />
            <AboutMe />
            <SkillSection />
            <ProjectsSection />
            <ContactSection />
        </main>
    </div>
};