import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Calendar, 
  BookOpen, 
  TrendingUp,
  UserCheck,
  MessageSquare,
  Star,
  ArrowUpRight,
  Activity,
  Clock,
  DollarSign
} from "lucide-react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const metrics = [
    {
      title: "Total Users",
      value: "12,847",
      change: "+12.5%",
      trend: "up",
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "Sessions Booked",
      value: "1,234",
      change: "+8.2%",
      trend: "up",
      icon: Calendar,
      color: "text-green-600"
    },
    {
      title: "Active Counselors",
      value: "67",
      change: "+5.1%",
      trend: "up",
      icon: UserCheck,
      color: "text-purple-600"
    },
    {
      title: "Revenue",
      value: "$45,280",
      change: "+15.3%",
      trend: "up",
      icon: DollarSign,
      color: "text-emerald-600"
    }
  ];

  const recentSessions = [
    {
      student: "Alex Johnson",
      counselor: "Dr. Sarah Chen",
      time: "2:00 PM",
      status: "Completed",
      rating: 5
    },
    {
      student: "Maria Garcia",
      counselor: "Michael Rodriguez",
      time: "3:30 PM",
      status: "In Progress",
      rating: null
    },
    {
      student: "James Wilson",
      counselor: "Dr. Emily Thompson",
      time: "4:00 PM",
      status: "Scheduled",
      rating: null
    },
    {
      student: "Lisa Park",
      counselor: "James Wilson",
      time: "4:30 PM",
      status: "Scheduled",
      rating: null
    }
  ];

  const topCounselors = [
    {
      name: "Dr. Sarah Chen",
      sessions: 45,
      rating: 4.9,
      revenue: "$5,400"
    },
    {
      name: "Michael Rodriguez",
      sessions: 38,
      rating: 4.8,
      revenue: "$5,700"
    },
    {
      name: "Dr. Emily Thompson",
      sessions: 42,
      rating: 4.9,
      revenue: "$5,460"
    }
  ];

  const recentActivities = [
    { action: "New user registration", user: "Alex Johnson", time: "5 min ago" },
    { action: "Session completed", user: "Maria Garcia", time: "15 min ago" },
    { action: "Counselor profile updated", user: "Dr. Sarah Chen", time: "1 hour ago" },
    { action: "Resource added", user: "Admin", time: "2 hours ago" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <div className="flex items-center space-x-4">
              <Link to="/admin/resources">
                <Button variant="outline">Manage Resources</Button>
              </Link>
              <Link to="/admin/counselors">
                <Button variant="outline">Manage Counselors</Button>
              </Link>
              <Link to="/">
                <Button variant="ghost">Back to Home</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <Card key={index} className="metric-card fade-in">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{metric.title}</p>
                  <div className="flex items-center gap-2">
                    <p className="text-3xl font-bold">{metric.value}</p>
                    <Badge 
                      variant="secondary" 
                      className={`${
                        metric.trend === 'up' ? 'bg-success/10 text-success' : 'bg-destructive/10 text-destructive'
                      }`}
                    >
                      {metric.change}
                    </Badge>
                  </div>
                </div>
                <metric.icon className={`h-8 w-8 ${metric.color}`} />
              </div>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Recent Sessions */}
            <Card className="p-6 fade-in">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold">Recent Sessions</h2>
                <Button variant="outline" size="sm">
                  View All
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="space-y-4">
                {recentSessions.map((session, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold">
                        {session.student.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-medium">{session.student}</p>
                        <p className="text-sm text-muted-foreground">with {session.counselor}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          {session.time}
                        </div>
                        {session.rating && (
                          <div className="flex items-center gap-1 mt-1">
                            {[...Array(session.rating)].map((_, i) => (
                              <Star key={i} className="h-3 w-3 text-warning fill-current" />
                            ))}
                          </div>
                        )}
                      </div>
                      <Badge 
                        variant={
                          session.status === 'Completed' ? 'default' :
                          session.status === 'In Progress' ? 'secondary' : 'outline'
                        }
                      >
                        {session.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Top Counselors */}
            <Card className="p-6 fade-in">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold">Top Performing Counselors</h2>
                <Button variant="outline" size="sm">
                  View All
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="space-y-4">
                {topCounselors.map((counselor, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="text-2xl font-bold text-primary">#{index + 1}</div>
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold">
                        {counselor.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-semibold">{counselor.name}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>{counselor.sessions} sessions</span>
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 text-warning fill-current" />
                            {counselor.rating}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-success">{counselor.revenue}</p>
                      <p className="text-sm text-muted-foreground">This month</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="p-6 fade-in">
              <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link to="/admin/resources">
                  <Button variant="outline" className="w-full justify-start">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Add Resource
                  </Button>
                </Link>
                <Link to="/admin/counselors">
                  <Button variant="outline" className="w-full justify-start">
                    <UserCheck className="mr-2 h-4 w-4" />
                    Add Counselor
                  </Button>
                </Link>
                <Button variant="outline" className="w-full justify-start">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Send Announcement
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <TrendingUp className="mr-2 h-4 w-4" />
                  View Analytics
                </Button>
              </div>
            </Card>

            {/* Recent Activity */}
            <Card className="p-6 fade-in">
              <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-primary-light p-2 rounded-lg">
                      <Activity className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{activity.user}</p>
                      <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* System Status */}
            <Card className="p-6 fade-in">
              <h3 className="text-lg font-semibold mb-4">System Status</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Server Status</span>
                  <Badge variant="secondary" className="bg-success/10 text-success">
                    Online
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Database</span>
                  <Badge variant="secondary" className="bg-success/10 text-success">
                    Healthy
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">API Response</span>
                  <Badge variant="secondary" className="bg-success/10 text-success">
                    Fast
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Last Backup</span>
                  <span className="text-xs text-muted-foreground">2 hours ago</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;