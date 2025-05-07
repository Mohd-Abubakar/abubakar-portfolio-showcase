
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  {
    category: "Programming Languages",
    items: ["Python", "Java", "JavaScript", "C"]
  },
  {
    category: "Web Development",
    items: ["HTML/CSS", "React", "Node.js", "RESTful APIs"]
  },
  {
    category: "Database Management",
    items: ["MySQL", "MongoDB", "PostgreSQL"]
  },
  {
    category: "Machine Learning & Data Science",
    items: ["Scikit-learn", "TensorFlow", "Data Analysis", "Data Visualization"]
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Docker", "Git"]
  },
  {
    category: "Soft Skills",
    items: ["Problem Solving", "Team Collaboration", "Communication", "Time Management"]
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillCategory, categoryIndex) => (
            <Card 
              key={skillCategory.category} 
              className="animate-fade-up"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4 text-gray-800">{skillCategory.category}</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {skillCategory.items.map((skill) => (
                    <li key={skill} className="text-gray-700">{skill}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
