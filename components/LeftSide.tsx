import { TbBrandGithub } from "react-icons/tb";
import { SlPaperPlane, SlSocialTwitter, SlSocialYoutube } from "react-icons/sl";
import {
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialInstagram,
} from "react-icons/sl";

const LeftSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-white">
      <div className="flex flex-col gap-4">
        <a href="https://www.twitter.com/ladybonkj_inu" target="_blank">
          <span className="w-10 h-10 text-xl bg-[#f1b3e0] rounded-full inline-flex items-center justify-center hover:text-black cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <SlSocialTwitter />
          </span>
        </a>
        <a href="https://tm.me" target="_blank">
          <span className="w-10 h-10 text-xl bg-[#f1b3e0] rounded-full inline-flex items-center justify-center hover:text-black cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <SlPaperPlane />
          </span>
        </a>
      </div>
      <div className="w-[2px] h-32 bg-[#f1b3e0]"></div>
    </div>
  );
};

export default LeftSide;
