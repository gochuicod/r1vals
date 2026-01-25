import { Button } from '@/components/ui/Button';
import { HighlightedHeading } from '@/components/ui/HighlightedHeading';
import { HighlightCard } from '@/components/ui/HighlightCard';
import { FeatureCard } from '@/components/ui/FeatureCard';
import FeatureCardFrame1 from '@/components/ui/feature-card-1.svg';

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
            <Button variant="protocol" className='text-[35px]'>7x7 PROTOCOL: ASIA’S LARGEST</Button>
          </div>
        </div>



      </div>

    <div className="mb-12 p-8 bg-white rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-xl font-bold mb-6 text-gray-700 border-b pb-2">
          Highlighted Heading
        </h2>

        <div className="flex flex-col gap-8 md:flex-row md:flex-wrap md:gap-10">
          <div className="flex flex-col gap-2 items-start">
            <span className="text-xs text-gray-500 font-mono">Variant 1 Red</span>
            <HighlightedHeading
              text="THE STAGE IS SET.."
              highlight="SET"
              size="xl"
              highlightColor="red"
              align="left"
            />
          </div>

        <div className="flex flex-col gap-2 items-start">
            <span className="text-xs text-gray-500 font-mono">Variant 2 Blue</span>
            <HighlightedHeading
              text="THE STAKES ARE HISTORIC.."
              highlight="HISTORIC"
              size="xl"
              highlightColor="blue"
              align="left"
            />
          </div>
        </div>

    </div>

      <div className="mb-12 p-8 bg-white rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-xl font-bold mb-6 text-gray-700 border-b pb-2">
          Highlight Cards: All Variants (Red & Blue)
        </h2>

        <div className="flex flex-col gap-8 md:flex-row md:flex-wrap md:gap-10">
          <div className="w-full flex flex-col gap-10 justify-center items-center">
            <div className="flex flex-wrap md:flex-row gap-10 items-center justify-center">
                <HighlightCard
                imageSrc="/highlight_card/community.webp"
                title="CASH AWARDS"
                description="for both players and fans."
                variant="blue" 
                />

                <HighlightCard
                imageSrc="/highlight_card/global.webp"
                title="Youth Mentorship"
                description="and elite football clinics."
                variant="red" 
                />

                <HighlightCard
                imageSrc="/highlight_card/global.webp"
                title="Community Charity initiatives"
                description="to pay it forward."
                variant="blue" 
                />

                <HighlightCard
                imageSrc="/highlight_card/global.webp"
                title="Global Expansion "
                description="creating international pathways for talent."
                variant="red" 
                />
            </div>    
         </div>
        </div>
        
      </div>

    <div className="mb-12 p-8 bg-black rounded-xl shadow-sm border border-gray-200">
      <h2 className="text-xl font-bold mb-6 text-white border-b pb-2">
        Feature Cards: All Variants
      </h2>

      <div className="w-full flex flex-col justify-center items-center">
        <div className="flex flex-col flex-wrap gap-0 items-center justify-center">
          
          {/* Example 1: Red Variant */}
          <FeatureCard
            title="Winner-Take-All"
            description="$100,000 USD on the line. One team takes the glory; the rest take notes."
            imageSrc="/highlight_card/cash-awards.webp"
            backgroundImg="/ui/feature_card/featured-card-1.svg"
            mobileBackgroundImg="/ui/feature_card/featured-card-1-mobile.svg"
          />

          {/* Example 2: Blue Variant */}
          <FeatureCard
            title="Star Power"
            description="Featuring elite professionals and global celebrities."
            imageSrc="/highlight_card/cash-awards.webp"
            backgroundImg="/ui/feature_card/featured-card-2.svg"
            mobileBackgroundImg="/ui/feature_card/featured-card-2-mobile.svg"
            
          />
          
                    {/* Example 2: Blue Variant */}
          <FeatureCard
            title="Winner-Take-All"
            description="Built to be the #1 most-streamed 7-aside competition worldwide."
            imageSrc="/highlight_card/cash-awards.webp"
            backgroundImg="/ui/feature_card/featured-card-3.svg"
            mobileBackgroundImg="/ui/feature_card/featured-card-3-mobile.svg"
          />
        </div>    
      </div>
    </div>
    </div>
  );
}
