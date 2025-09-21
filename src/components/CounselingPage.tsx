import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { 
  Star, 
  MapPin, 
  Clock, 
  Calendar as CalendarIcon,
  ArrowLeft,
  Video,
  Phone,
  MessageCircle,
  Award,
  Users,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const CounselingPage = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedCounselor, setSelectedCounselor] = useState<any>(null);

  const counselors = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      title: "Senior Career Counselor",
      specialization: "Technology & Engineering",
      experience: "8 years",
      rating: 4.9,
      reviews: 127,
      location: "San Francisco, CA",
      avatar: "/api/placeholder/150/150",
      bio: "Specializes in tech career transitions and startup environments. Former software engineer turned career coach.",
      education: ["PhD in Psychology", "MS Computer Science"],
      languages: ["English", "Mandarin"],
      sessionTypes: ["Video Call", "Phone Call", "In-Person"],
      price: "$120/hour",
      availability: "Mon-Fri 9AM-6PM PST",
      expertise: ["Career Transition", "Tech Industry", "Leadership Development", "Interview Prep"]
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      title: "Executive Career Coach",
      specialization: "Business & Leadership",
      experience: "12 years",
      rating: 4.8,
      reviews: 89,
      location: "New York, NY",
      avatar: "/api/placeholder/150/150",
      bio: "Executive coach with extensive experience in Fortune 500 companies. Helps professionals advance to leadership roles.",
      education: ["MBA Harvard Business School", "BA Economics"],
      languages: ["English", "Spanish"],
      sessionTypes: ["Video Call", "Phone Call"],
      price: "$150/hour",
      availability: "Mon-Sat 8AM-8PM EST",
      expertise: ["Executive Coaching", "Leadership", "Business Strategy", "Salary Negotiation"]
    },
    {
      id: 3,
      name: "Dr. Emily Thompson",
      title: "Career Development Specialist",
      specialization: "Healthcare & Life Sciences",
      experience: "10 years",
      rating: 4.9,
      reviews: 156,
      location: "Boston, MA",
      avatar: "/api/placeholder/150/150",
      bio: "Former healthcare executive with deep understanding of medical and research career paths.",
      education: ["PhD in Public Health", "MD"],
      languages: ["English", "French"],
      sessionTypes: ["Video Call", "Phone Call", "In-Person"],
      price: "$130/hour",
      availability: "Tue-Sat 10AM-7PM EST",
      expertise: ["Healthcare Careers", "Research Positions", "Medical Field", "Academia"]
    },
    {
      id: 4,
      name: "James Wilson",
      title: "Creative Industries Coach",
      specialization: "Design & Creative Arts",
      experience: "6 years",
      rating: 4.7,
      reviews: 73,
      location: "Los Angeles, CA",
      avatar: "/api/placeholder/150/150",
      bio: "Creative professional turned coach, helping artists and designers build sustainable careers.",
      education: ["MFA Design", "BA Fine Arts"],
      languages: ["English"],
      sessionTypes: ["Video Call", "In-Person"],
      price: "$100/hour",
      availability: "Mon-Fri 11AM-7PM PST",
      expertise: ["Creative Careers", "Portfolio Development", "Freelancing", "Design Industry"]
    },
    {
      id: 5,
      name: "Lisa Park",
      title: "Entry-Level Career Advisor",
      specialization: "Recent Graduates & Students",
      experience: "5 years",
      rating: 4.8,
      reviews: 94,
      location: "Chicago, IL",
      avatar: "/api/placeholder/150/150",
      bio: "Specializes in helping recent graduates and career changers navigate their first professional roles.",
      education: ["MS Career Counseling", "BA Psychology"],
      languages: ["English", "Korean"],
      sessionTypes: ["Video Call", "Phone Call"],
      price: "$85/hour",
      availability: "Mon-Sun 9AM-9PM CST",
      expertise: ["Entry Level", "Resume Building", "Interview Skills", "Career Exploration"]
    },
    {
      id: 6,
      name: "Robert Kumar",
      title: "Finance & Consulting Advisor",
      specialization: "Finance & Consulting",
      experience: "9 years",
      rating: 4.9,
      reviews: 112,
      location: "Boston, MA",
      avatar: "/api/placeholder/150/150",
      bio: "Former investment banker and management consultant with expertise in high-stakes career decisions.",
      education: ["MBA Wharton", "CFA"],
      languages: ["English", "Hindi"],
      sessionTypes: ["Video Call", "Phone Call"],
      price: "$140/hour",
      availability: "Mon-Fri 7AM-7PM EST",
      expertise: ["Finance", "Consulting", "Investment Banking", "Case Interview Prep"]
    }
  ];

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/user">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Dashboard
                </Button>
              </Link>
              <h1 className="text-2xl font-bold">Career Counseling</h1>
            </div>
            <Button variant="outline">
              <CalendarIcon className="h-4 w-4 mr-2" />
              My Sessions
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 fade-in">
          <h2 className="text-4xl font-bold mb-4">Connect with Expert Career Counselors</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get personalized guidance from industry professionals who understand your career goals and challenges.
          </p>
        </div>

        {/* Counselors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {counselors.map((counselor, index) => (
            <Card key={counselor.id} className="profile-card fade-in">
              <div className="text-center mb-4">
                <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {counselor.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-semibold mb-1">{counselor.name}</h3>
                <p className="text-primary font-medium mb-2">{counselor.title}</p>
                <div className="flex items-center justify-center gap-1 mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < Math.floor(counselor.rating) ? 'text-warning fill-current' : 'text-muted-foreground'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground ml-2">
                    {counselor.rating} ({counselor.reviews} reviews)
                  </span>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <Award className="h-4 w-4 text-primary" />
                  <span>{counselor.specialization}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>{counselor.experience} experience</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>{counselor.location}</span>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex flex-wrap gap-1 mb-3">
                  {counselor.expertise.slice(0, 3).map((skill, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                  {counselor.expertise.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{counselor.expertise.length - 3}
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {counselor.bio}
                </p>
              </div>

              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-semibold text-primary">{counselor.price}</span>
                <div className="flex gap-1">
                  {counselor.sessionTypes.includes("Video Call") && (
                    <Badge variant="outline" className="text-xs">
                      <Video className="h-3 w-3 mr-1" />
                      Video
                    </Badge>
                  )}
                  {counselor.sessionTypes.includes("Phone Call") && (
                    <Badge variant="outline" className="text-xs">
                      <Phone className="h-3 w-3 mr-1" />
                      Phone
                    </Badge>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      variant="default" 
                      className="w-full"
                      onClick={() => setSelectedCounselor(counselor)}
                    >
                      Schedule Session
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>Schedule Session with {counselor.name}</DialogTitle>
                    </DialogHeader>
                    
                    <div className="grid md:grid-cols-2 gap-8 p-6">
                      {/* Counselor Details */}
                      <div>
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white text-xl font-bold">
                            {counselor.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold">{counselor.name}</h3>
                            <p className="text-primary">{counselor.title}</p>
                            <div className="flex items-center gap-1 mt-1">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`h-4 w-4 ${i < Math.floor(counselor.rating) ? 'text-warning fill-current' : 'text-muted-foreground'}`} 
                                />
                              ))}
                              <span className="text-sm text-muted-foreground ml-1">
                                {counselor.rating}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4 mb-6">
                          <div>
                            <h4 className="font-semibold mb-2">About</h4>
                            <p className="text-muted-foreground text-sm">{counselor.bio}</p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-2">Expertise</h4>
                            <div className="flex flex-wrap gap-2">
                              {counselor.expertise.map((skill, idx) => (
                                <Badge key={idx} variant="outline">{skill}</Badge>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-2">Education</h4>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              {counselor.education.map((edu, idx) => (
                                <li key={idx} className="flex items-center gap-2">
                                  <CheckCircle className="h-3 w-3 text-success" />
                                  {edu}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-2">Session Options</h4>
                            <div className="flex flex-wrap gap-2">
                              {counselor.sessionTypes.map((type, idx) => (
                                <Badge key={idx} variant="secondary">{type}</Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Booking Section */}
                      <div>
                        <div className="mb-6">
                          <h4 className="font-semibold mb-4">Select Date</h4>
                          <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            className="rounded-lg border"
                          />
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold mb-4">Available Times</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {timeSlots.map((time, idx) => (
                              <Button
                                key={idx}
                                variant="outline"
                                size="sm"
                                className="justify-center"
                              >
                                {time}
                              </Button>
                            ))}
                          </div>
                        </div>

                        <div className="border-t pt-4">
                          <div className="flex items-center justify-between mb-4">
                            <span className="font-semibold">Session Fee:</span>
                            <span className="text-xl font-bold text-primary">{counselor.price}</span>
                          </div>
                          <Button variant="hero" className="w-full">
                            Confirm Booking
                          </Button>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
                
                <Button variant="outline" className="w-full">
                  View Profile
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 bg-gradient-card rounded-2xl">
          <h3 className="text-2xl font-bold mb-4">Can't find the right counselor?</h3>
          <p className="text-muted-foreground mb-6">
            Let us help you find the perfect match based on your specific needs and career goals.
          </p>
          <Button variant="hero" size="lg">
            <MessageCircle className="mr-2 h-5 w-5" />
            Get Personalized Recommendations
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CounselingPage;