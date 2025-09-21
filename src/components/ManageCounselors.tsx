import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { 
  Plus, 
  Search, 
  Filter, 
  Star, 
  MapPin, 
  Calendar,
  ArrowLeft,
  Edit,
  Trash2,
  Eye,
  Users,
  DollarSign,
  Clock
} from "lucide-react";
import { Link } from "react-router-dom";

const ManageCounselors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialization, setSelectedSpecialization] = useState("All");

  const [counselors, setCounselors] = useState([
    {
      id: 1,
      name: "Dr. Sarah Chen",
      email: "sarah.chen@careercompass.com",
      specialization: "Technology & Engineering",
      experience: "8 years",
      rating: 4.9,
      reviews: 127,
      location: "San Francisco, CA",
      education: "PhD in Psychology, MS Computer Science",
      languages: "English, Mandarin",
      sessionTypes: ["Video Call", "Phone Call", "In-Person"],
      price: 120,
      totalSessions: 245,
      monthlyRevenue: 5400,
      availability: "Mon-Fri 9AM-6PM PST",
      status: "Active",
      joinDate: "2023-01-15"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      email: "michael.rodriguez@careercompass.com",
      specialization: "Business & Leadership",
      experience: "12 years",
      rating: 4.8,
      reviews: 89,
      location: "New York, NY",
      education: "MBA Harvard Business School, BA Economics",
      languages: "English, Spanish",
      sessionTypes: ["Video Call", "Phone Call"],
      price: 150,
      totalSessions: 198,
      monthlyRevenue: 5700,
      availability: "Mon-Sat 8AM-8PM EST",
      status: "Active",
      joinDate: "2023-02-20"
    },
    {
      id: 3,
      name: "Dr. Emily Thompson",
      email: "emily.thompson@careercompass.com",
      specialization: "Healthcare & Life Sciences",
      experience: "10 years",
      rating: 4.9,
      reviews: 156,
      location: "Boston, MA",
      education: "PhD in Public Health, MD",
      languages: "English, French",
      sessionTypes: ["Video Call", "Phone Call", "In-Person"],
      price: 130,
      totalSessions: 312,
      monthlyRevenue: 5460,
      availability: "Tue-Sat 10AM-7PM EST",
      status: "Active",
      joinDate: "2023-03-10"
    },
    {
      id: 4,
      name: "James Wilson",
      email: "james.wilson@careercompass.com",
      specialization: "Design & Creative Arts",
      experience: "6 years",
      rating: 4.7,
      reviews: 73,
      location: "Los Angeles, CA",
      education: "MFA Design, BA Fine Arts",
      languages: "English",
      sessionTypes: ["Video Call", "In-Person"],
      price: 100,
      totalSessions: 156,
      monthlyRevenue: 3200,
      availability: "Mon-Fri 11AM-7PM PST",
      status: "Active",
      joinDate: "2023-04-05"
    },
    {
      id: 5,
      name: "Lisa Park",
      email: "lisa.park@careercompass.com",
      specialization: "Recent Graduates & Students",
      experience: "5 years",
      rating: 4.8,
      reviews: 94,
      location: "Chicago, IL",
      education: "MS Career Counseling, BA Psychology",
      languages: "English, Korean",
      sessionTypes: ["Video Call", "Phone Call"],
      price: 85,
      totalSessions: 203,
      monthlyRevenue: 2890,
      availability: "Mon-Sun 9AM-9PM CST",
      status: "Inactive",
      joinDate: "2023-05-12"
    }
  ]);

  const specializations = [
    "All", 
    "Technology & Engineering", 
    "Business & Leadership", 
    "Healthcare & Life Sciences", 
    "Design & Creative Arts", 
    "Recent Graduates & Students"
  ];

  const [newCounselor, setNewCounselor] = useState({
    name: "",
    email: "",
    specialization: "",
    experience: "",
    education: "",
    languages: "",
    price: "",
    availability: ""
  });

  const filteredCounselors = counselors.filter(counselor => {
    const matchesSearch = counselor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         counselor.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialization = selectedSpecialization === "All" || counselor.specialization === selectedSpecialization;
    return matchesSearch && matchesSpecialization;
  });

  const handleAddCounselor = () => {
    const counselor = {
      id: counselors.length + 1,
      ...newCounselor,
      price: parseInt(newCounselor.price),
      rating: 0,
      reviews: 0,
      location: "Remote",
      sessionTypes: ["Video Call", "Phone Call"],
      totalSessions: 0,
      monthlyRevenue: 0,
      status: "Active",
      joinDate: new Date().toISOString().split('T')[0]
    };
    setCounselors([...counselors, counselor]);
    setNewCounselor({
      name: "",
      email: "",
      specialization: "",
      experience: "",
      education: "",
      languages: "",
      price: "",
      availability: ""
    });
  };

  const handleDeleteCounselor = (id: number) => {
    setCounselors(counselors.filter(counselor => counselor.id !== id));
  };

  const toggleCounselorStatus = (id: number) => {
    setCounselors(counselors.map(counselor =>
      counselor.id === id
        ? { ...counselor, status: counselor.status === 'Active' ? 'Inactive' : 'Active' }
        : counselor
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/admin">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Dashboard
                </Button>
              </Link>
              <h1 className="text-2xl font-bold">Manage Counselors</h1>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="default">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Counselor
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Add New Counselor</DialogTitle>
                </DialogHeader>
                <div className="grid gap-6 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={newCounselor.name}
                        onChange={(e) => setNewCounselor({...newCounselor, name: e.target.value})}
                        placeholder="Enter full name"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={newCounselor.email}
                        onChange={(e) => setNewCounselor({...newCounselor, email: e.target.value})}
                        placeholder="Enter email address"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="specialization">Specialization</Label>
                      <select
                        id="specialization"
                        value={newCounselor.specialization}
                        onChange={(e) => setNewCounselor({...newCounselor, specialization: e.target.value})}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      >
                        <option value="">Select specialization</option>
                        {specializations.slice(1).map(spec => (
                          <option key={spec} value={spec}>{spec}</option>
                        ))}
                      </select>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="experience">Experience</Label>
                      <Input
                        id="experience"
                        value={newCounselor.experience}
                        onChange={(e) => setNewCounselor({...newCounselor, experience: e.target.value})}
                        placeholder="e.g., 5 years"
                      />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="education">Education</Label>
                    <Textarea
                      id="education"
                      value={newCounselor.education}
                      onChange={(e) => setNewCounselor({...newCounselor, education: e.target.value})}
                      placeholder="Enter education background"
                      rows={2}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="languages">Languages</Label>
                      <Input
                        id="languages"
                        value={newCounselor.languages}
                        onChange={(e) => setNewCounselor({...newCounselor, languages: e.target.value})}
                        placeholder="e.g., English, Spanish"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="price">Hourly Rate ($)</Label>
                      <Input
                        id="price"
                        type="number"
                        value={newCounselor.price}
                        onChange={(e) => setNewCounselor({...newCounselor, price: e.target.value})}
                        placeholder="Enter hourly rate"
                      />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="availability">Availability</Label>
                    <Input
                      id="availability"
                      value={newCounselor.availability}
                      onChange={(e) => setNewCounselor({...newCounselor, availability: e.target.value})}
                      placeholder="e.g., Mon-Fri 9AM-5PM EST"
                    />
                  </div>
                  <Button onClick={handleAddCounselor} className="w-full">
                    Add Counselor
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search counselors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <select
              value={selectedSpecialization}
              onChange={(e) => setSelectedSpecialization(e.target.value)}
              className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
            >
              {specializations.map(spec => (
                <option key={spec} value={spec}>{spec}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Counselors Grid */}
        <div className="grid gap-6">
          {filteredCounselors.map((counselor, index) => (
            <Card key={counselor.id} className="p-6 fade-in">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-6 flex-1">
                  {/* Avatar and Basic Info */}
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-white text-xl font-bold mb-3">
                      {counselor.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <Badge 
                      variant={counselor.status === 'Active' ? 'default' : 'secondary'}
                      className={counselor.status === 'Active' ? 'bg-success text-white' : ''}
                    >
                      {counselor.status}
                    </Badge>
                  </div>

                  {/* Main Info */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-2xl font-semibold mb-1">{counselor.name}</h3>
                        <p className="text-primary font-medium mb-2">{counselor.specialization}</p>
                        <div className="flex items-center gap-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-4 w-4 ${i < Math.floor(counselor.rating) ? 'text-warning fill-current' : 'text-muted-foreground'}`} 
                            />
                          ))}
                          <span className="text-sm text-muted-foreground ml-1">
                            {counselor.rating} ({counselor.reviews} reviews)
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">${counselor.price}/hr</div>
                        <div className="text-sm text-muted-foreground">{counselor.experience}</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span>{counselor.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4 text-primary" />
                          <span>{counselor.availability}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <Users className="h-4 w-4 text-primary" />
                          <span>{counselor.totalSessions} sessions</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <DollarSign className="h-4 w-4 text-success" />
                          <span>${counselor.monthlyRevenue}/month</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-sm">
                          <span className="text-muted-foreground">Joined: </span>
                          <span>{counselor.joinDate}</span>
                        </div>
                        <div className="text-sm">
                          <span className="text-muted-foreground">Languages: </span>
                          <span>{counselor.languages}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {counselor.sessionTypes.map((type, idx) => (
                        <Badge key={idx} variant="outline">{type}</Badge>
                      ))}
                    </div>

                    <div className="text-sm text-muted-foreground">
                      <p><strong>Education:</strong> {counselor.education}</p>
                      <p><strong>Email:</strong> {counselor.email}</p>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-2 ml-4">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => toggleCounselorStatus(counselor.id)}
                    className={counselor.status === 'Active' ? 'text-warning' : 'text-success'}
                  >
                    {counselor.status === 'Active' ? 'Deactivate' : 'Activate'}
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleDeleteCounselor(counselor.id)}
                    className="text-destructive hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredCounselors.length === 0 && (
          <div className="text-center py-12">
            <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No counselors found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageCounselors;