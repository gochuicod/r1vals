import { Button } from '@/components/ui/Button';

export default function ComponentShowcasePage() {
  return (
    <div className="py-10 px-10 font-sans min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-center mb-16 text-gray-800 uppercase tracking-widest">
        Component Showcase
      </h1>

      <div className="mb-12 p-8 bg-white rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-xl font-bold mb-6 text-gray-700 border-b pb-2">
          Buttons: All Variants
        </h2>

        <div className="flex flex-col md:flex-row md:flex-wrap gap-6 md:gap-10">
          <Button variant="default">JOIN US</Button>
          <Button variant="default" className="!text-h6 text-brandRed-textBtn">Secure my Spot</Button>
          <Button variant="protocol" size="protocol">7x7 PROTOCOL: ASIA’S LARGEST</Button>


        </div>


      </div>





    </div>
  );
}
