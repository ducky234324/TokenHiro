import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const ReactBD = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Step 1:
        <span className="text-[#f1b3e0] tracking-wide">@LadyBonk</span>
      </h3>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-[#f1b3e0] mt-1">
            <TiArrowForward />
          </span>
          First, we are going to build our own community around $LBONK before we launch.
          There is nothing more important than a supporitve Community
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-[#f1b3e0]n mt-1">
            <TiArrowForward />
          </span>
          Launch with a SPL Token according Token 2022 program gives us the possibility to collect fees.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-[#f1b3e0] mt-1">
            <TiArrowForward />
          </span>
          80% of the fees will be used to benefit the community AND the BONK ecosystem.
        </li>
      </ul>
    </motion.div>
  );
};

export default ReactBD;
