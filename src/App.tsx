import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import People from "./components/People";
import Contact from "./components/Contact";
import Collaborators from "./components/Collaborators";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import EntryDescent from "./pages/EntryDescent";
import ReusableLaunchVehicles from "./pages/ReusableLaunchVehicles";
import MorphingWing from "./pages/MorphingWing";
import CollaborativeSystems from "./pages/CollaborativeSystems";
import FA18 from "./pages/FA18";
import SoftwareDevelopment from "./pages/SoftwareDevelopment";
import ServiceDetail from "./pages/ServiceDetail";

const queryClient = new QueryClient();

const HomePage = () => {
  // Ensure landing anchor after reload: prefer About section
  useEffect(() => {
    try {
      // Set the hash so URL shows the About anchor
      if (window.location.hash !== '#navigation') {
        window.location.hash = '#navigation';
      }
      // Try to smoothly scroll to About if rendered
      const aboutEl = document.getElementById('navigation');
      if (aboutEl) {
        aboutEl.scrollIntoView({ behavior: 'smooth' });
      }
    } catch (e) {
      // ignore (server-side render or unavailable document)
    }
  }, []);

  return (
    <div>
      <Navigation />
      <Hero />
      <About />
      <Collaborators />
      <Services />
      <Projects />
      <People />
      <Contact />
      <Footer />
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/mars-entry-descent" element={<EntryDescent />} />
          <Route path="/projects/reusable-launch-vehicles" element={<ReusableLaunchVehicles />} />
          <Route path="/projects/morphing-wing" element={<MorphingWing />} />
          <Route path="/projects/collaborative-systems" element={<CollaborativeSystems />} />
          <Route path="/projects/fa18" element={<FA18 />} />
          <Route path="/projects/software-development" element={<SoftwareDevelopment />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;