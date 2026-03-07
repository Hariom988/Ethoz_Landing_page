"use client";
import Link from "next/link";

const COMPOSITIONS = [
  "Nylon Spandex",
  "Polyester Spandex",
  "Cotton / Polyester Blends",
  "Cotton",
  "Poly / Viscose Blends",
  "Recycled Polyester and Cotton Yarns",
  "Bamboo and Blends",
  "Modal and Blends",
];

const FINISHES = [
  "Moisture Wicking",
  "Anti Microbial",
  "UV Resistance",
  "Antistatic",
  "Water Repellent",
  "Elastomeric",
  "Wicking",
  "Anti-Stain / Oil",
  "Nano Finish",
];

const STRUCTURES = [
  "Jersey's",
  "Interlock's",
  "Ponte",
  "Scuba",
  "Rice / Dot Knits",
  "Mesh's",
  "Twill Knits",
  "Terry",
  "Fleece",
  "Waffle, Ottoman",
];

const VALUES = [
  {
    title: "Our Self Aspirations",
    desc: "Continuously raising our internal standards — in skill, process, and output — to be the best manufacturer our partners could choose.",
    icon: "◈",
  },
  {
    title: "Caring for Environment",
    desc: "Responsible sourcing, sustainable fabrics, and mindful production that respects the planet at every stage of manufacturing.",
    icon: "◉",
  },
  {
    title: "Abiding by Governance",
    desc: "Strict compliance with labour laws, ethical practices, and regulatory standards — because integrity is non-negotiable.",
    icon: "◇",
  },
  {
    title: "Delighting Customers",
    desc: "Every order is a commitment. We deliver quality, consistency, and care that keeps brands coming back.",
    icon: "◎",
  },
];

const CAPABILITIES = [
  "Design Team",
  "CAD Based Pattern Dev.",
  "Cutting",
  "Sublimation Printing / Heat Transfers",
  "Sewing",
  "Finishing",
];

const FACILITY = [
  {
    title: "CAD Pattern Department",
    desc: "Our in-house CAD team uses advanced pattern-making software to convert designs into precise, production-ready layouts. Paired with large-format plotters, we ensure accurate marker making and minimal fabric wastage across every order.",
    side: "right",
  },
  {
    title: "Cutting & Fabric Storage",
    desc: "Our cutting section handles bulk lay cutting with precision, supported by an organised fabric storage system that keeps materials sorted, labelled, and ready. Every roll is tracked from receipt to cutting floor.",
    side: "left",
  },
  {
    title: "Stitching Section",
    desc: "A full-scale stitching floor with modern JACK machines, trained operators, and a line-based production system. Assembly lines are structured by garment type for maximum efficiency and consistent stitch quality across every unit.",
    side: "right",
  },
  {
    title: "Finishing Section",
    desc: "Our finishing team handles thread trimming, pressing, tagging, and final fold & pack. Every garment undergoes a thorough check before it reaches the packing stage — quality is never an afterthought.",
    side: "left",
  },
  {
    title: "Sublimation Printing & Heat Transfers",
    desc: "Inhouse Epson sublimation printers for fabric digital printing, panel prints, and full T-shirt digital printing. Our heat transfer section supports reflective, flock, glitter, rainbow, iridescent, foil, and metallic transfers.",
    side: "right",
  },
];

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[.2em] uppercase text-accent">
      <span className="block w-5 h-px bg-accent" />
      {children}
    </span>
  );
}

export default function AboutPage() {
  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');`}</style>

      <div className="min-h-screen bg-bg text-ink font-sans antialiased">
        <header className="bg-bg/95 backdrop-blur-md border-b border-subtle py-4 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5 no-underline">
              <img
                src="/logo.jpeg"
                alt="Ethoz"
                className="w-9 h-9 rounded-lg object-cover"
              />
              <span className="text-[18px] font-bold tracking-tight text-ink font-sans">
                Ethoz
              </span>
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[13px] font-semibold text-muted
                hover:text-ink transition-colors duration-200 no-underline"
            >
              <svg
                className="w-4 h-4 rotate-180"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              Back to Home
            </Link>
          </div>
        </header>

        <section className="relative overflow-hidden bg-ink py-24 md:py-32">
          <div className="absolute inset-0 opacity-20">
            <img
              src="/image4.jpeg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[.25em] uppercase text-accent mb-5">
              Company Profile
            </p>
            <h1
              className="font-serif font-bold text-white leading-[1.08] tracking-tight
              text-[clamp(40px,5.5vw,80px)] mb-6 max-w-3xl"
            >
              Built to manufacture.
              <br />
              <span className="text-accent">Trusted to deliver.</span>
            </h1>
            <p className="text-[16px] leading-[1.85] text-white/60 max-w-xl">
              A complete look at how Ethoz operates — our values, capabilities,
              facilities, and the full range of fabrics and finishes we work
              with.
            </p>
          </div>
        </section>

        <section className="py-6 bg-accent">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-3 divide-x divide-white/20">
              {[
                { value: "85,000+", label: "Garmenting Units / Month" },
                { value: "45,000+", label: "Printing Units / Month" },
                { value: "6", label: "Inhouse Departments" },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center justify-center py-4 px-4 text-center"
                >
                  <span className="font-serif font-bold text-[32px] md:text-[40px] leading-none text-white">
                    {value}
                  </span>
                  <span className="text-[12px] font-medium text-white/70 mt-1">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-surface">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-xl mb-14">
              <Tag>Our Values</Tag>
              <h2 className="font-serif font-bold text-ink leading-[1.15] tracking-tight mt-5 text-[clamp(30px,3.8vw,48px)]">
                Four things we
                <br />
                never compromise on.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {VALUES.map(({ title, desc, icon }, i) => (
                <div
                  key={i}
                  className="group p-8 rounded-2xl border border-subtle bg-bg
                    hover:border-accent hover:bg-accent-bg transition-all duration-300"
                >
                  <span className="text-[28px] text-accent block mb-4">
                    {icon}
                  </span>
                  <h3 className="text-[17px] font-bold font-sans text-ink mb-3 group-hover:text-accent transition-colors duration-200">
                    {title}
                  </h3>
                  <p className="text-[14px] leading-[1.75] text-muted">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-bg">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-xl mb-14">
              <Tag>Inhouse Capabilities</Tag>
              <h2 className="font-serif font-bold text-ink leading-[1.15] tracking-tight mt-5 text-[clamp(30px,3.8vw,48px)]">
                Everything under
                <br />
                one roof.
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {CAPABILITIES.map((cap, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center text-center p-5
                    rounded-2xl border border-subtle bg-surface hover:border-accent hover:bg-accent-bg
                    transition-all duration-200 cursor-default"
                >
                  <span className="w-8 h-8 rounded-full bg-accent-bg flex items-center justify-center mb-3">
                    <span className="text-[11px] font-bold text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </span>
                  <p className="text-[13px] font-semibold text-ink leading-tight">
                    {cap}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-surface">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-xl mb-16">
              <Tag>Our Facility</Tag>
              <h2 className="font-serif font-bold text-ink leading-[1.15] tracking-tight mt-5 text-[clamp(30px,3.8vw,48px)]">
                Inside the
                <br />
                Ethoz factory.
              </h2>
            </div>

            <div className="flex flex-col gap-20">
              {FACILITY.map(({ title, desc, side }, i) => {
                const imgs = [
                  ["/image4.jpeg", "/image5.jpeg"],
                  ["/image5.jpeg", "/image3.jpeg"],
                  ["/image1.jpeg", "/image4.jpeg"],
                  ["/image3.jpeg", "/image1.jpeg"],
                  ["/image2.jpeg", "/image5.jpeg"],
                ];
                const [img1, img2] = imgs[i] ?? [
                  "/image1.jpeg",
                  "/image2.jpeg",
                ];
                const isLeft = side === "left";

                return (
                  <div
                    key={i}
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center
                      ${isLeft ? "lg:flex-row-reverse" : ""}`}
                  >
                    <div className={isLeft ? "lg:order-2" : ""}>
                      <div className="flex items-center gap-3 mb-5">
                        <span className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-white text-[12px] font-bold shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="text-[20px] font-bold font-sans text-ink">
                          {title}
                        </h3>
                      </div>
                      <p className="text-[15px] leading-[1.85] text-muted">
                        {desc}
                      </p>
                    </div>

                    <div
                      className={`grid grid-cols-2 gap-3 ${isLeft ? "lg:order-1" : ""}`}
                    >
                      <div className="rounded-xl overflow-hidden aspect-[4/3]">
                        <img
                          src={img1}
                          alt={title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="rounded-xl overflow-hidden aspect-[4/3] mt-6">
                        <img
                          src={img2}
                          alt={title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-ink">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-xl mb-14">
              <Tag>Materials</Tag>
              <h2 className="font-serif font-bold text-white leading-[1.15] tracking-tight mt-5 text-[clamp(30px,3.8vw,48px)]">
                Fabrics & Finishes
              </h2>
              <p className="text-[15px] leading-[1.85] text-white/50 mt-4">
                We work with a broad range of fabric compositions, technical
                finishes, and knit structures to meet the needs of any garment
                category.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Compositions", items: COMPOSITIONS },
                { title: "Finishes", items: FINISHES },
                { title: "Structures", items: STRUCTURES },
              ].map(({ title, items }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-7"
                >
                  <h3 className="text-[14px] font-semibold tracking-[.15em] uppercase text-accent mb-6">
                    {title}
                  </h3>
                  <div className="flex flex-col gap-2.5">
                    {items.map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        <span className="text-[14px] text-white/70">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-accent">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="font-serif font-bold text-white leading-[1.1] tracking-tight mb-4 text-[clamp(26px,3.5vw,44px)]">
              Ready to start manufacturing?
            </h2>
            <p className="text-[15px] text-white/70 mb-8 max-w-md mx-auto">
              Reach out and let's discuss what Ethoz can build for your brand.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full
                bg-white hover:bg-ink text-accent hover:text-white
                text-[14px] font-semibold no-underline transition-all duration-200"
            >
              Get in Touch
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
