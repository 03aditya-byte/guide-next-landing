import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LandingPage from "./components/LandingPage";
import UserDashboard from "./components/UserDashboard";
import CareerExplorer from "./components/CareerExplorer";
import CounselingPage from "./components/CounselingPage";
import AdminDashboard from "./components/AdminDashboard";
import ManageResources from "./components/ManageResources";
import ManageCounselors from "./components/ManageCounselors";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/user" element={<UserDashboard />} />
          <Route path="/user/explore" element={<CareerExplorer />} />
          <Route path="/user/counseling" element={<CounselingPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/resources" element={<ManageResources />} />
          <Route path="/admin/counselors" element={<ManageCounselors />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
