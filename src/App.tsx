import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import People from "./components/People";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import MarsEntryDescent from "./pages/MarsEntryDescent";
import ReusableLaunchVehicles from "./pages/ReusableLaunchVehicles";
import MorphingWing from "./pages/MorphingWing";
import CollaborativeSystems from "./pages/CollaborativeSystems";
import FA18 from "./pages/FA18";
import ManufacturingOptimization from "./pages/ManufacturingOptimization";

const queryClient = new QueryClient();

const HomePage = () => (
  <div>
    <Navigation />
    <Hero />
    <About />
    <Services />
    <Projects />
    <People />
    <Contact />
    <Footer />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/mars-entry-descent" element={<MarsEntryDescent />} />
          <Route path="/projects/reusable-launch-vehicles" element={<ReusableLaunchVehicles />} />
          <Route path="/projects/morphing-wing" element={<MorphingWing />} />
          <Route path="/projects/collaborative-systems" element={<CollaborativeSystems />} />
          <Route path="/projects/fa18" element={<FA18 />} />
          <Route path="/projects/manufacturing-optimization" element={<ManufacturingOptimization />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;