import Hero from '@/components/sections/homepage/Hero';
import HistoricStakes from '@/components/sections/homepage/HistoricStakes';
import Mission from '@/components/sections/homepage/Mission';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <HistoricStakes />
      <Mission />
    </div>
  );
}
