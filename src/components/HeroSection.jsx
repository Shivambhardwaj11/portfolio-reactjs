import { ArrowDown } from "lucide-react"

export const HeroSection = () => {
    return <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-4">
                <h1 className="text-4xl font-bold md:text-6xl tracking-tight">
                    <span className="opacity-0 animate-fade-in">Hi, I'm</span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1"> Shivam</span>
                    <span className="text-gradient opacity-0 ml-2 animate-fade-in-delay-2"> Bhardwaj </span>
                </h1>

                <p className="text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">I'm a full-stack developer with a passion for building responsive web experiences. From Spring Boot-powered backends to React and Next.js frontends, I create projects that balance performance with visual finesse.</p>

                <div className="opacity-0 animate-fade-in-delay-4 pt-4">
                    <a href="#projects" className="cosmic-button" >
                        View My work 
                    </a>
                </div>

            </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-muted-foreground text-sm mb-2">Scroll</span>
            <ArrowDown className="h-5 w-5 text-primary" />
        </div>
    </section>
}