
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Milk Adulteration Detection",
    description: "A full-stack development project using IoT sensors and ML algorithms to detect milk adulteration in real-time.",
    image: "/placeholder.svg",
    tags: ["IoT", "Machine Learning", "Full Stack", "Python", "React"],
    type: "Full Stack"
  },
  {
    id: 2,
    title: "Hospital Management System",
    description: "Backend development for streamlining patient data management, appointments, and medical records.",
    image: "/placeholder.svg",
    tags: ["Backend", "Database", "API", "Java", "MySQL"],
    type: "Backend"
  },
  {
    id: 3,
    title: "Weather App Application",
    description: "A responsive web application that provides real-time weather information with interactive UI elements.",
    image: "/placeholder.svg",
    tags: ["Frontend", "API Integration", "HTML", "CSS", "JavaScript"],
    type: "Frontend"
  },
  {
    id: 4,
    title: "Recommendation System",
    description: "Data analysis and collaborative filtering system for generating personalized user recommendations.",
    image: "/placeholder.svg",
    tags: ["Data Science", "ML", "Python", "Collaborative Filtering"],
    type: "Data Science"
  },
  {
    id: 5,
    title: "Inventory Management System",
    description: "Full-stack application to track inventory levels, process orders, and generate reorder alerts.",
    image: "/placeholder.svg",
    tags: ["Full Stack", "Database", "React", "Node.js", "MongoDB"],
    type: "Full Stack"
  }
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="overflow-hidden border border-gray-200 hover:shadow-lg transition-all animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-sm text-gray-500 mt-1">
                      {project.type}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-gray-600 text-sm">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="bg-blue-50 text-blue-600 hover:bg-blue-100">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="outline" className="bg-gray-50">
                      +{project.tags.length - 3}
                    </Badge>
                  )}
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button variant="outline" className="w-full">View Details</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
