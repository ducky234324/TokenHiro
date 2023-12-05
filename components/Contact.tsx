import Link from "next/link";

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
      <p className="font-titleFont text-lg text-[#f1b3e0] font-semibold flex items-center tracking-wide">
        04. What’s Next?
      </p>
      <h2 className="font-titleFont text-5xl font-semibold">
        Let&rsquo;s Collaborate!
      </h2>
      <p className="max-w-[600px] text-center text-textDark">
       We are open to integrate $LBONK in as many applications as possible. 

       You think your communitiy deserves an airdrop? just contact us.
      </p>

      <a href="mailto:support@ladybonk.xyz">
        <button className="w-40 h-14 border border-[#f1b3e0] mt-6 font-titleFont text-sm text-[#f1b3e0] tracking-wider rounded-md hover:bg-hoverColor duration-300">
          Email Us
        </button>
      </a>
      <a href="https://twitter.com/ladybonk_inu">
        <button className="w-40 h-14 border border-[#f1b3e0] mt-6 font-titleFont text-sm text-[#f1b3e0] tracking-wider rounded-md hover:bg-hoverColor duration-300">
          Twitter
        </button>
      </a>
    </section>
  );
};

export default Contact;
