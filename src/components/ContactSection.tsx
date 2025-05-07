
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Linkedin, Github } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };

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
                <h3 className="text-xl font-bold mb-4">Send Me a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Enter subject"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Enter your message"
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
