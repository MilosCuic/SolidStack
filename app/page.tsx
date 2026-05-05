import Hero from '@/components/Hero';
import TrustStrip from '@/components/TrustStrip';
import ProblemSolution from '@/components/ProblemSolution';
import Services from '@/components/Services';
import Process from '@/components/Process';
import WhyUs from '@/components/WhyUs';
import Contact from '@/components/Contact';
import LanguageToggle from '@/components/LanguageToggle';

export default function Home() {
  return (
    <main className="min-h-screen">
      <LanguageToggle />
      <Hero />
      <TrustStrip />
      <ProblemSolution />
      <Services />
      <Process />
      <WhyUs />
      <Contact />
    </main>
  );
}
