import { profileImg } from "@/public/assets";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Tokenhiro" titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            🖥️ Blockchain Solutions 🔗 Smart Contract Development 💹 Custom
            Token Creation 🔄 Decentralized Application (DApp) Design
          </p>
          <p>
            At Tokenhiro, we believe in the transformative power of secure smart
            contracts and their potential to redefine how businesses operate in
            the digital realm. As your trusted partner, we merge technological
            prowess with innovative thinking to craft impeccable smart contracts
            tailored to a variety of purposes. <br />
            <br />
            <span className="text-textGreen">Security First: </span>
            In the world of digital assets, security is not an option, it is a
            necessity. Our smart contracts undergo rigorous testing and audits
            to ensure they are watertight against vulnerabilities. <br />
            <span className="text-textGreen">Tailored Solutions: </span>No two
            projects are the same. We take the time to understand your vision
            and requirements, delivering a solution that is uniquely yours.{" "}
            <br />
            <span className="text-textGreen">Innovation at Core: </span>
            In the ever-evolving realm of blockchain, we remain at the forefront
            of technological advancements, ensuring our clients always have
            access to the best the industry has to offer. <br />
            <span className="text-textGreen">End-to-End Service: </span>From
            conceptualization to deployment, our team walks with you at every
            step, ensuring a seamless and rewarding journey. <br />
          </p>
          <p>
            Unlock a world where technology serves your ambition. Dive into the
            future with Tokenhiro, your trusted guide in the realm of smart
            contracts and decentralized applications
          </p>
          <p>
            Here are a few technologies we have been working with recently for
            our partners:
          </p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Smart Contract Deployment on any Blockchain
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Token Creation ERC20, ERC721, ERC1155
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Account Abstraction and Smart Wallet
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Easy to use UI/UX for DApps
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              IPFS and metadata storage
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Smart Contract specific functions like tax, burn, mint, payment
              split, limit supply.
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Stacking, Farming, and Yield Farming, ICO, IDO, NFT Marketplace.
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Artificial Intelligence and Machine Learning integration.
            </li>
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg ">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg h-full object-cover"
                src={profileImg}
                alt="profileImg"
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
