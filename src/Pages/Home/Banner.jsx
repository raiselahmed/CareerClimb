import React from "react";
import AnimatedContent from "../../../reactbitsAnimation/AnimatedContent/AnimatedContent";
import SplitText from "../../../reacTextAnimation/SplitText/SplitText";
import bnnerImg from '../../assets/Lottie/bannerImg.json'
import Lottie from "lottie-react";

const Banner = () => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <section className="py-12"> {/* Added className */}
      <div className="hero min-h-96"> {/* Added className */}
        <div className="hero-content flex-col lg:flex-row-reverse"> {/* Added className */}
          <div className="flex-1"> {/* Added className */}
            <Lottie animationData={bnnerImg}></Lottie>
          </div>
          <div className="flex-1"> {/* Added className */}
            <AnimatedContent
              distance={80}
              direction="vertical"
              reverse={false}
              duration={1.2}
              threshold={0.2}
              delay={0}
            >
              <h1 className="text-5xl font-bold !text-white"> {/* Added className and !text-white seems redundant if parent is text-white, but kept for now */}
                <SplitText
                  text="The "
                  className="inline-block me-2" // Corrected className prop for SplitText
                  delay={100}
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="center"
                  onLetterAnimationComplete={handleAnimationComplete}
                />
                <SplitText
                  text=" Easiest Way"
                  className="inline-block text-blue-600" // Corrected className prop for SplitText
                  delay={100}
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="center"
                  onLetterAnimationComplete={handleAnimationComplete}
                />
                <br /> {/* Line break for "to Get Your New Job" */}
                <SplitText
                  text="to Get Your New Job"
                  className="text-center" // Corrected className prop for SplitText
                  delay={100}
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="center"
                  onLetterAnimationComplete={handleAnimationComplete}
                />
              </h1>
              <p className="py-6"> {/* Added className */}
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </AnimatedContent>
            <button className="btn btn-primary">Get Started</button> {/* Added className */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;