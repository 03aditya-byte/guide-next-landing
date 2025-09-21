import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Compass, Users, TrendingUp, Shield, Target, Star } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/career-compass-hero.jpg";

const LandingPage = () => {
  const features = [
    {
      icon: Compass,
      title: "Career Guidance",
      description: "Get personalized career recommendations based on your skills and interests"
    },
    {
      icon: Users,
      title: "Expert Counseling",
      description: "Connect with professional career counselors for one-on-one guidance"
    },
    {
      icon: TrendingUp,
      title: "Growth Tracking",
      description: "Monitor your career progress and skill development over time"
    },
    {
      icon: Shield,
      title: "Trusted Platform",
      description: "Secure and reliable platform trusted by thousands of students"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Students Guided" },
    { number: "500+", label: "Career Paths" },
    { number: "98%", label: "Success Rate" },
    { number: "50+", label: "Expert Counselors" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Compass className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-gradient">Career Compass</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
              <div className="flex items-center space-x-4">
                <Link to="/user">
                  <Button variant="outline">Student Portal</Button>
                </Link>
                <Link to="/admin">
                  <Button variant="default">Admin Panel</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Navigate Your 
                <span className="text-gradient"> Career Journey</span> 
                with Confidence
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Discover your perfect career path with AI-powered guidance, expert counseling, 
                and personalized recommendations tailored to your unique skills and aspirations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/user">
                  <Button variant="hero" size="xl" className="w-full sm:w-auto group">
                    Start Your Journey
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button variant="outline" size="xl" className="w-full sm:w-auto">
                  Watch Demo
                </Button>
              </div>
            </div>
            <div className="fade-in-delay">
              <img 
                src={heroImage} 
                alt="Career Compass Hero" 
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center fade-in">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold mb-4">Why Choose Career Compass?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide comprehensive career guidance tools and expert support to help you make informed decisions about your future.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="career-card-glow p-6 text-center fade-in">
                <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="fade-in">
            <h2 className="text-4xl font-bold mb-6">Ready to Discover Your Path?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of students who have found their perfect career match with Career Compass.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/user">
                <Button variant="secondary" size="xl" className="group">
                  Get Started Free
                  <Target className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                </Button>
              </Link>
              <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20"></div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Compass className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-gradient">Career Compass</span>
            </div>
            <div className="flex items-center space-x-6 text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Support</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
            <p>&copy; 2024 Career Compass. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;