import {
  futuristicCityImg,
  digitalForestImg,
  digitalLandscapeImg,
} from "@/public/assets";
import Image from "next/image";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import SectionTitle from "./SectionTitle";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="The Project" titleNo="03" />
      {/* ============ project One Start here ================ */}
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
            <div>
              <Image
                className="w-full h-full object-contain"
                src={futuristicCityImg}
                alt="Illustration-of-a-futuristic-city-skyline-where-large-holographic-screens-showcase-a-variety-of-NFT-artworks-The-screens-float-above-the-buildings-an"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">NFT & Metaverse</h3>
            </div>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
              At Tokenhiro, we help our patners to build Metaverse ecosystem by
              providing them all the infrastructure needed, We do provide
              consulting and we builds for you technical solition for your
              metaverse project, incluting start to finish deployment for NFT,
              interface, marketplace listing, game integration and much more.{" "}
              <br />
              We also help partners to connect with thier community by providing
              seamless, secure and easy login method that can be integrated with
              any metaverse project like : <br />
              <span className="text-textGreen">O-auth</span> and then make the
              purchage using <span className="text-textGreen">stripe</span>.
              <br />
              <span className="text-textGreen">Account Abstraction</span> and
              then make the app login using <br />
              <span className="text-textGreen">Integrated Smart Wallet</span> so
              users do not need any external wallet.
              <br />
              <span className="text-textGreen">Communication Channel</span> by
              setting up for them{" "}
              <span className="text-textGreen">Telegram & Discord</span>.
              <br />
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Audit Ready</li>
              <li>NFT & Metaverse</li>
              <li>Smart Wallet</li>
              <li>Listing</li>
              <li>Account Abstraction</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://youtu.be/"
                target="_blank"
              >
                <AiOutlineYoutube />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://fiverr.com/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project One End here ================== */}
        {/* ============ project Two Start here ================ */}
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://www.google.com/"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={digitalForestImg}
                alt="Illustration-of-a-digital-forest,-where-trees-have-leaves-made-of-shimmering-ERC-20-tokens.-The-forest-floor-is-illuminated-by-the-glow-of-the-Ethereum"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">DeFi, ICO & Token Launch</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md xl:-mr-16">
              We provide to our partners the best Infrastructure for launching
              their DeFi projects by writing audit ready smart contracts that
              feet with their requiements. We also providing support to design
              the tokenonimics launch it in the best condition and setting up
              launchpads and ICO for them. <br />
              <span className="text-textGreen">We trully belive</span> that any
              project is unique and need a particular attention, so we{" "}
              <span className="text-textGreen">
                keep engaging with our partners
              </span>{" "}
              in each step of the process to make sure that the project is a
              true success.
              <br />
              We can deploy{" "}
              <span className="text-textGreen">Any kind of token</span> on{" "}
              <span className="text-textGreen">Any Blockchain</span>
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Defi</li>
              <li>Stablecoin</li>
              <li>Liquidity Pool</li>
              <li>ICO</li>
              <li>Launchpad</li>
              <li>Consulting</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://youtu.be/"
                target="_blank"
              >
                <AiOutlineYoutube />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://www.google.com/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Two End here ================== */}
        {/* ============ project Three Start here ============== */}
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://amazon.com"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={digitalLandscapeImg}
                alt="Illustration-of-a-digital-landscape-representing-the-Ethereum-network.-Floating-in-this-space-are-various-ERC-20-tokens,-each-with-its-unique-design"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Custom Services</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md">
              Reach us by mail or on fiverr, we can provide a wild range of
              custom services <span className="text-textGreen">Email-us</span>{" "}
              and{" "}
              <span className="text-textGreen">
                Tells us more about You project
              </span>
              .
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://youtube.com/"
                target="_blank"
              >
                <AiOutlineYoutube />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://amazon.com/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Three End here ================== */}
      </div>
    </section>
  );
};

export default Projects;
