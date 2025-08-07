import { ExternalLink, Github,ArrowRight } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "AI-Mock Interview",
        description: "An AI-powered mock interview platform that simulates real interview scenarios, providing users with personalized feedback and performance analysis.",
        image: "/projects/mockai.png",
        tags: ["React", "TailwindCSS","Firebase"],
        demoUrl: "https://smart-mock-interviews-ai.lovable.app/",
        githubUrl:"https://github.com/Shivambhardwaj11/AI-mock-interview",

    },
    {
        id: 2,
        title: "Movie Application",
        description: "A movie application that allows users to search for and discover new films, view trailers, and create watchlists.",
        image: "/projects/moviepic.png",
        tags: ["React", "TailwindCSS"],
        demoUrl: "#",
        githubUrl:"https://github.com/Shivambhardwaj11/react-movie-application",
    },
    {
        id: 3,
        title: "AI-Email Generator",
        description: "An AI-powered email generator that helps users create professional and personalized email content quickly and easily.",
        image: "/projects/ai-email-generator.png",
        tags: ["React", "TailwindCSS", "OpenAI"],
        demoUrl: "https://ai-email-generator-beryl.vercel.app/",
        githubUrl:"https://github.com/Shivambhardwaj11/ai-email-generator",
    }
]


export const ProjectsSection = () => {
    return <section id='projects' className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured <span className="text-primary "> Projects</span></h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my recent projects that showcase my skills and expertise in web development. Each project is a testament to my ability to create functional and visually appealing applications.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <div key={project.id} className=" group bg-card rounded-lg shadow-xs overflow-hidden card-hover">
                        <div className="overflow-hidden h-48">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/25 bg-secondary text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                        <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                        <div className="flex justify-between items-center mt-4">
                            <div className="flex space-x-3">
                                <a href={project.demoUrl} target="_blank"  className="text-foreground/80 hover:text-primary transition-colors duration-300"  >
                                    <ExternalLink size={20} />
                                </a>
                                 <a href={project.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300" >
                                    <Github size={20} />
                                </a>
                            </div>
                        </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a href="" target="_blank" className="cosmic-button w-fit flex items-center mx-auto gap-2">
                    Check My Github <ArrowRight size={16} />
                </a>
            </div>
        </div>
    </section>
}