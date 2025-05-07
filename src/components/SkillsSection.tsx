
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "Python", level: 90 },
      { name: "Java", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "C", level: 75 }
    ]
  },
  {
    category: "Web Development",
    items: [
      { name: "HTML/CSS", level: 85 },
      { name: "React", level: 80 },
      { name: "Node.js", level: 75 },
      { name: "RESTful APIs", level: 85 }
    ]
  },
  {
    category: "Database Management",
    items: [
      { name: "MySQL", level: 90 },
      { name: "MongoDB", level: 80 },
      { name: "PostgreSQL", level: 75 }
    ]
  },
  {
    category: "Machine Learning & Data Science",
    items: [
      { name: "Scikit-learn", level: 85 },
      { name: "TensorFlow", level: 75 },
      { name: "Data Analysis", level: 90 },
      { name: "Data Visualization", level: 85 }
    ]
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "AWS", level: 75 },
      { name: "Docker", level: 70 },
      { name: "Git", level: 85 }
    ]
  },
  {
    category: "Soft Skills",
    items: [
      { name: "Problem Solving", level: 95 },
      { name: "Team Collaboration", level: 90 },
      { name: "Communication", level: 85 },
      { name: "Time Management", level: 80 }
    ]
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
                <div className="space-y-4">
                  {skillCategory.items.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
