import Link from "next/link";

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
      <p className="font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide">
        04. What’s Next?
      </p>
      <h2 className="font-titleFont text-5xl font-semibold">
        Let&rsquo;s Collaborate!
      </h2>
      <p className="max-w-[600px] text-center text-textDark">
        Whether you are just beginning your blockchain journey or are a seasoned
        developer seeking to fortify your smart contract&rsquo;s security,
        Tokenhiro is here to help. Our expertise spans from crafting secure
        smart contracts to developing state-of-the-art decentralized
        applications.
      </p>

      <a href="mailto:noor.jsdivs@gmail.com">
        <button className="w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300">
          Email Us
        </button>
      </a>
    </section>
  );
};

export default Contact;
