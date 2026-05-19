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
      <Footer />
    </>
  );
}
