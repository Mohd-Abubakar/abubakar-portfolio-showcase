
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Linkedin, Github, FileText, Download } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8 animate-fade-up">
            <p className="text-gray-600 max-w-lg">
              Feel free to contact me for any project inquiries or if you have questions. 
              I'm always open to discussing new projects, creative ideas, or opportunities.
            </p>
            
            <div className="space-y-6">
              <Card className="overflow-hidden border border-gray-100">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-700">Email</h3>
                    <a href="mailto:abubakarsiddiqh1@gmail.com" className="text-primary hover:underline">
                      abubakarsiddiqh1@gmail.com
                    </a>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden border border-gray-100">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-700">Phone</h3>
                    <a href="tel:+917353553630" className="text-primary hover:underline">
                      +91 73535 53630
                    </a>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden border border-gray-100">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-700">Location</h3>
                    <p className="text-gray-600">Hassan, Karnataka, India</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden border border-gray-100">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-700">LinkedIn</h3>
                    <a 
                      href="https://www.linkedin.com/in/mohdabubakar" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      linkedin.com/in/mohdabubakar
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Resume</h3>
                </div>
                
                <p className="text-gray-600 mb-6">
                  Download my resume to learn more about my education, work experience, 
                  and skills in detail. Feel free to reach out if you have any questions!
                </p>
                
                <Button className="w-full flex items-center justify-center gap-2">
                  <Download className="h-4 w-4" />
                  Download Resume
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
