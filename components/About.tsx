import { profileImg } from "@/public/assets";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8 text-[#f1b3e0]"
    >
      <SectionTitle title="About LadyBONK" titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            At LadyBonk, we believe in the power of community. <br /><br />
            BONK! is the number 1 MemeCoin on SOL.
              Why not the Number 1 in the whole crypto space?<br /><br />
            Together with the community we are going to add value to LadyBonk $LBONK, $BONK and $BERN.  <br />
            <br />
            <span className="text-[#f1b3e0]">The Community: </span>
            Our crypto community as a big, supportive family where everyone is helping each other learn, 
            grow, and navigate this exciting new world of the BONK ecosystem. 
            It is like a shared kitchen table where experiences are swapped, problems are solved, and dreams for a decentralized future are cooked up together. <br /><br />
            <span className="text-[#f1b3e0]">The Token: </span>Token 2022 program configured with 3% tax fee. <br />100bn $LBONK for the community, for $BONK and for $BERN.<br />
            We are going to PUMP the Bonk ecosystem to the moon.  
            <br /><br />
            <span className="text-[#f1b3e0]">The Launch: </span>
            Fair launch at any time, revoked Mint authority and burned LP. <br />
            We invite the biggest BONK supporters to join our community<br /><br />
            <span className="text-[#f1b3e0]">The Reflections </span> 3% fee of every trade will be used to buy, burn and give back to the community <br />
          </p>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg ">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg h-full object-cover"
                src={profileImg}
                alt="profileImg"
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-[#f1b3e0]/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 border-2 border-[#f1b3e0] rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
