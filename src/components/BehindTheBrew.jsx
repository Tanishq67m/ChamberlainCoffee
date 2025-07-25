import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaCoffee } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

// You can get these images from your assets
const behindTheBrewData = [
    {
        text: "Our coffee beans are all USDA-certified organic, specialty grade and sourced from the world’s best coffee growing regions.",
        image: "https://via.placeholder.com/200" // Replace with your image
    },
    {
        text: "Our beans are roasted with love to bring out the unique tasting notes for our signature blends.",
        image: "https://via.placeholder.com/200" // Replace with your image
    },
    {
        text: "“I’m a coffee snob, so perfecting each blend is mandatory. My overall goal was to make high quality, delicious coffee feel approachable and fun.” - Emma",
        image: "https://via.placeholder.com/200" // Replace with your image
    },
];


const BehindTheBrew = () => {
    const sectionRef = useRef(null);
    const beanRef = useRef(null);
    const timelineItemsRef = useRef([]);

    useLayoutEffect(() => {
        const section = sectionRef.current;
        const bean = beanRef.current;
        const items = timelineItemsRef.current;
        
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: `+=${items.length * 500}`, // Adjust scroll distance based on content
                scrub: true,
                pin: true,
            }
        });

        // Animate the coffee bean moving down
        tl.to(bean, {
            y: section.offsetHeight - 100, // Move down the height of the section
            ease: "none"
        });

        // Animate each timeline item fading in
        items.forEach((item, index) => {
            tl.from(item, {
                opacity: 0,
                x: index % 2 === 0 ? -100 : 100, // Animate from left or right
                ease: "power2.inOut"
            }, "-=0.5"); // Overlap animations slightly
        });
        
        return () => { tl.kill(); };
    }, []);

    return (
        <section ref={sectionRef} className="relative min-h-screen py-20 bg-royal-blue/95 backdrop-blur-md text-off-white">
            <h2 className="font-heading text-4xl font-bold text-center mb-20">Behind the Brew</h2>

            {/* The vertical timeline */}
            <div className="absolute top-0 left-1/2 w-[2px] h-full bg-off-white/30 -translate-x-1/2"></div>
            
            {/* The scrolling coffee bean */}
            <div ref={beanRef} className="absolute top-10 left-1/2 -translate-x-1/2 text-xl text-yellow-500">
                <FaCoffee />
            </div>

            <div className="max-w-4xl mx-auto space-y-24">
                {behindTheBrewData.map((item, index) => (
                    <div 
                        key={index} 
                        ref={el => timelineItemsRef.current[index] = el}
                        className={`flex items-center gap-8 ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}
                    >
                        <div className="w-1/2">
                            <img src={item.image} alt="" className="rounded-lg shadow-lg"/>
                        </div>
                        <p className="w-1/2 font-body text-lg">{item.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BehindTheBrew;