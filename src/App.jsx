import { useEffect, useState } from "react";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import VisionMission from "./components/sections/VisionMission";
import Services from "./components/sections/Services";
import CoreCompetency from "./components/sections/CoreCompetency";
import Partners from "./components/sections/Partners";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import Testimonials from "./components/sections/Testimonials";
import CTA from "./components/sections/CTA";
import Contact from "./components/sections/Contact";
import ServiceDetailPage from "./components/sections/ServiceDetailPage";
import { getServiceBySlug } from "./data/servicesData";

function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const bar = document.getElementById("scroll-progress");
    const onScroll = () => {
      const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      if (bar) bar.style.width = pct + "%";
    };

    const onRouteChange = () => setPath(window.location.pathname);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("popstate", onRouteChange);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("popstate", onRouteChange);
    };
  }, []);

  const isServiceRoute = path.startsWith("/services/");
  const serviceSlug = isServiceRoute ? path.replace("/services/", "") : null;
  const activeService = serviceSlug ? getServiceBySlug(serviceSlug) : null;

  return (
    <div className="App" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <div id="scroll-progress" />
      <Navbar />
      {activeService ? (
        <div className="pt-20">
          <ServiceDetailPage service={activeService} />
        </div>
      ) : isServiceRoute ? (
        <main className="pt-20 px-6 md:px-12 min-h-[60vh] flex items-center">
          <div
            className="max-w-3xl mx-auto rounded-[30px] p-10 text-center"
            style={{
              background: "rgba(255,255,255,0.92)",
              border: "1px solid var(--line)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <div className="section-label">Service Not Found</div>
            <h1 className="font-display text-6xl mt-4" style={{ color: "var(--navy)" }}>
              THIS SERVICE PAGE IS <span className="text-gold-gradient">UNAVAILABLE</span>
            </h1>
            <p className="mt-5 text-base" style={{ color: "var(--steel)" }}>
              The requested service could not be found. Please return to the services section to explore the available categories.
            </p>
            <a href="/#services" className="btn-primary mt-8 text-sm py-3 px-6">
              Back To Services
            </a>
          </div>
        </main>
      ) : (
        <main className="pt-20">
          <Hero />
          <About />
          <VisionMission />
          <Services />
          <CoreCompetency />
          <Partners />
          <WhyChooseUs />
          {/* <Testimonials /> */}
          <CTA />
          <Contact />
        </main>
      )}
      <Footer />
    </div>
  );
}

export default App;
