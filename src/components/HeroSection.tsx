
import { Button } from "@/components/ui/button";
import { ArrowDownCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-12 md:py-0">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-800 leading-tight">
              Hi, I'm <span className="text-primary">Mohammed Abubakar</span>
            </h1>
            <h2 className="text-xl md:text-2xl mb-6 text-gray-600">
              Software Developer specializing in full-stack development, data science, and machine learning
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg">
              I build efficient, scalable software solutions and transform complex data into actionable insights.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a href="#portfolio">View My Work</a>
              </Button>
              <Button variant="outline" asChild size="lg">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl animate-fade-in">
                {/* Replace with actual image when available */}
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-4xl font-bold">
                  MA
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-2 shadow-lg">
                <div className="bg-primary rounded-full p-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 14.66V20C20 20.55 19.55 21 19 21H5C4.45 21 4 20.55 4 20V14.66M12 14V3M12 3L8 7M12 3L16 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <ArrowDownCircle className="h-10 w-10 text-primary opacity-80" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
