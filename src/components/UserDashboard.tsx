import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Compass, 
  TrendingUp, 
  Target, 
  BookOpen, 
  Calendar, 
  Award,
  ArrowRight,
  Star,
  Clock
} from "lucide-react";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  const recommendedCareers = [
    {
      title: "Software Engineer",
      match: 95,
      description: "Build innovative software solutions and applications",
      skills: ["Programming", "Problem Solving", "Teamwork"],
      growth: "+22%",
      salary: "$75,000 - $120,000"
    },
    {
      title: "Data Scientist",
      match: 88,
      description: "Analyze complex data to drive business decisions",
      skills: ["Analytics", "Statistics", "Python"],
      growth: "+31%",
      salary: "$80,000 - $130,000"
    },
    {
      title: "UX Designer",
      match: 82,
      description: "Create intuitive and engaging user experiences",
      skills: ["Design", "Research", "Prototyping"],
      growth: "+18%",
      salary: "$65,000 - $110,000"
    }
  ];

  const recentActivities = [
    { action: "Completed skills assessment", time: "2 hours ago", icon: Award },
    { action: "Scheduled counseling session", time: "1 day ago", icon: Calendar },
    { action: "Explored Data Science pathway", time: "3 days ago", icon: BookOpen },
    { action: "Updated profile skills", time: "1 week ago", icon: Target }
  ];

  const stats = [
    { label: "Profile Completion", value: 85, icon: Target },
    { label: "Skills Assessed", value: 12, icon: Award },
    { label: "Pathways Explored", value: 8, icon: Compass },
    { label: "Sessions Attended", value: 3, icon: Calendar }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Compass className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-gradient">Career Compass</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/user/explore">
                <Button variant="outline">Career Explorer</Button>
              </Link>
              <Link to="/user/counseling">
                <Button variant="outline">Counseling</Button>
              </Link>
              <Link to="/">
                <Button variant="ghost">Home</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8 fade-in">
          <h1 className="text-4xl font-bold mb-2">Welcome back, Alex! 👋</h1>
          <p className="text-xl text-muted-foreground">Ready to continue your career journey?</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="metric-card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-primary">
                    {typeof stat.value === 'number' && stat.label.includes('Completion') ? `${stat.value}%` : stat.value}
                  </p>
                </div>
                <stat.icon className="h-8 w-8 text-primary/60" />
              </div>
              {stat.label.includes('Completion') && (
                <div className="mt-3">
                  <Progress value={stat.value} className="h-2" />
                </div>
              )}
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Your Career Compass */}
            <div className="fade-in">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold">Your Career Compass</h2>
                <Link to="/user/explore">
                  <Button variant="outline" className="group">
                    Explore More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
              
              <div className="grid gap-6">
                {recommendedCareers.map((career, index) => (
                  <Card key={index} className="career-card-glow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold">{career.title}</h3>
                          <Badge variant="secondary" className="bg-primary-light text-primary">
                            {career.match}% Match
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-3">{career.description}</p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {career.skills.map((skill, idx) => (
                            <Badge key={idx} variant="outline">{skill}</Badge>
                          ))}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <TrendingUp className="h-4 w-4 text-success" />
                            {career.growth} growth
                          </div>
                          <div>{career.salary}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 ml-4">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < Math.floor(career.match / 20) ? 'text-warning fill-current' : 'text-muted-foreground'}`} 
                          />
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Button variant="default" size="sm">Learn More</Button>
                      <Button variant="outline" size="sm">Save Path</Button>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-8">
                <Link to="/user/explore">
                  <Button variant="hero" size="lg" className="group">
                    Start Your Journey
                    <Compass className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Activity */}
            <Card className="p-6 fade-in">
              <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-primary-light p-2 rounded-lg">
                      <activity.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{activity.action}</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                        <Clock className="h-3 w-3" />
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6 fade-in">
              <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link to="/user/explore">
                  <Button variant="outline" className="w-full justify-start">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Explore Careers
                  </Button>
                </Link>
                <Link to="/user/counseling">
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="mr-2 h-4 w-4" />
                    Book Session
                  </Button>
                </Link>
                <Button variant="outline" className="w-full justify-start">
                  <Award className="mr-2 h-4 w-4" />
                  Take Assessment
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Target className="mr-2 h-4 w-4" />
                  Set Goals
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;