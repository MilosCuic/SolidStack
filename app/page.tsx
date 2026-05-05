import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ProblemSolution from '@/components/ProblemSolution';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Values from '@/components/Values';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <ProblemSolution />
      <Services />
      <Process />
      <Values />
      <Contact />
      <Footer />
    </main>
  );
}
