import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bean from "../assets/cbean.svg";
import leaf from "../assets/leaf.svg";
import note from "../assets/note.svg";
import cre from "../assets/cre.svg";

gsap.registerPlugin(ScrollTrigger);

const frameCount = 62;
const imagePaths = Array.from({ length: frameCount }, (_, i) => {
  return `/src/assets/coffee-animation/frame-${i + 1}.webp`;
});

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
        end: "+=1300", // shorter scroll = faster animation
        scrub: 1, // smoother but quicker
        pin: true,
      },
    });

    tl.to(imageSequence, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      onUpdate: render,
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

    {/* Center Canvas Animation */}
    <div className="relative top-1/2 left-1/2 mt-15 transform -translate-x-1/2 -translate-y-1/2 z-10">
      <canvas
        ref={canvasRef}
        className="w-[440px] md:w-[660px] lg:w-[850px] h-auto"
      ></canvas>
    </div>

    {/* Info Layout */}
    <div className="absolute inset-0 flex items-center justify-between px-8 max-w-6xl mx-auto z-20 pointer-events-none">
      {/* Left Side Details */}
      <div className="flex flex-col gap-16 text-[#0D1B2A] text-center md:text-left pointer-events-auto">
        <div>
          <img
            src={bean}
            alt="Roast Profile"
            className="mx-auto md:mx-0 w-10 h-10 mb-3"
          />
          <p className="font-bold text-lg text-[#0D4C92]">Roast Profile</p>
          <p className="text-base text-gray-600">
            {product.features.find((f) => f.name === "Roast Level")?.value}
          </p>
        </div>
        <div>
          <img
            src={leaf}
            alt="Origin"
            className="mx-auto md:mx-0 w-10 h-10 mb-3"
          />
          <p className="font-bold text-lg text-[#0D4C92]">Origin</p>
          <p className="text-base text-gray-600">
            {product.features.find((f) => f.name === "Origin")?.value}
          </p>
        </div>
      </div>

      {/* Right Side Details */}
      <div className="flex flex-col gap-16 text-[#0D1B2A] text-center md:text-left pointer-events-auto">
        <div>
          <img
            src={note}
            alt="Tasting Notes"
            className="mx-auto md:mx-0 w-10 h-10 mb-3"
          />
          <p className="font-bold text-lg text-[#0D4C92]">Tasting Notes</p>
          <p className="text-base text-gray-600">
            {product.features.find((f) => f.name === "Tasting Notes")?.value}
          </p>
        </div>
        <div>
          <img
            src={cre}
            alt="Created With Love"
            className="mx-auto md:mx-0 w-10 h-10 mb-3"
          />
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
