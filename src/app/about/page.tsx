import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features"
import HowFixMateWorks from "@/components/HowFixMateWorks";
import GetStarted from "@/components/GetStarted";
import Footer from "@/components/Footer";
import { SubHero } from "@/components/SubHero";
import { GlobeDemo } from "@/components/GlobeDemo";
import AboutFixMate from "@/components/AboutFixMate";

export default function About() {
  return (
    <div className="">
      <Navbar/>
<br />
<br />

<AboutFixMate/>
     <Features/>
     <SubHero/>
     <HowFixMateWorks/>
     <GlobeDemo/>
     <GetStarted/>
     <Footer/>
    </div>
  );
}

