import Contact from '@/components/sections/Contact';
import Hero from '@/components/sections/homepage/Hero';
import HistoricStakes from '@/components/sections/homepage/HistoricStakes';
import Mission from '@/components/sections/homepage/Mission';
import Tournament from '@/components/sections/homepage/Tournament';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <HistoricStakes />
      <Tournament />
      <Mission />
      <Contact />
    </div>
  );
}
