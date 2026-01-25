import Hero from '@/components/sections/homepage/Hero';
import HistoricStakes from '@/components/sections/homepage/HistoricStakes';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <HistoricStakes />
    </div>
  );
}
