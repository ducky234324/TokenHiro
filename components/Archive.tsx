import { useState } from "react";
import ArchiveCard from "./ArchiveCard";
import { motion } from "framer-motion";

const Archive = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Other Popular Services we offer
        </h2>
        <p className="text-sm font-titleFont text-textGreen">
          All Smart Contracts We Provide Are Audit Ready
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <ArchiveCard
          title="NFT Drop Collection"
          des="Release Collection of unique NFTs for a set price. We will study your project and create a unique NFT collection for you. We can also create a website for your NFT collection."
          listItem={["NFT", "Metadata", "IPFS", "Blockchain", "Any Blockchain"]}
          link="https://www.fiverr.com/"
        />
        <ArchiveCard
          title="Marketplace for NFTs"
          des=" We will create a marketplace for your NFTs. People will be able to buy and sell NFTs on your own marketplace like OpenSea or Rarible."
          listItem={[
            "NFT",
            "Markeplace",
            "Website",
            "Blockchain",
            "Any Blockchain",
          ]}
          link="https://www.fiverr.com/"
        />
        <ArchiveCard
          title="Token Creation and Marketing Strategy"
          des=" We will create a token for you and launch an ICO for your token. We provide to you marketing strategy and create comminucation channel (Telegram group, Discord Server, Social Network, websites). Provide listing strategy for you Token."
          listItem={["ERC20", "Token", "ICO", "Any Blockchain"]}
          link="https://www.fiverr.com/"
        />
        <ArchiveCard
          title="ERC721 Non Escrow Smart Contract"
          des=" Modified NFTDrop to allow for NES (Non Escrow Staking) This allows holders to stake their NFTs without the token ever leaving their wallet."
          listItem={["Uniswap", "PancakeSwap", "SushiSwap", "Any Blockchain"]}
          link="https://www.fiverr.com/"
        />
        <ArchiveCard
          title="Consulting : Maketing and Design "
          des=" We will design your NFT collection depending on your requirements. We can also help you to get started with your marketing strategy and create comminucation channel (Telegram group, Discord Server, Social Network, websites) for your NFT collection."
          listItem={["NFT", "Metadata", "Collection Design"]}
          link="https://www.fiverr.com/"
        />
        <ArchiveCard
          title="Metadata Writing is JSON format for NFTs"
          des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
          listItem={["Reactjs", "Tailwind CSS", "getform.io"]}
          link="https://www.fiverr.com/"
        />

        {showMore && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <ArchiveCard
                title="DAO and voting smart contracts"
                des=" Setting up a governance system for your project. We will create a DAO for your project and help you to create a voting system for your project. We will also help you to create a website for your DAO."
                listItem={["Reactjs", "Tailwind CSS", "getform.io"]}
                link="https://www.fiverr.com/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <ArchiveCard
                title="Edition Drop Collection"
                des=" ERC1155 token for a set price. This option is for you if you want to create a collection of NFTs with different editions. You will be able to sell One artwork multiple times. For project like game, DeFi, token access, etc."
                listItem={["Reactjs", "Tailwind CSS", "redux-toolkit"]}
                link="https://www.fiverr.com/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <ArchiveCard
                title="Loyalty Card NFT"
                des=" Loyalty Program for your project but it use NFT as card for your community, allow project onwer to reward their community with NFT card and airdrop easily. We will create a website for your NFT collection."
                listItem={["Nextjs", "Tailwind CSS", "next-auth", "firebase"]}
                link="https://www.fiverr.com/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <ArchiveCard
                title="Stack ERC20 Token"
                des=" Deploy a token and stacking contract for your project. We will create a token for you and deploy a stacking contract for your token. We will also create a website for your stacking contract where user can deposit tokens and earn reward."
                listItem={["Nextjs", "react-slick", "redux-toolkit"]}
                link="https://www.fiverr.com/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <ArchiveCard
                title="Stack ERC721/1155"
                des=" Deploy a stacking contract for your NFTs. We will create a stacking contract for your NFTs. We will also create a website for your stacking contract where user can deposit NFTs and earn reward."
                listItem={["Reactjs", "Tailwind CSS", "vercel deploy"]}
                link="https://www.fiverr.com/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <ArchiveCard
                title="Airdrop Services"
                des=" We will create differents aidrop for your project depending on your requirements. This can allow project onwer to reward thier community with an On-Chain process."
                listItem={["Reactjs", "Tailwind CSS", "vercel deploy"]}
                link="https://www.fiverr.com/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <ArchiveCard
                title="ERC4907 Rentable NFTs"
                des=" NFT smart contract to rent NFTs instaed of selling them. "
                listItem={["Reactjs", "Tailwind CSS", "vercel deploy"]}
                link="https://www.fiverr.com/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <ArchiveCard
                title="Loot Box NFTs"
                des=" Pack multiple tokens into ERC1155 token and sell them as a loot box."
                listItem={["Nextjs", "Tailwind CSS", "next-auth"]}
                link="https://www.fiverr.com/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <ArchiveCard
                title="Membership And Community Stream"
                des=" Membership is a contract that create time-bound NFT for usage like subscription, ticket, access, certifications. Community Stream is a contract that allow project onwer to distribute any token to a NFT holder community"
                listItem={["Reactjs", "Tailwind CSS", "vercel deploy"]}
                link="https://www.fiverr.com/"
              />
            </motion.div>
          </>
        )}
      </div>
      <div className="mt-12 flex items-center justify-center">
        {showMore ? (
          <button
            onClick={() => setShowMore(false)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show Less
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Archive;
