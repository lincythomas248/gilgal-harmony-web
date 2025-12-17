import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Beliefs from "./pages/Beliefs";
import Ministries from "./pages/Ministries";
import ScriptureSchool from "./pages/ScriptureSchool";
import ScriptureSchoolCurriculum from "./pages/ScriptureSchoolCurriculum";
import PYPA from "./pages/PYPA";
import PrayerFellowship from "./pages/PrayerFellowship";
import Media from "./pages/Media";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import DevotionsResources from "./pages/DevotionsResources";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/beliefs" element={<Beliefs />} />
          <Route path="/ministries" element={<Ministries />} />
          <Route path="/ministries/scripture-school" element={<ScriptureSchool />} />
          <Route path="/scripture-school/curriculum" element={<ScriptureSchoolCurriculum />} />
          <Route path="/ministries/pypa" element={<PYPA />} />
          <Route path="/prayer-fellowship" element={<PrayerFellowship />} />
          <Route path="/media" element={<Media />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/resources/devotions" element={<DevotionsResources />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
