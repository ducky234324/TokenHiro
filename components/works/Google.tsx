import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";
const Google = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Step 2:
        <span className="text-[#f1b3e0] tracking-wide">@LadyBonk</span>
      </h3>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-[#f1b3e0] mt-1">
            <TiArrowForward />
          </span>
          80% of the collected fees will be used in the following way:
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-[#f1b3e0]n mt-1">
            <TiArrowForward />
          </span>
          BURN $LBONK
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-[#f1b3e0] mt-1">
            <TiArrowForward />
          </span>
          BUY $BERN
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-[#f1b3e0] mt-1">
            <TiArrowForward />
          </span>
          Distribute $BERN to $LBONK holder
        </li>
      </ul>
    </motion.div>
  );
};

export default Google;
