import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WorkLog from "../components/WorkLog";
import Proof from "../components/Proof";
import Process from "../components/Process";
import Pricing from "../components/Pricing";
import About from "../components/About";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Proof />
        <WorkLog />
        <Process />
        <Pricing />
        <About />
        <CTA />
      </main>
      <a
        href="#intake-form"
        className="sm:hidden fixed bottom-4 left-4 right-4 z-40 inline-flex items-center justify-center bg-forest text-cream text-sm font-semibold py-3 rounded-sm shadow-[0_8px_24px_rgba(27,67,50,0.28)]"
      >
        Start your project
      </a>
      <Footer />
    </>
  );
}
