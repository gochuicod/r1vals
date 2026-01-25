import Hero from '@/components/sections/Hero';
import Contact from '@/components/sections/Contact';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />

      <Contact />
    </div>
  );
}
