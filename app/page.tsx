import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Features from "@/components/Features";
import Demo from "@/components/Demo";
import Story from "@/components/Story";
import Roadmap from "@/components/Roadmap";
import Governance from "@/components/Governance";
import Support from "@/components/Support";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Problem />
      <Features />
      <Demo />
      <Story />
      <Roadmap />
      <Governance />
      <Support />
      <Footer />
    </main>
  );
}
