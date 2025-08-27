import FoundationButton from "@/components/CTA_Button/FoundationButton";

export default function SecondSection() {
  return (
    <section className="relative w-full bg-white text-black">
      <div
        className="flex flex-col items-center text-center max-w-[1140px] mx-auto 
                   px-6 sm:px-12 md:px-16"
      >
        {/* 🔹 Top spacing */}
        <div className="h-[64px] sm:h-[96px] md:h-[128px]" />

        {/* 🔹 Heading */}
        <h2
          className="font-clash font-regular text-[24px] sm:text-[28px] md:text-[32px] 
                     leading-[32px] sm:leading-[36px] md:leading-[40px] 
                     text-text-title max-w-[782px] mx-auto"
        >
          We’re a team of crypto-native builders,
          researchers, and data scientists with a vision
          to redefine how capital movement is understood in Web3
        </h2>

        {/* 🔹 Buttons */}
        <div className="mt-6 flex text-white flex-col sm:flex-row items-center justify-center gap-4">
          <FoundationButton>
            I’m a user, get early access
          </FoundationButton>

          <FoundationButton
            className="bg-white text-black border border-black hover:bg-gray-100"
          >
            I’m an investor, let’s talk
          </FoundationButton>
        </div>

        {/* 🔹 Bottom spacing */}
        <div className="h-[64px] sm:h-[96px] md:h-[128px]" />
      </div>
    </section>
  );
}
