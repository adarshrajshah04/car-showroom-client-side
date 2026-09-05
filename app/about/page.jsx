import React from "react";


const principles = [
  {
    id: 1,
    title: "Quality first",
    description:
      "Every vehicle is carefully selected for its condition, character and quality.",
  },
  {
    id: 2,
    title: "No compromise",
    description:
      "We focus on exceptional automobiles, never on simply filling the showroom.",
  },
  {
    id: 3,
    title: "Quiet luxury",
    description:
      "Refined design, effortless service and an experience built around you.",
  },
];
const page = () => {
  return (
    <div>
        {/* about main page */}
      <div
        style={{
          backgroundImage: `
      linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
    `,
          backgroundSize: "100px 100px",
        }}
        className=" w-full min-h-screen px-20 pt-30 text-white"
      >
        <p className=" text-mid-text/80 text-sm  font-light">SINCE {" "} 2024</p>

        <h3 className="text-8xl w-[70%] mt-20 font-bold text-light-text ">We select fewer cars, but make every one exceptional.</h3>
        <p className=" mt-10 text-mid-text/50  w-[85%] ">
          At ARS, we believe luxury is found in the details. Our collection is
          carefully curated for those who value timeless design, remarkable
          performance, and individuality.
        </p>

          <div className="w-full py-20 mt-10 flex items-center justify-between gap-10 ">
        {principles.map((a,idx)=>(
            <div key={idx} className=" text-white bg-card px-5 py-10 rounded-xl border border-border/30 hover:border-border/80 hover:translate-y-[-10px] ">
                <h3 className=" text-2xl text-light-text mb-2">{a.title}</h3>
                <p className="text-mid-text/50 text-sm">{a.description}</p>
            </div>
        ))}
      </div>
      
      </div>

    
    </div>
  );
};

export default page;
