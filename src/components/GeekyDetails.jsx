import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bean from "../assets/cbean.svg";
import leaf from "../assets/leaf.svg";
import note from "../assets/note.svg";
import cre from "../assets/cre.svg";

gsap.registerPlugin(ScrollTrigger);

// ✅ Replace local paths with your Cloudinary URLs
const imagePaths = [
  "https://res.cloudinary.com/dtlkwgwwo/image/upload/v1753465409/Frame-1_utrkgt.webp",
  "https://res.cloudinary.com/dtlkwgwwo/image/upload/v1753465410/Frame-2_y4mjoi.webp",
  "https://res.cloudinary.com/dtlkwgwwo/image/upload/v1753465410/Frame-3_hfiudg.webp",
  "https://res.cloudinary.com/dtlkwgwwo/image/upload/v1753465410/Frame-4_odmrh0.webp",
  "https://res.cloudinary.com/dtlkwgwwo/image/upload/v1753465410/Frame-5_j7ryl4.webp",
  "https://res.cloudinary.com/dtlkwgwwo/image/upload/v1753465410/Frame-6_enfibp.webp",
  "https://res.cloudinary.com/dtlkwgwwo/image/upload/v1753465410/Frame-7_soldvz.webp",
  "https://res.cloudinary.com/dtlkwgwwo/image/upload/v1753465410/Frame-8_ly5c3a.webp",
  "https://res.cloudinary.com/dtlkwgwwo/image/upload/v1753465410/Frame-9_yooud3.webp",
  "https://res.cloudinary.com/dtlkwgwwo/image/upload/v1753465410/Frame-10_ypflxd.webp",
  "https://res.cloudinary.com/dtlkwgwwo/image/upload/v1753465411/Frame-11_bcjcof.webp",
  "https://res.cloudinary.com/dtlkwgwwo/image/upload/v1753465411/Frame-12_ahgf0o.webp",
  "https://res.cloudinary.com/dtlkwgwwo/image/upload/v1753465413/Frame-13_wvcyra.webp",
  "https://res.cloudinary.com/dtlkwgwwo/image/upload/v1753465413/Frame-14_q1fugy.webp",
  "https://res.cloudinary.com/dtlkwgwwo/image/upload/v1753465414/Frame-15_u8ytnh.webp",
  "https://res.cloudinary.com/dtlkwgwwo/image/upload/v1753465414/Frame-16_nfrvza.webp",
  "https://res.cloudinary.com/dtlkwgwwo/image/upload/v1753465414/Frame-17_daylb4.webp",
  "https://res.cloudinary.com/dtlkwgwwo/image/upload/v1753465414/Frame-18_zg3dym.webp",
  "https://res.cloudinary.com/dtlkwgwwo/image/upload/v1753465414/Frame-19_tvrtat.webp",
  "https://res.cloudinary.com/dtlkwgwwo/image/upload/v1753465415/Frame-20_nlcuwl.webp",
  "https://res.cloudinary.com/dtlkwgwwo/image/upload/v1753465416/Frame-21_rbn6it.webp",
  "https://res.cloudinary.com/dtlkwgwwo/image/upload/v1753465416/Frame-22_y6ntoy.webp",
  "https://res.cloudinary.com/dtlkwgwwo/image/upload/v1753465417/Frame-23_rlazco.webp",
  "https://res.cloudinary.com/dtlkwgwwo/image/upload/v1753465417/Frame-24_wuecuj.webp",
  "https://res.cloudinary.com/dtlkwgwwo/image/upload/v1753465417/Frame-25_srizsj.webp",
  "https://res.cloudinary.com/dtlkwgwwo/image/upload/v1753465418/Frame-26_pxqvke.webp",
  "https://res.cloudinary.com/dtlkwgwwo/image/upload/v1753465418/Frame-27_cjuec8.webp",
  "https://res.cloudinary.com/dtlkwgwwo/image/upload/v1753465425/Frame-28_gromrk.webp",
  "https://res.cloudinary.com/dtlkwgwwo/image/upload/v1753465425/Frame-29_te2yxd.webp",
  "https://res.cloudinary.com/dtlkwgwwo/image/upload/v1753465425/Frame-30_ewowqi.webp",
  "https://res.cloudinary.com/dtlkwgwwo/image/upload/v1753465426/Frame-31_onuvjq.webp",
  "https://res.cloudinary.com/dtlkwgwwo/image/upload/v1753465426/Frame-32_ovjunz.webp",
  "https://res.cloudinary.com/dtlkwgwwo/image/upload/v1753465426/Frame-33_omq2h7.webp",
  "https://res.cloudinary.com/dtlkwgwwo/image/upload/v1753465426/Frame-34_gna2ts.webp",
  "https://res.cloudinary.com/dtlkwgwwo/image/upload/v1753465428/Frame-35_tx8siz.webp",
  "https://res.cloudinary.com/dtlkwgwwo/image/upload/v1753465429/Frame-36_oqxtif.webp",
  "https://res.cloudinary.com/dtlkwgwwo/image/upload/v1753465429/Frame-37_clig5a.webp",
  "https://res.cloudinary.com/dtlkwgwwo/image/upload/v1753465429/Frame-38_pgmphw.webp",
  "https://res.cloudinary.com/dtlkwgwwo/image/upload/v1753465429/Frame-39_m1pdsx.webp",
  "https://res.cloudinary.com/dtlkwgwwo/image/upload/v1753465429/Frame-40_ajtmhq.webp",
  "https://res.cloudinary.com/dtlkwgwwo/image/upload/v1753465430/Frame-41_c87apr.webp",
  "https://res.cloudinary.com/dtlkwgwwo/image/upload/v1753465432/Frame-42_s0w8kn.webp",
  "https://res.cloudinary.com/dtlkwgwwo/image/upload/v1753465432/Frame-43_d3zmrp.webp",
  "https://res.cloudinary.com/dtlkwgwwo/image/upload/v1753465432/Frame-44_s5vmu1.webp",
  "https://res.cloudinary.com/dtlkwgwwo/image/upload/v1753465432/Frame-45_r2nsnp.webp",
  "https://res.cloudinary.com/dtlkwgwwo/image/upload/v1753465433/Frame-46_xwzesj.webp",
  "https://res.cloudinary.com/dtlkwgwwo/image/upload/v1753465433/Frame-47_cv57ds.webp",
  "https://res.cloudinary.com/dtlkwgwwo/image/upload/v1753465433/Frame-48_jsx8ck.webp",
  "https://res.cloudinary.com/dtlkwgwwo/image/upload/v1753465436/Frame-49_lzse3p.webp",
  "https://res.cloudinary.com/dtlkwgwwo/image/upload/v1753465437/Frame-50_zywiby.webp",
  "https://res.cloudinary.com/dtlkwgwwo/image/upload/v1753465437/Frame-51_hbgtif.webp",
  "https://res.cloudinary.com/dtlkwgwwo/image/upload/v1753465457/Frame-52_d7gggr.webp",
  "https://res.cloudinary.com/dtlkwgwwo/image/upload/v1753465495/Frame-53_u3uqy4.webp",
  "https://res.cloudinary.com/dtlkwgwwo/image/upload/v1753465501/Frame-54_pfzucb.webp",
  "https://res.cloudinary.com/dtlkwgwwo/image/upload/v1753465502/Frame-55_drlh8c.webp",
  "https://res.cloudinary.com/dtlkwgwwo/image/upload/v1753465502/Frame-56_uvszt5.webp",
  "https://res.cloudinary.com/dtlkwgwwo/image/upload/v1753465502/Frame-57_moavps.webp",
  "https://res.cloudinary.com/dtlkwgwwo/image/upload/v1753465502/Frame-58_bxyny0.webp",
  "https://res.cloudinary.com/dtlkwgwwo/image/upload/v1753465503/Frame-59_t1bwr4.webp",
  "https://res.cloudinary.com/dtlkwgwwo/image/upload/v1753465503/Frame-60_euziyc.webp",
  "https://res.cloudinary.com/dtlkwgwwo/image/upload/v1753465506/Frame-61_xhbtey.webp",
  "https://res.cloudinary.com/dtlkwgwwo/image/upload/v1753465506/Frame-62_z9k0uh.webp"
];

const frameCount = imagePaths.length;

const GeekyDetails = ({ product }) => {
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    canvas.width = 1158;
    canvas.height = 770;

    const images = [];
    const imageSequence = { frame: 0 };

    // Preload images
    imagePaths.forEach((path) => {
      const img = new Image();
      img.src = path;
      images.push(img);
    });

    images[0].onload = () => {
      context.drawImage(images[0], 0, 0);
    };

    const render = () => {
      if (images[imageSequence.frame]) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(images[imageSequence.frame], 0, 0);
      }
    };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=1300",
        scrub: 1,
        pin: true
      }
    });

    tl.to(imageSequence, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      onUpdate: render
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-[#F4F8FC] flex items-center justify-center overflow-hidden pt-24"
    >
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        {/* Title */}
        <h2 className="absolute top-8 text-xl md:text-3xl font-semibold text-[#0D4C92] tracking-wide uppercase">
          the geeky details
        </h2>

        {/* Canvas Animation */}
        <div className="relative top-1/2 left-1/2 mt-15 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <canvas
            ref={canvasRef}
            className="w-[440px] md:w-[660px] lg:w-[850px] h-auto"
          ></canvas>
        </div>

        {/* Info Layout */}
        <div className="absolute inset-0 flex items-center justify-between px-8 max-w-6xl mx-auto z-20 pointer-events-none">
          {/* Left Details */}
          <div className="flex flex-col gap-16 text-[#0D1B2A] text-center md:text-left pointer-events-auto">
            <div>
              <img src={bean} alt="Roast Profile" className="mx-auto md:mx-0 w-10 h-10 mb-3" />
              <p className="font-bold text-lg text-[#0D4C92]">Roast Profile</p>
              <p className="text-base text-gray-600">
                {product.features.find((f) => f.name === "Roast Level")?.value}
              </p>
            </div>
            <div>
              <img src={leaf} alt="Origin" className="mx-auto md:mx-0 w-10 h-10 mb-3" />
              <p className="font-bold text-lg text-[#0D4C92]">Origin</p>
              <p className="text-base text-gray-600">
                {product.features.find((f) => f.name === "Origin")?.value}
              </p>
            </div>
          </div>

          {/* Right Details */}
          <div className="flex flex-col gap-16 text-[#0D1B2A] text-center md:text-left pointer-events-auto">
            <div>
              <img src={note} alt="Tasting Notes" className="mx-auto md:mx-0 w-10 h-10 mb-3" />
              <p className="font-bold text-lg text-[#0D4C92]">Tasting Notes</p>
              <p className="text-base text-gray-600">
                {product.features.find((f) => f.name === "Tasting Notes")?.value}
              </p>
            </div>
            <div>
              <img src={cre} alt="Created With Love" className="mx-auto md:mx-0 w-10 h-10 mb-3" />
              <p className="font-bold text-lg text-[#0D4C92]">Created With Love</p>
              <p className="text-base text-gray-600">by emma chamberlain</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeekyDetails;
