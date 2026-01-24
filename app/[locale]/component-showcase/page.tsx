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

        <div className="flex flex-col gap-8 md:flex-row md:flex-wrap md:gap-10">
          <div className="flex flex-col gap-2 items-start">
            <span className="text-xs text-gray-500 font-mono">Default Variant</span>
            <Button variant="default">JOIN US</Button>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <span className="text-xs text-gray-500 font-mono">Default Variant (Custom Text Style)</span>
            <Button variant="default" className="!text-h6 text-brandRed-textBtn">Secure my Spot</Button>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <span className="text-xs text-gray-500 font-mono">Protocol Variant</span>
            <Button variant="protocol">7x7 PROTOCOL: ASIA’S LARGEST</Button>
          </div>
        </div>

      </div>




    </div>
  );
}
