

import BestSeller from "@/components/BestSeller/BestSeller";
import CallToAction from "@/components/CallToAction/CallToAction";
import Enquiry from "@/components/enquiry/Enquiry";
import Hero from "@/components/Hero/Hero";
import Stats from "@/components/Stats/Stats";

export default function Home() {
  return (
    <>
      <div className="bg-gray-100">
        <Hero />
        <BestSeller />
        <Stats />
        <CallToAction />
        <Enquiry />
      </div>
    </>
  );
}
