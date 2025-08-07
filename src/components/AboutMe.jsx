import { Briefcase, Code, User } from "lucide-react"

export const AboutMe = () => {
    return <section id="about" className="py-24 px-4 relative ">
        <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
                About <span className="text-primary" >Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-xl md:text-2xl font-semibold">Passionate Web Dev</h3>

                    <p className="text-muted-foreground">✨ From backend logic to frontend finesse, I turn technical challenges into elegant solutions.</p>
                    <p className="text-muted-foreground">🌱 Always learning and adapting, I embrace new technologies to stay ahead in the ever-evolving web landscape.</p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button"> Contact Me</a>
                        <a href="/projects/Shivam-Bhardwaj-resume.pdf" target="blank" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/25 transition-colors duration-300"> Download Resume</a>
                    </div>
                    
                </div>

                <div className="grid grid-cols-1 gap-6 ">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10 ">
                            <Code className="text-primary h-6 w-6 " />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Web Development</h4>
                                <p className="text-muted-foreground">Creating responsive and user-friendly websites using the latest technologies.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                         <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10 ">
                            <User className="text-primary h-6 w-6 " />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                <p className="text-muted-foreground">Creating intuitive and visually appealing user interfaces.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                         <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10 ">
                            <Briefcase className="text-primary h-6 w-6 " />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Project Management</h4>
                                <p className="text-muted-foreground">Overseeing projects from conception to completion, ensuring timely delivery and adherence to requirements.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}