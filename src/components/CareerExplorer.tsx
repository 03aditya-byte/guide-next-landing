import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  TrendingUp, 
  DollarSign, 
  MapPin, 
  Clock,
  Star,
  Filter,
  ArrowLeft,
  Bookmark,
  Share2
} from "lucide-react";
import { Link } from "react-router-dom";

const CareerExplorer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const suggestedSkills = [
    "JavaScript", "Python", "React", "Design", "Analytics", "Communication",
    "Leadership", "Marketing", "Sales", "Writing", "Research", "Teaching"
  ];

  const careerCards = [
    {
      title: "Full Stack Developer",
      company: "Tech Corp",
      location: "San Francisco, CA",
      salary: "$85,000 - $130,000",
      type: "Full-time",
      match: 95,
      description: "Build end-to-end web applications using modern technologies. Work with cross-functional teams to deliver high-quality software solutions.",
      skills: ["JavaScript", "React", "Node.js", "Python", "MongoDB"],
      requirements: ["3+ years experience", "Bachelor's degree", "Portfolio required"],
      growth: "+25%",
      remote: true
    },
    {
      title: "Data Analyst",
      company: "Analytics Pro",
      location: "New York, NY",
      salary: "$65,000 - $95,000",
      type: "Full-time",
      match: 88,
      description: "Analyze complex datasets to provide actionable insights for business decisions. Create visualizations and reports for stakeholders.",
      skills: ["Python", "SQL", "Tableau", "Statistics", "Excel"],
      requirements: ["2+ years experience", "Bachelor's degree", "Statistics background"],
      growth: "+31%",
      remote: false
    },
    {
      title: "UX/UI Designer",
      company: "Design Studio",
      location: "Los Angeles, CA",
      salary: "$70,000 - $110,000",
      type: "Full-time",
      match: 82,
      description: "Create intuitive and visually appealing user interfaces. Conduct user research and usability testing to improve user experience.",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research", "CSS"],
      requirements: ["2+ years experience", "Portfolio required", "Design degree preferred"],
      growth: "+18%",
      remote: true
    },
    {
      title: "Digital Marketing Manager",
      company: "Marketing Plus",
      location: "Chicago, IL",
      salary: "$60,000 - $85,000",
      type: "Full-time",
      match: 76,
      description: "Develop and execute digital marketing strategies across multiple channels. Manage social media, content, and paid advertising campaigns.",
      skills: ["Marketing", "SEO", "Social Media", "Analytics", "Content Creation"],
      requirements: ["3+ years experience", "Marketing degree", "Google Ads certification"],
      growth: "+12%",
      remote: true
    },
    {
      title: "Product Manager",
      company: "Innovation Inc",
      location: "Seattle, WA",
      salary: "$95,000 - $140,000",
      type: "Full-time",
      match: 74,
      description: "Drive product strategy and roadmap. Work with engineering and design teams to deliver features that delight customers.",
      skills: ["Product Strategy", "Analytics", "Leadership", "Communication", "Agile"],
      requirements: ["5+ years experience", "MBA preferred", "Tech background"],
      growth: "+20%",
      remote: true
    },
    {
      title: "Content Writer",
      company: "Content Agency",
      location: "Austin, TX",
      salary: "$45,000 - $65,000",
      type: "Full-time",
      match: 68,
      description: "Create engaging content for blogs, websites, and marketing materials. Research topics and write compelling copy that converts.",
      skills: ["Writing", "Research", "SEO", "Content Strategy", "WordPress"],
      requirements: ["2+ years experience", "Portfolio required", "English degree preferred"],
      growth: "+8%",
      remote: true
    }
  ];

  const filteredCareers = careerCards.filter(career =>
    career.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    career.skills.some(skill => 
      selectedSkills.length === 0 || selectedSkills.includes(skill)
    )
  );

  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev =>
      prev.includes(skill)
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

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
              <h1 className="text-2xl font-bold">Career Explorer</h1>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
              <Button variant="outline" size="sm">
                <Bookmark className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Search and Skills Section */}
        <div className="mb-8 fade-in">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Discover Your Perfect Career</h2>
            <p className="text-lg text-muted-foreground">
              Search by role or select your skills to find personalized career matches
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search for careers, companies, or keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 h-14 text-lg"
            />
          </div>

          {/* Skills Selection */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold mb-4 text-center">Select Your Skills</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {suggestedSkills.map((skill) => (
                <Badge
                  key={skill}
                  variant={selectedSkills.includes(skill) ? "default" : "outline"}
                  className="cursor-pointer hover:scale-105 transition-transform px-4 py-2"
                  onClick={() => toggleSkill(skill)}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold">
            {filteredCareers.length} careers found
            {selectedSkills.length > 0 && ` matching "${selectedSkills.join(", ")}"`}
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Sort by:</span>
            <Button variant="outline" size="sm">Best Match</Button>
          </div>
        </div>

        {/* Career Cards Grid */}
        <div className="grid gap-6">
          {filteredCareers.map((career, index) => (
            <Card key={index} className="career-card-glow fade-in">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Main Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-semibold">{career.title}</h3>
                        <Badge variant="secondary" className="bg-primary-light text-primary">
                          {career.match}% Match
                        </Badge>
                        {career.remote && (
                          <Badge variant="outline" className="text-success border-success">
                            Remote
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-4 text-muted-foreground mb-3">
                        <span className="font-medium">{career.company}</span>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {career.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {career.type}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < Math.floor(career.match / 20) ? 'text-warning fill-current' : 'text-muted-foreground'}`} 
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {career.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {career.skills.map((skill, idx) => (
                      <Badge key={idx} variant="outline" className="hover:bg-primary-light transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-success" />
                      <span className="font-medium">{career.salary}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-primary" />
                      <span>{career.growth} job growth</span>
                    </div>
                    <div className="text-muted-foreground">
                      {career.requirements.length} requirements
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3 lg:w-48">
                  <Button variant="default" className="w-full">
                    Apply Now
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Bookmark className="h-4 w-4 mr-2" />
                    Save Job
                  </Button>
                  <Button variant="ghost" className="w-full">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  <Button variant="ghost" className="w-full text-primary">
                    View Details
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Careers
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CareerExplorer;