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
  BookOpen, 
  Video, 
  FileText, 
  Link as LinkIcon,
  ArrowLeft,
  Edit,
  Trash2,
  Eye,
  Download
} from "lucide-react";
import { Link } from "react-router-dom";

const ManageResources = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [resources, setResources] = useState([
    {
      id: 1,
      title: "Software Engineering Career Guide",
      description: "Complete guide to starting and advancing your career in software engineering",
      category: "Career Guide",
      type: "PDF",
      author: "Tech Career Institute",
      uploadDate: "2024-01-15",
      downloads: 1247,
      size: "2.5 MB",
      status: "Published"
    },
    {
      id: 2,
      title: "Interview Preparation Masterclass",
      description: "Video series covering technical and behavioral interview preparation",
      category: "Interview Prep",
      type: "Video",
      author: "Dr. Sarah Chen",
      uploadDate: "2024-01-20",
      downloads: 892,
      size: "450 MB",
      status: "Published"
    },
    {
      id: 3,
      title: "Resume Templates Collection",
      description: "Professional resume templates for various industries and experience levels",
      category: "Resume",
      type: "Template",
      author: "Career Design Team",
      uploadDate: "2024-01-25",
      downloads: 2156,
      size: "15 MB",
      status: "Published"
    },
    {
      id: 4,
      title: "Data Science Roadmap 2024",
      description: "Step-by-step guide to becoming a data scientist with latest trends and skills",
      category: "Career Guide",
      type: "Article",
      author: "Analytics Pro",
      uploadDate: "2024-02-01",
      downloads: 734,
      size: "1.2 MB",
      status: "Draft"
    },
    {
      id: 5,
      title: "Salary Negotiation Strategies",
      description: "Expert tips and scripts for successful salary negotiations",
      category: "Career Development",
      type: "PDF",
      author: "Michael Rodriguez",
      uploadDate: "2024-02-05",
      downloads: 567,
      size: "1.8 MB",
      status: "Published"
    },
    {
      id: 6,
      title: "LinkedIn Optimization Course",
      description: "How to optimize your LinkedIn profile for maximum visibility and opportunities",
      category: "Personal Branding",
      type: "Video",
      author: "Emily Thompson",
      uploadDate: "2024-02-10",
      downloads: 423,
      size: "280 MB",
      status: "Published"
    }
  ]);

  const categories = ["All", "Career Guide", "Interview Prep", "Resume", "Career Development", "Personal Branding"];

  const [newResource, setNewResource] = useState({
    title: "",
    description: "",
    category: "",
    type: "",
    author: "",
    file: null
  });

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "PDF": return FileText;
      case "Video": return Video;
      case "Article": return BookOpen;
      case "Template": return FileText;
      default: return FileText;
    }
  };

  const handleAddResource = () => {
    const resource = {
      id: resources.length + 1,
      ...newResource,
      uploadDate: new Date().toISOString().split('T')[0],
      downloads: 0,
      size: "1.0 MB", // Mock size
      status: "Draft"
    };
    setResources([...resources, resource]);
    setNewResource({ title: "", description: "", category: "", type: "", author: "", file: null });
  };

  const handleDeleteResource = (id: number) => {
    setResources(resources.filter(resource => resource.id !== id));
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
              <h1 className="text-2xl font-bold">Manage Resources</h1>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="default">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Resource
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Add New Resource</DialogTitle>
                </DialogHeader>
                <div className="grid gap-6 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      value={newResource.title}
                      onChange={(e) => setNewResource({...newResource, title: e.target.value})}
                      placeholder="Enter resource title"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={newResource.description}
                      onChange={(e) => setNewResource({...newResource, description: e.target.value})}
                      placeholder="Enter resource description"
                      rows={3}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="category">Category</Label>
                      <select
                        id="category"
                        value={newResource.category}
                        onChange={(e) => setNewResource({...newResource, category: e.target.value})}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      >
                        <option value="">Select category</option>
                        {categories.slice(1).map(cat => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="type">Type</Label>
                      <select
                        id="type"
                        value={newResource.type}
                        onChange={(e) => setNewResource({...newResource, type: e.target.value})}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      >
                        <option value="">Select type</option>
                        <option value="PDF">PDF</option>
                        <option value="Video">Video</option>
                        <option value="Article">Article</option>
                        <option value="Template">Template</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="author">Author</Label>
                    <Input
                      id="author"
                      value={newResource.author}
                      onChange={(e) => setNewResource({...newResource, author: e.target.value})}
                      placeholder="Enter author name"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="file">File Upload</Label>
                    <Input
                      id="file"
                      type="file"
                      onChange={(e) => setNewResource({...newResource, file: e.target.files?.[0] || null})}
                    />
                  </div>
                  <Button onClick={handleAddResource} className="w-full">
                    Add Resource
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
              placeholder="Search resources..."
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
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid gap-6">
          {filteredResources.map((resource, index) => {
            const TypeIcon = getTypeIcon(resource.type);
            return (
              <Card key={resource.id} className="p-6 fade-in">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="bg-primary-light p-3 rounded-lg">
                      <TypeIcon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-semibold">{resource.title}</h3>
                        <Badge 
                          variant={resource.status === 'Published' ? 'default' : 'secondary'}
                        >
                          {resource.status}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mb-3">{resource.description}</p>
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Badge variant="outline">{resource.category}</Badge>
                        </div>
                        <div className="flex items-center gap-1">
                          <Badge variant="outline">{resource.type}</Badge>
                        </div>
                        <span>By {resource.author}</span>
                        <span>•</span>
                        <span>{resource.uploadDate}</span>
                        <span>•</span>
                        <span>{resource.size}</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Download className="h-4 w-4 text-primary" />
                          <span>{resource.downloads} downloads</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleDeleteResource(resource.id)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No resources found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageResources;