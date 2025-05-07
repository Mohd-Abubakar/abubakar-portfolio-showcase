
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="animate-fade-up">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Who I Am</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                I am a passionate Software Developer with expertise in full-stack development, 
                data science, and machine learning. My journey in technology is driven by a 
                deep curiosity and a desire to solve complex problems through innovative solutions.
              </p>
              <p>
                I believe in continuous learning and staying updated with the latest technologies. 
                My approach combines technical expertise with analytical thinking to create 
                efficient, user-friendly applications that address real-world challenges.
              </p>
              <p>
                Beyond coding, I enjoy exploring new technologies, contributing to open-source 
                projects, and sharing knowledge with the developer community.
              </p>
            </div>
          </div>
          
          <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Education</h3>
            
            <Card className="overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">Bachelor of Engineering</h4>
                      <p className="text-sm text-gray-500">Information Science and Engineering</p>
                      <p className="mt-2 font-medium">Malnad College of Engineering</p>
                      <div className="mt-1 flex items-center gap-2">
                        <span className="text-sm text-gray-500">2020 - 2024</span>
                        <span className="inline-block h-1 w-1 rounded-full bg-gray-400"></span>
                        <span className="text-sm font-medium text-primary">CGPA: 8.71</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t">
                    <p className="text-gray-600 text-sm">
                      Coursework included Data Structures & Algorithms, Database Systems, Machine Learning,
                      Web Development, and Software Engineering principles.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
