import React from "react";
import GlitchText from "../../gliseText/GlitchText/GlitchText";
const Loading = () => {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <GlitchText
        speed={1}
        enableShadows={true}
        enableOnHover={true}
        className="custom-class"
      >
       loading..
      </GlitchText>
    </div>
  );
};

export default Loading;
