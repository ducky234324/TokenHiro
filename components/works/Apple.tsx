import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Apple = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Step 3:
        <span className="text-[#f1b3e0] tracking-wide">@LadyBonk</span>
      </h3>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-[#f1b3e0] mt-1">
            <TiArrowForward />
          </span>
          How does this benefit the whole Bonk ecosystem and our holders?
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-[#f1b3e0]n mt-1">
            <TiArrowForward />
          </span>
          By buying $BERN we indirectly support $BONK. The $BERN project uses their collected fees to burn BONK and reward their holders.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-[#f1b3e0] mt-1">
            <TiArrowForward />
          </span>
          This will create a Super Ponzi made by the girlfriend of BONK.
        </li>
      </ul>
    </motion.div>
  );
};

export default Apple;
