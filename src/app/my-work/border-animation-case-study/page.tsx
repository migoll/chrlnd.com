import { Section } from "@/components/section";

export default function CaseStudyOne() {
  return (
    <>
      <Section contentClassName="flex gap-12 flex-col px-8 py-32">
        <a href="/">
          <button className="text-3xl font-bold bg-black text-white rounded-full w-[96px] h-[144px] hover:bg-neutral-800 dark:border-3">
            ←
          </button>
        </a>
        <p className="font-medium text-neutral-500 text-xl">Case</p>
        <div className="flex gap-8 flex-col">
          <h1 className="font-bold text-7xl">Crypto transaction app</h1>
          <div className="flex justify-between w-[60%]">
            <div>
              <p className="font-semibold">Role</p>
              <p className="font-normal text-lg">OOUX design, front-end</p>
            </div>
          </div>
          <p>
            Mobile app design that provides an intuitive way for users to make
            cryptocurrency transactions
          </p>
        </div>
      </Section>
      <Section contentClassName="py-32 flex gap-3 flex-col">
        <h2 className="font-bold text-4xl">My role</h2>
        <p>
          As the designer, I was responsible for researching crypto users needs,
          analyzing other transaction apps, and creating the high-fidelity
          design. This involved researching the typical needs in cryptocurrency
          apps and designing solutions that address them.
        </p>
      </Section>
      <Section contentClassName="py-32 flex gap-3 flex-col">
        <h2 className="font-bold text-4xl">Process</h2>
        <ul className="flex flex-col gap-4">
          <li>
            <span className="font-bold">Research & Competitive Analysis:</span>
            Focused on common crypto user needs like transaction speed,
            security, and clarity. Reviewed apps like PayPal and MetaMask to
            analyze how they handle payments and swaps.
          </li>
          <li>
            <span className="font-bold">Design Approach: </span>I focused on
            having a minimalist design to avoid overwhelming users, ensuring
            that key actions like sending, swapping, and receiving are easily
            accessible. The dark theme aligns with other typical crypto apps.
          </li>
          <li>
            <span className="font-bold">Figma High-Fidelity Design: </span>
            Created a natural interface for managing balances, transactions, and
            asset swapping, with NFC integration for tap-to-pay functionality.
          </li>
        </ul>
      </Section>
      <Section contentClassName="py-32 flex gap-3 flex-col">
        <h2 className="font-bold text-4xl">Design challenges</h2>
        <ul className="flex flex-col gap-4">
          <li>
            <span className="font-bold">NFC Payment Integration: </span>
            Designing the UI around NFC payments required users knew when to
            scan while maintaining a clean design.
          </li>
          <li>
            <span className="font-bold">Crypto Swaps: </span>
            Providing a simple swapping interface without overwhelming users
            with options was critical. Focused on keeping the choices visible
            but precise
          </li>
        </ul>
      </Section>
      <Section contentClassName="py-32 flex gap-3 flex-col">
        <h2 className="font-bold text-4xl">The result</h2>
        <p>
          The app provides a straight forward user experience for cryptocurrency
          transactions, with a focus on minimalism and the actions.
        </p>
        <p>
          This also meant i had to focus on a simple dashboard, with easy access
          to send, recieve and swap assets. And ofc the NFC integration for a
          quick, modern and contactless payment
        </p>
      </Section>
    </>
  );
}
